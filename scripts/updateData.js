const fs = require('fs/promises');
const path = require('path');
const mime = require('mime-types');
const sharp = require('sharp');
const cheerio = require('cheerio');
const html = require('html-escaper');
const crypto = require('crypto');

const axios = require("axios").create({
  headers: {
    "User-Agent": 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  }
});

const social = {
  website: 'website.png',
  facebook: 'facebook.png',
  github: 'github.png',
  instagram: 'instagram.png',
  reddit: 'reddit.png',
  tiktok: 'tiktok.png',
  twitter: 'twitter.png',
  youtube: 'youtube.png'
}

const parseURL = (url) => {
  try{
    return new URL(url);
  } catch(e) {
    return null;
  }
}

const MONTH = 30 * 24 * 3600 * 1000;

const readJSON = async (fileName) => JSON.parse(String(await fs.readFile(fileName)));
const writeJSON = async (fileName, data) => await fs.writeFile(fileName, JSON.stringify(data, null, 2));

const ensurePath = async (path) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (e){

  }
}

const makeUTMURL = (url, params) => {
  const urlObj = new URL(url);

  const {searchParams} = urlObj;

  if (!searchParams.utm_source && !searchParams.utm_campaign) {
    Object.entries({
      utm_source: 'axios',
      utm_medium: 'sponsorlist',
      utm_campaign: 'sponsorship',
      ...params
    }).forEach(([param, value]) => searchParams.set(param, value));
  }

  return urlObj.toString();
}

const getWithRetry = (url, retries = 3) => {
  let counter = 0;
  const doRequest = async () => {
    try {
      return await axios.get(url)
    } catch (err) {
      if (counter++ >= retries) {
        throw err;
      }
      await new Promise(resolve => setTimeout(resolve, counter ** counter * 1000));
      return doRequest();
    }
  }

  return doRequest();
};

const pullSponsors = async (collective, {type = 'organizations'} = {}) => {
  const {data} = await getWithRetry(`https://opencollective.com/${collective}/members/${type}.json`);

  return data.map(({lastTransactionAt, ...entry}) => {
    const {profile} = entry;

    const login = new URL(profile).pathname.split('/').pop();

    console.log(`Open Collective member: ${login}`);

    return {
      ...entry,
      login
    }
  });
}

const processAvatars = async (sponsorsData, avatarsPath = './assets/sponsors/opencollective/') => {
  await ensurePath(avatarsPath);

  await Promise.all(Object.values(sponsorsData).map(async (sponsor) => {
    const {image, profile} = sponsor;

    try {
      if (!/^https?:/.test(image)) {
        return;
      }

      const {data, headers} = await axios.get(image, {responseType: 'arraybuffer'});

      const login = new URL(profile).pathname.split('/').pop();

      const ext = mime.extension(headers.getContentType()) || '';

      const localAvatarPath = path.join(avatarsPath, `${login}${ext ? '.' + ext : ''}`);

      sponsor.image = '/' + localAvatarPath;

      await sharp(data)
        .resize(400, 150, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        })
        .png()
        .toFile(localAvatarPath)

    } catch(err){
      console.log(`Error while loading logo [${image}]: ${err}`);
      sponsor.image = '';
    }
  }));
}

const downloadImage = async (src, maxWidth = 32, maxHeight = 32, imagesPath = './assets/sponsors/') => {
  let buffer;
  let name, ext;

  console.log(`Download [${src}] and resize image to ${maxWidth} x ${maxHeight}`);

  try {
    if (/^https?:/.test(src)) {
      const {data, headers} = await axios.get(src, {responseType: 'arraybuffer'});
      name = new URL(src).pathname.split('/').pop();
      ext = mime.extension(headers.getContentType()) || '';
      buffer = data;
    } else {
      buffer = await fs.readFile(src);
      ext = path.extname(src);
      name = path.basename(src, ext);
      ext = ext.replace(/^\./, '');
    }

    const sha = crypto.createHash('sha1')

    const dest = `${name}_${sha.update(src).digest('hex')}${ext ? '.' + ext : ''}`;

    const fullPath = path.join(imagesPath, dest);

    console.log(`Save as [${fullPath}]`);

    await sharp(buffer)
      .resize(maxWidth, maxHeight, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .png()
      .toFile(fullPath);

    return fullPath;
  } catch (err) {
    console.log(`Error while loading logo [${src}]: ${err}`);
  }
}

const getPageDescription = async (website) => {
  try {
    const {data} = await axios.get(website);
    const $ = cheerio.load(data);

    return $('head > meta[name=description]').first().attr('content') || $('head > meta[name=title]').first().attr('content');
  } catch (e) {
    console.log(`Error while loading page ${website}: ${e}`);
  }
}

const processSponsors = async (sponsorsData, sponsorsConfig = './data/sponsors.json') => {
  const computedSponsors = {};
  const {
    sponsors,
    tiers,
    totalAmountDonatedThreshold = 100,
    monthlyContributionThreshold = 10,
    disappearCredit = 10,
    scoreTierPriceFactor = 0.5,
    scoreTotalAmountFactor = 0.2
  } = await readJSON(sponsorsConfig) || {};

  // merge Open Collective sponsors
  sponsorsData.forEach(sponsor => {
    if (sponsor.role !== 'BACKER' && sponsor.role && sponsor.totalAmountDonated <= 0) {
      return;
    }

    computedSponsors[sponsor.login] = {...sponsor};
  });

  // merge config sponsors
  Object.entries(sponsors).forEach(([login, entry]) => {
    const existing = computedSponsors[login] || {};

    computedSponsors[login] = {login, ...existing, ...entry};
  });

  await Promise.all(Object.values(computedSponsors).map(async (sponsor) => {
    let {login, icon, website, displayName, description, links} = sponsor;

    sponsor.displayName = displayName = displayName || sponsor.name || login;

    console.log(`Process sponsor [${displayName}]`);

    const iconHTML = icon ? `<img class="sponsor-icon" src="${await downloadImage(icon)}" alt="${login}"/>` : '';

    let tooltip = `<h2 class="caption">${iconHTML}<span>${displayName} (${sponsor.totalAmountDonated}$${sponsor.tier && sponsor.isActive ? ' <sup class="tier">' + sponsor.tier + '</sup>' : ''})</span></h2> `;

    if (!description && website) {
      description = await getPageDescription(website);

      console.log(`Website ${website} description: ${description}`);
    }

    if (description) {
      tooltip += `<div class="description">${description}</div>`;
    }

    const linksArray = Object.entries(links || {});

    if (linksArray.length) {
      const rendered = linksArray.map(([text, entry]) => {
        const {href} = typeof entry === 'string' ? {
          href: entry
        } : entry || {};

        return `<a href="${makeUTMURL(href)}">${html.escape(text)}</a>`;
      }).join('');

      tooltip += `<div class="links">${rendered}</divclass>`
    }

    const icons = Object.entries(social).map(([name, icon]) => {
      const link = sponsor[name];

      if(!link) return;

      return `<a href="${makeUTMURL(link)}"><img class="icon" src="/assets/icons/social/${icon}"/></a>`;
    }).filter(Boolean).join('');

    tooltip += `<div class="social">${icons}</div>`

    sponsor.tooltip = tooltip;

    sponsor.targetLink = website || sponsor.twitter || sponsor.github || sponsor.profile;

    const parsed = parseURL(sponsor.targetLink);

    sponsor.utmLink = !sponsor.utmLink && parsed && makeUTMURL(sponsor.targetLink);
  }));

  const sortedSponsors = {};

  Object.values(computedSponsors).map((sponsor) => {
    const createdAt = new Date(sponsor.createdAt);
    const monthsPassed = (Date.now() - createdAt) / MONTH;
    const averageMonthlyContribution = sponsor.totalAmountDonated / (monthsPassed || 1);

    const {isActive} = sponsor;
    const tier = isActive && String(sponsor.tier || '').toLowerCase();
    const hasActiveTier = !!(tier && tier !== 'backer');
    const {price = 0, benefits = null} = tier && tiers[tier] || {};

    sponsor.benefits = {
      // backers without active tier
      showAtSponsorList: sponsor.totalAmountDonated >= totalAmountDonatedThreshold && averageMonthlyContribution >= monthlyContributionThreshold,
      ...benefits
    };

    const creditLeft = averageMonthlyContribution - monthlyContributionThreshold;

    sponsor.visual = {
      opacity: hasActiveTier ? 1 : Math.max(0.5, Math.min(1, creditLeft / disappearCredit)).toFixed(1)
    }

    console.log(
      `Add sponsor badge [${sponsor.displayName}]
        - tier: ${tier ? tier + '(' + price + '$)' : '< none >'}
        - total amount donated: ${sponsor.totalAmountDonated}$
        - website: ${sponsor.website}
        - credit left: ${creditLeft}$
        - has active tier: ${hasActiveTier}
        - showAtSponsorList: ${sponsor.benefits.showAtSponsorList}
      `);

    return {
      ...sponsor,
      averageMonthlyContribution: Math.round(averageMonthlyContribution),
      hasActiveTier,
      score: Math.round(sponsor.totalAmountDonated * scoreTotalAmountFactor + averageMonthlyContribution + price * scoreTierPriceFactor)
    };
  })
    .sort((a, b) => b.score - a.score)
    //.sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
    //.sort((a, b) => b.hasActiveTier - a.hasActiveTier)
    .sort((a, b) => (b.index || 0) - (a.index || 0))
    .forEach((sponsor) => {
      sortedSponsors[sponsor.login] = sponsor;
    })

  await processAvatars(sortedSponsors);

  return sortedSponsors;
}


((async (dataFile) => {
  const sponsors = await pullSponsors('axios', {type: 'all'});

  await ensurePath(path.dirname(dataFile));

  await writeJSON(dataFile, {
    sponsors: Object.values(await processSponsors(sponsors))
  });
})('./temp/data.json'));

