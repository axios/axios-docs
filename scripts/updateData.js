const fs = require('fs/promises');
const axios = require('axios');
const path = require('path');
const mime = require('mime-types');
const sharp = require('sharp');

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

const pullSponsors = async (collective, {type = 'organizations'} = {}) => {
  const {data} = await axios.get(`https://opencollective.com/${collective}/members/${type}.json`);

  return data.map(({lastTransactionAt, ...entry}) => {
    const {profile, website} = entry;

    const login = new URL(profile).pathname.split('/').pop();

    console.log(`Sponsor: ${login}`);

    const targetLink = website || entry.twitter || entry.github || entry.profile;

    const parsed = parseURL(targetLink);

    const alt = parsed && parsed.origin;

    return {
      ...entry,
      alt,
      login,
      displayName: entry.name || login,
      targetLink,
      utmLink: parsed && makeUTMURL(targetLink)
    }
  });
}

const processAvatars = async (sponsorsData, avatarsPath = './assets/sponsors/opencollective/') => {
  await ensurePath(avatarsPath);

  await Promise.all(Object.values(sponsorsData).map(async (sponsor) => {
    const {image, profile} = sponsor;

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
  }));
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

  Object.entries(sponsors).forEach(([login, entry]) => {
    computedSponsors[login] = {login, ...entry};
  });

  sponsorsData.forEach(sponsor => {
    if (sponsor.role !== 'BACKER' && sponsor.totalAmountDonated <= 0) {
      return null;
    }

    const {login} = sponsor;

    const entry = computedSponsors[login] || null;

    const newEntry = {
      ...sponsor,
      ...entry
    };

    let tooltip = `<h2>${newEntry.displayName} (${sponsor.totalAmountDonated}$${sponsor.tier && sponsor.isActive ? ' <sup class="tier">' + sponsor.tier + '</sup>' : ''})</h2> `;

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

    if (newEntry.description) {
      tooltip += `<div class="description">${newEntry.description}</div>`;
    }

    const icons = Object.entries(social).map(([name, icon]) => {
      const link = sponsor[name];

      if(!link) return;

      return `<a href="${link}"><img class="icon" src="/assets/icons/social/${icon}"/></a>`;
    }).filter(Boolean).join('');

    tooltip += `<div class="social">${icons}</div>`

    computedSponsors[login] = {
      tooltip,
      ...newEntry
    };
  });

  const sortedSponsors = {};

  Object.values(computedSponsors).map((sponsor) => {
    const createdAt = new Date(sponsor.createdAt);
    const monthsPassed = (Date.now() - createdAt) / MONTH;
    const averageMonthlyContribution = sponsor.totalAmountDonated / (monthsPassed || 1);

    const {isActive} = sponsor;
    const {tier} = isActive && sponsor;
    const hasActiveTier = tier && tier !== 'Backer';
    const {price = 0, benefits = null} = tier && tiers[tier] || {};

    sponsor.benefits = {
      showAtSponsorList: sponsor.totalAmountDonated >= totalAmountDonatedThreshold && averageMonthlyContribution >= monthlyContributionThreshold,
      ...benefits
    };

    const creditLeft = averageMonthlyContribution - monthlyContributionThreshold;

    sponsor.visual = {
      opacity: hasActiveTier ? 1 : Math.max(0.5, Math.min(1, creditLeft / disappearCredit)).toFixed(1)
    }

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

