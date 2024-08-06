const fs = require('fs/promises');
const path = require('path');
const mime = require('mime-types');
const sharp = require('sharp');
const cheerio = require('cheerio');
const html = require('html-escaper');
const crypto = require('crypto');
const Joi = require('joi');
const showdown  = require('showdown');
const Handlebars = require('handlebars');

//const origin = 'https://axios-http.com/';
const origin = 'http://127.0.0.1:8080/';

const absoluteURI = (path) => new URL(path, origin);

const converter = new showdown.Converter();

Handlebars.registerHelper("sep", function(options){
  if(options.data.last) {
    return options.inverse();
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper("table", function(...args) {
  const options = args.pop();
  const [context, columns = 1, separate] = args;

  const rows = [[]];
  let arr = rows[0];

  const last = context.length - 1;

  context.forEach((that, i) => {
    arr.push(`<td align="center">${options.fn(that)}</td>`);
    if (i !== last && arr.length === columns) {
      rows.push(arr = []);
    }
  });

  return new Handlebars
    .SafeString(separate ?
      rows.map(cells => `<table align="center"><tr>${cells.join('')}</tr></table>`).join('') :
      `<table align="center">${rows.map(cells => `<tr>${cells.join('')}</tr>`).join('')}</table>`
    );
});

const removeExtraLineBreaks = (str) => str.replace(/(?:\r\n|\r|\n){3,}/gm, '\r\n\r\n');

const cleanTemplate = template => template
  .replace(/\s\s+/g, ' ')
  .replace(/\n +/g, '\n')
  .replace(/^ +/, '')
  .replace(/\n\n\n+/g, '\n\n')
  .replace(/\n\n$/, '\n');

const renderTemplate = async (data, template) => {
  const compile = Handlebars.compile(String(await fs.readFile(template)))

  const content = compile(data);

  return removeExtraLineBreaks(cleanTemplate(content));
}



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

const DAY = 24 * 3600 * 1000;
const MONTH = 30 * DAY;
const PERIOD = MONTH;

const readJSON = async (fileName) => JSON.parse(String(await fs.readFile(fileName)));
const writeJSON = async (fileName, data) => await fs.writeFile(fileName, JSON.stringify(data, null, 2));

const ensurePath = async (path) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (e){

  }
}

const makeUTMURL = (url, params, rewrite) => {
  const urlObj = new URL(url);

  const {searchParams} = urlObj;

  if (rewrite || (!searchParams.utm_source && !searchParams.utm_campaign)) {
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
    const {image, profile, displayName} = sponsor;

    try {
      if (!/^https?:/.test(image)) {
        return;
      }

      const {data, headers} = await axios.get(image, {responseType: 'arraybuffer'});

      const login = profile ? new URL(profile).pathname.split('/').pop() : undefined;

      const ext = mime.extension(headers.getContentType()) || '';

      const localAvatarPath = path.join(avatarsPath, `${login || displayName}${ext ? '.' + ext : ''}`);

      sponsor.image = '/' + localAvatarPath;

      await sharp(data)
        .trim({
          background: {r: 255, g: 255, b: 255, alpha: 0}
        })
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
      buffer = await fs.readFile(src.replace(/^\//, './'));
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


const renderSponsors = async (sponsors, caption) => {
  let {description} = sponsor;

  const html = `<div>test</div>`;

  console.log(converter.makeMarkdown(html));
};

const renderMarkdownSponsors = async (sponsors) => {
  const render = async (sponsors, caption = 'Sponsors', cells, width = 400, separate = false) => await renderTemplate({
    caption,
    cells,
    width,
    separate,
    sponsors: sponsors.map(sponsor => ({
      ...sponsor,
      image: sponsor.image && absoluteURI(sponsor.image),
      image_black: sponsor.image && absoluteURI(sponsor.image_black)
    })),
  }, './templates/sponsors.hbs');

  const filterSponsors = (fn) => Object.values(sponsors).filter(fn);

  const rendered = [];

  rendered.push(await render(filterSponsors(({benefits, isActive, tier}) => {
    return isActive && benefits.readme && tier === 'platinum';
  }), '💎 Platinum sponsors', 1, 400, true));

  rendered.push(await render(filterSponsors(({benefits, isActive, tier}) => {
    return isActive && benefits.readme && tier === 'gold';
  }), '🥇 Gold sponsors', 2, 300));

  return rendered.join('\n');
}

/*const updateReadmeSponsors = async (dest, path, sponsors, marker = '<br><br>') => {
  let {data} = await getWithRetry(`https://api.github.com/repos/axios/axios/contents/${dest}`);

  let content = Buffer.from(data.content, 'base64').toString();

  const index = content.indexOf(marker);

  if(index >= 0) {
    const sponsorBlock = await renderMarkdownSponsors(sponsors)

    content = sponsorBlock + '\n' + content.slice(index);

    await fs.writeFile(path, content);
  } else {
    console.warn(`Can not find marker (${marker}) in ${uri}`);
  }
};*/














const schema  = Joi.object({
  github: Joi.string().alphanum().max(255),
  displayName: Joi.string().alphanum().min(1).max(64),
  website: Joi.string().alphanum().max(255),
  alt: Joi.string().alphanum().max(255),
  icon: Joi.string().alphanum().max(255),
  image: Joi.string().alphanum().max(255),
  targetLink: Joi.string().alphanum().max(255),
  twitter: Joi.string().alphanum().max(255),
  video: Joi.string().alphanum().max(255),
  description: Joi.string().alphanum().max(1000),
  links: Joi.object({}).unknown(true)
}).unknown(true);

const processGithub = async (sponsor, repo = 'axios-sponsor', file = 'sponsor.json') => {
  let {github, displayName} = sponsor;

  console.log(`Process github (${github}) of ${displayName}...`);

  if (github && (github = github.trim())) {
    try {
      const url = new URL(github);
      if (url.hostname === 'github.com') {
        const [githubUser] = url.pathname.slice(1).split('/');

        if (githubUser) {
          const targetURI = `https://raw.githubusercontent.com/${githubUser}/${repo}/main/${file}`;

          console.log(`Pull sponsor content from [${targetURI}]`);

          const {data} = await axios.get(targetURI);

          schema.validate(data);

          console.log(data);

          ['github', 'displayName', 'website', 'alt', 'image', 'description', 'icon', 'video', 'twitter', 'targetLink']
            .forEach(key => {
              if (data[key] !== undefined) {
                sponsor[key] = String(data[key]);
              }
            });

          data.links && (sponsor.links = data.links);
        }
      }
    } catch (err) {
      console.warn(String(err));
    }
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

    const sponsor = computedSponsors[login] = {login, ...existing, ...entry};

    let {isActive, tier, lastTransactionAmount = 0, profile} = sponsor;

    const isOpenCollective = !!profile;

    const createdAt = new Date(sponsor.createdAt);

    const days = (Date.now() - createdAt) / DAY;

    const {price, benefits} = tiers[tier];

    let isBacker = tier !== 'backer';

    if (!isOpenCollective) {
      const pricePerDay = price / PERIOD;
      //const paid = price /
      isActive = price / lastTransactionAmount;
    }


    sponsor.activeTier = isActive && tier ? {
      name: tier,
      price,
      benefits
    } : null;
  });

  await Promise.all(Object.values(computedSponsors).map(async (sponsor) => {
    let {isActive} = sponsor;

    if (isActive === undefined && sposnor.tier) {
      const createdAt = new Date(sponsor.createdAt);
      const monthsPassed = (Date.now() - createdAt) / MONTH;

      isActive = monthsPassed < 1;
    }

    const tier = isActive && String(sponsor.tier || '').toLowerCase();
    const hasActiveTier = !!(tier && tier !== 'backer');
    let {price, benefits} = tier && tiers[tier] || {};

    sponsor.tier = tier;
    benefits = sponsor.benefits = Object.assign(sponsor.benefits || {}, benefits);
    sponsor.price = price || 0;
    sponsor.hasActiveTier = hasActiveTier;

    if (benefits.github) {
      await processGithub(sponsor);
    }

    let {login, icon, website, displayName, description, links, video} = sponsor;

    sponsor.displayName = displayName = displayName || sponsor.name || login;

    console.log(`Process sponsor [${displayName}]\n`, benefits);

    const iconSrc = icon && (await downloadImage(icon));

    const iconHTML = iconSrc ? `<img class="sponsor-icon" src="/${iconSrc}" alt="${html.escape(login)}"/>` : '';

    let tooltip = `<h2 class="caption">${iconHTML}<span>${html.escape(displayName)} (${sponsor.totalAmountDonated}$${sponsor.tier && sponsor.isActive ? ' <sup class="tier">' + sponsor.tier + '</sup>' : ''})</span></h2> `;

    if (!description && website) {
      description = await getPageDescription(website);

      console.log(`Website ${website} description: ${description}`);
    }

    if (description) {
      tooltip += `<div class="description">${html.escape(description)}</div>`;
    }

    if (benefits.video && video) {
      try {
        const {hostname} = new URL(video);

        if (/youtube.com$/.test(hostname)) {
          tooltip += `<div class="video"><iframe width="426" height="240" src="${html.escape(video)}"></iframe></div>`;
        }
      } catch (e) {
        console.warn(`Failed to include youtube link: ${e}`);
      }
    }

    const linksArray = Object.entries(links || {});

    if (benefits.links && linksArray.length) {
      const rendered = linksArray.slice(0, benefits.links).map(([text, entry]) => {
        const {href} = typeof entry === 'string' ? {
          href: entry
        } : entry || {};

        return `<a href="${makeUTMURL(href)}">${html.escape(text)}</a>`;
      }).join('');

      tooltip += `<div class="links">${rendered}</div>`
    }

    const icons = Object.entries(social).map(([name, icon]) => {
      const link = sponsor[name];

      if(!link) return;

      return `<a href="${makeUTMURL(link)}"><img class="icon" src="/assets/icons/social/${icon}"/></a>`;
    }).filter(Boolean).join('');

    tooltip += `<div class="social">${icons}</div>`

    sponsor.tooltip = tooltip;

    sponsor.targetLink = sponsor.targetLink || website || sponsor.twitter || sponsor.github || sponsor.profile;

    const parsed = parseURL(sponsor.targetLink);

    sponsor.utmLink = !sponsor.utmLink && parsed && makeUTMURL(sponsor.targetLink);
  }));

  const sortedSponsors = {};

  Object.values(computedSponsors).map((sponsor) => {
    const createdAt = new Date(sponsor.createdAt);
    const monthsPassed = (Date.now() - createdAt) / MONTH;
    const averageMonthlyContribution = sponsor.totalAmountDonated / (monthsPassed || 1);

    const {isActive, benefits, tier, price, hasActiveTier} = sponsor;

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

  const sorted = await processSponsors(sponsors);

  await writeJSON(dataFile, {
    sponsors: Object.values(sorted)
  });

  const markdown = await renderMarkdownSponsors(sorted);

  await fs.writeFile('./public/data/sponsors.md', markdown);

})('./temp/data.json'));

/*(async() => {
  await processGithub({
    "fake" : {
      "github": "https://github.com/DigitalBrainJS",
      "image": "/assets/sponsors/route4me.png",
      "website": "https://route4me.com/",
      "alt": "Route Planner and Route Optimizer",
      "isActive": true,
      "totalAmountDonated": 300,
      "createdAt": "2024-07-22 00:00"
    }
  })
})();*/

/*(async() => {
  console.log(await downloadImage('/assets/sponsors/dummy2.png'));
})();*/

const sponsors = {
  foo: {
    "github": "https://github.com/fakeGitHib",
    "image": "/assets/sponsors/dummy1.png",
    "description": "The Umbrella Corporation is a pharmaceutical company that also deals with the development and sales of bio-weapons",
    "website": "https://google.com/",
    "displayName": "Umbrella Corporation",
    "alt": "Cool alt text",
    "icon": "/assets/sponsors/dummy2.png",
    "video": "https://www.youtube.com/embed/isosE4Bowh0",
    "links": {
      "About": "https://google.com/",
      "Vacancies": "https://google.com/",
      "Contacts": "https://google.com/"
    }
  },
  bar: {
    "github": "https://github.com/fakeGitHib",
    "image": "https://github.com/axios/axios/assets/4814473/75c37f4d-36e6-44f5-a068-3edd77c00a10",
    "description": "The Umbrella Corporation is a pharmaceutical company that also deals with the development and sales of bio-weapons",
    "website": "https://google.com/",
    "displayName": "Umbrella Corporation",
    "alt": "Cool alt text",
    "icon": "/assets/sponsors/dummy2.png",
    "video": "https://www.youtube.com/embed/isosE4Bowh0",
    "links": {
      "About": "https://google.com/",
      "Vacancies": "https://google.com/",
      "Contacts": "https://google.com/"
    }
  }
};

/*(async() => {
  console.log(await renderMarkdownSponsors([
    sponsors.foo,
    sponsors.bar
  ]));
})();*/

