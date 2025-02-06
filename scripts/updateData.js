const fs = require('fs/promises');
const path = require('path');
const mime = require('mime-types');
const sharp = require('sharp');
const cheerio = require('cheerio');
const html = require('html-escaper');
const crypto = require('crypto');
const Joi = require('joi');
const Handlebars = require('handlebars');
const axios = require('axios');

const origin = 'https://axios-http.com/';
//const origin = 'http://127.0.0.1:8080/';

const absoluteURI = (path) => {
  try {
    return new URL(path, origin).toString();
  } catch(err) {
    console.log(`Failed to parse path [${path}]`);
    return path;
  }
}

/*const converter = new showdown.Converter();*/

Handlebars.registerHelper("sep", function(options){
  if(options.data.last) {
    return options.inverse();
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper("short", function (...args) {
  const options = args.pop();
  const [max = 50] = args;

  let s = options.fn(this)?.trim();

  if (s.length > max + 1) {
    s = s.slice(0, max) + '...';
  }

  return new Handlebars.SafeString(s);
});

Handlebars.registerHelper("table", function(...args) {
  const options = args.pop();
  const [context, columns = 1, separate, fill] = args;

  const rows = [[]];
  let arr = rows[0];

  const width = 100 / columns;

  if (fill) {
    for (let i = columns - context.length % columns; i > 0; i--) {
      context.push(null);
    }
  }

  const last = context.length - 1;

  context.forEach((that, i) => {
    arr.push(`<td align="center" width="${width}%">${options.fn(that)}</td>`);

    last !== i && arr.length === columns && rows.push(arr = []);
  });

  return new Handlebars
    .SafeString(separate ?
      rows.map(cells => `<table align="center"><tr>${cells.join('')}</tr></table>`).join('') :
      `<table align="center" width="100%">${rows.map(cells => `<tr width="${width}%">${cells.join('')}</tr>`).join('')}</table>`
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



const axiosInstance = axios.create({
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

const DAY = 24 * 3600;
const MONTH = 30 * DAY;
const PERIOD = 30;

const readJSON = async (fileName) => JSON.parse(String(await fs.readFile(fileName)));
const writeJSON = async (fileName, data) => await fs.writeFile(fileName, JSON.stringify(data, null, 2));

const ensurePath = async (path) => {
  try {
    await fs.mkdir(path, { recursive: true });
  } catch (e){

  }
}

const makeUTMURL = (url, bypass, params) => {
  try {
    const urlObj = new URL(url);

    const {searchParams} = urlObj;

    if(!bypass) {
      Object.entries({
        utm_source: 'axios',
        utm_medium: 'sponsorlist',
        utm_campaign: 'sponsorship',
        ...params
      }).forEach(([param, value]) => {
        !searchParams.has(param) && searchParams.set(param, value)
      });
    }

    return urlObj.toString();
  } catch (err) {
    console.warn(`Failed to make UTM link for [${url}]: ${err}`);
  }
}

const getWithRetry = (url, retries = 3) => {
  let counter = 0;
  const doRequest = async () => {
    try {
      return await axiosInstance.get(url)
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

  return data.map((sponsor) => {
    const {profile} = sponsor;
    const login = new URL(profile).pathname.split('/').pop();

    console.log(`Open Collective member: ${login}`);

    return {
      ...sponsor,
      login
    }
  });
}

const processAvatars = async (sponsorsData, avatarsPath = './assets/sponsors/opencollective/') => {
  await ensurePath(avatarsPath);

  await Promise.all(Object.values(sponsorsData).map(async (sponsor) => {
    const {image, profile, displayName} = sponsor;

    console.log(`Process avatar [${image}] for [${displayName}]`);

    try {
      if (!/^https?:/.test(image)) {
        return;
      }

      const {data, headers} = await axiosInstance.get(image, {responseType: 'arraybuffer'});

      const login = profile ? new URL(profile).pathname.split('/').pop() : undefined;

      const ext = mime.extension(headers.getContentType()) || '';

      const localAvatarPath = path.join(avatarsPath, `${login || displayName}${ext ? '.' + ext : ''}`);

      const sharpImage = await sharp(data)
        .trim({
          background: {r: 255, g: 255, b: 255, alpha: 0}
        })
        .resize(400, 150, {
          fit: sharp.fit.inside,
          withoutEnlargement: true
        });

      await sharpImage.png().toFile(localAvatarPath);

      sponsor.image = '/' + localAvatarPath;

      console.log(`Avatar for [${displayName}] saved as [${sponsor.image}]`);
    } catch(err){
      console.log(`Error while loading logo [${image}]: ${err}`);
      sponsor.image = '';
    }
  }));
}

const addImageMetadata = async (sponsors) => {
  await Promise.all(Object.values(sponsors).map(async (sponsor) => {
    const {image} = sponsor;
    if(!image) return;
    try {
      const {width, height, format} = await sharp('.' + image).metadata();

      sponsor.imageWidth = width;
      sponsor.imageHeight = height;
      sponsor.isWideImage = sponsor.showCaption === undefined && width > height * 1.8;
      sponsor.imageType = format;
    } catch(err) {
      console.log(`Error while reading image metadata [${image}]: ${err}`);
    }
  }));
}

const downloadImage = async (src, maxWidth = 32, maxHeight = 32, imagesPath = './assets/sponsors/') => {
  let buffer;
  let name, ext;

  console.log(`Download [${src}] and resize image to ${maxWidth} x ${maxHeight}`);

  try {
    if (/^https?:/.test(src)) {
      const {data, headers} = await axiosInstance.get(src, {responseType: 'arraybuffer'});
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
    const {data} = await axiosInstance.get(website);
    const $ = cheerio.load(data);

    return $('head > meta[name=description]').first().attr('content') || $('head > meta[name=title]').first().attr('content');
  } catch (e) {
    console.log(`Error while loading page ${website}: ${e}`);
  }
}

const fitInRect = (w, h, mw = w, mh = h) => {
  const ws = w / mw;
  const hs = h / mh;

  if (ws > hs) {
    return ws > 1 ? [mw, Math.round(h / ws)] : [w, h];
  } else {
    return hs > 1 ? [Math.round(w / hs), mh] : [w, h];
  }
}

const renderMarkdownSponsors = async (sponsors) => {
  const render = async (sponsors, caption = 'Sponsors', cells, width = 300, height= 70, separate = false) => {

    return await renderTemplate({
      caption,
      cells,
      separate,
      fill: true,
      sponsors: sponsors.map(sponsor => {
        const [w = 0, h = 0] = sponsor.image ? fitInRect(sponsor.imageWidth, sponsor.imageHeight, width, height) : [];

        const links = {};

        if (sponsor.website && (!sponsor.links || !Object.keys(sponsor.links).length)) {
          let host;

          try {
            host = new URL(sponsor.website).host;
          } catch {

          }

          sponsor.links = {
            [host || 'Website']: sponsor.website
          };
        }

        sponsor.links && Object.entries(sponsor.links).forEach(([name, href]) =>{
          links[name] = href ? makeUTMURL(href, !sponsor.autoUTMLinks, {
            utm_source: 'axios',
            utm_medium: 'readme_sponsorlist',
            utm_campaign: 'sponsorship',
          }) : '';
        });

        return {
          ...sponsor,
          links,
          image: sponsor.image && absoluteURI(sponsor.image),
          image_dark: sponsor.image_dark && absoluteURI(sponsor.image_dark),
          readmeImageWidth: w,
          readmeImageHeight: h
        };
      }),
    }, './templates/sponsors.hbs');
  }

  const filterSponsors = (fn) => Object.values(sponsors)
    .filter(fn)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const rendered = [];

  rendered.push(await render(filterSponsors(({benefits, isActive, tierId}) => {
    return isActive && benefits.readme && tierId === 'platinum';
  }), '💎 Platinum sponsors', 1, 300, 90,  true));

  rendered.push(await render(filterSponsors(({benefits, isActive, tierId}) => {
    return isActive && benefits.readme && tierId === 'gold';
  }), '🥇 Gold sponsors', 3, 200, 70));

  rendered.push(await render(filterSponsors(({benefits, isActive, tierId}) => {
    return isActive && benefits.readme && tierId === 'silver';
  }), '🥈 Silver sponsors', 4, 150, 50));

  return rendered.join('\n');
}

const schema  = Joi.object({
  github: Joi.string().alphanum().max(255),
  displayName: Joi.string().alphanum().min(1).max(64),
  website: Joi.string().alphanum().max(255),
  alt: Joi.string().alphanum().max(255),
  icon: Joi.string().alphanum().max(255),
  image: Joi.string().alphanum().max(255),
  image_dark: Joi.string().alphanum().max(255),
  targetLink: Joi.string().alphanum().max(255),
  twitter: Joi.string().alphanum().max(255),
  video: Joi.string().alphanum().max(255),
  description: Joi.string().alphanum().max(1000),
  links: Joi.object({}).unknown(true),
  showCaption: Joi.boolean(),
  crown: Joi.boolean(),
  hide: Joi.boolean()
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

          const {data} = await axiosInstance.get(targetURI);

          schema.validate(data);

          ['github', 'displayName', 'website', 'alt', 'image', 'image_dark', 'description', 'icon', 'video', 'twitter', 'targetLink']
            .forEach(key => {
              if (data[key] !== undefined) {
                sponsor[key] = String(data[key]);
              }
            });

          data.links && (sponsor.links = data.links);

          'showCaption' in data && (sponsor.showCaption = !!data.showCaption);
          data.crown === false && (sponsor.benefits.crown = false);
          data.hide === true && (sponsor.hide = true);
        }
      }
    } catch (err) {
      console.warn(String(err));
    }
  }
}



const renderTooltip = async (sponsor) => {
  let {icon, isActive, displayName, tier, lastTransactionAmount, price, description, website, benefits, video, autoUTMLinks, links} = sponsor;

  const iconSrc = icon && (await downloadImage(icon));

  const iconHTML = iconSrc ? `<img class="sponsor-icon" src="/${iconSrc}" alt="${html.escape(displayName)}"/>` : '';

  const renderedTier = isActive && tier.toLowerCase() === 'backer' ? `${price || lastTransactionAmount || 0}$ a month` : tier;

  let tooltip = `<h2 class="caption">${iconHTML}<span>${html.escape(displayName)} (${sponsor.totalAmountDonated || 0}$${' <sup class="tier">' + renderedTier + '</sup>'})</span></h2> `;

  if (!description && website) {
    description = sponsor.description = await getPageDescription(website);

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

  if (benefits.links && linksArray.length && benefits.links) {
    const rendered = linksArray.slice(0, benefits.links).map(([text, entry]) => {
      const {href} = typeof entry === 'string' ? {
        href: entry
      } : entry || {};

      return `<a href="${makeUTMURL(href, !autoUTMLinks)}">${html.escape(text)}</a>`;
    }).join('');

    tooltip += `<div class="links">${rendered}</div>`
  }

  const icons = Object.entries(social).map(([name, icon]) => {
    const link = sponsor[name];

    if(!link) return;

    return `<a href="${makeUTMURL(link, !autoUTMLinks)}"><img class="icon" src="/assets/icons/social/${icon}" alt="sponsor icon"/></a>`;
  }).filter(Boolean).join('');

  tooltip += `<div class="social">${icons}</div>`

  return tooltip;
}

const findTier = (price, tiers) => {
  let found;
  let max = 0;

  price && Object.entries(tiers).forEach(([tier, data]) => {
    if (data.price <= price && max < price) {
      max = data.price;
      found = tier;
    }
  });

  return found;
}

const processSponsors = async (collectiveSponsors, sponsorsConfig = './data/sponsors.json') => {

  const {
    sponsors,
    tiers,
    scoreTierPriceFactor = 0.5,
    scoreTotalAmountFactor = 0.2,
    creditDays = 0
  } = await readJSON(sponsorsConfig) || {};

  const mergedSponsors = {};

  // merge Open Collective sponsors
  collectiveSponsors.forEach(sponsor => {
    if (sponsor.role !== 'BACKER' && sponsor.role) {
      return;
    }

    const {isActive, totalAmountDonated, lastTransactionAmount} = sponsor;

    sponsor.isActive = !!(isActive && lastTransactionAmount > 0 && totalAmountDonated);

    mergedSponsors[sponsor.login] = {...sponsor};
  });

  // merge sponsors from sponsors.json
  Object.entries(sponsors).forEach(([login, local]) => {
    let collective = mergedSponsors[login];

    mergedSponsors[login] = {
      login,
      ...collective,
      ...local,
      localConfig: {...local},
      manualBilling: !!(local.lastTransactionAt && local.lastTransactionAmount || local.endDate)
    }
  });



  // normalize sponsors config
  Object.entries(mergedSponsors).forEach(([login, sponsor]) => {
    if (!sponsor.tier) {
      sponsor.tier = 'backer';
    }

    let {isActive, tier, lastTransactionAmount = 0, lastTransactionAt, manualBilling, localConfig} = sponsor;

    const tierLower = tier.toLowerCase();

    const tierData = tiers[tierLower];

    if (!tierData) {
      console.log(`Unknown tier [${tier}]`);
    }

    const {price, benefits, period = PERIOD} = tierData || {};

    console.log(sponsor.login);

    const isBacker = tierLower === 'backer';

    sponsor.tierId = tierLower;
    sponsor.tierPrice = isBacker && isActive && lastTransactionAmount ? lastTransactionAmount : price;
    sponsor.totalAmountDonated = sponsor.totalAmountDonated || lastTransactionAmount || 0;

    sponsor.associatedTierId = tierLower;


    let assoc;

    if (localConfig?.isActive === false) {
      sponsor.isActive = false;
    } else if (tier && (manualBilling || tierLower === 'backer')) {
      if(sponsor.endDate || lastTransactionAmount >= price) {
        const pricePerSec = price / (period * DAY);
        const timePaid = lastTransactionAmount / pricePerSec
        const endDate = sponsor.endDate = sponsor.endDate || +(new Date(lastTransactionAt)) + timePaid * 1000;
        const timeLeft = new Date(endDate) - Date.now();

        sponsor.timeLeft = Math.round(timeLeft / 1000); // seconds
        sponsor.isActive = sponsor.timeLeft > 0;
      } else {
        sponsor.isActive = false;
      }
    }

    if( Date.now() - new Date(sponsor.boostEnd) > 0) {
      sponsor.boost = sponsor.boost || 1;
    }

    if (isActive && isBacker && !localConfig?.tier && (assoc = findTier(lastTransactionAmount, tiers))) {
      const tier = assoc.toLowerCase();
      tier !== 'backer' && (sponsor.associatedTierId = tier);
    }

    sponsor.isActive = sponsor.isActive === true;

    sponsor.benefits = {
      ...benefits,
      ...sponsor.benefits
    };

    sponsor.autoUTMLinks = sponsor.autoUTMLinks !== false;

    let displayName = sponsor.displayName || sponsor.name || sponsor.login || login;

    if (displayName && /^https?:\/\//.test(displayName = displayName.trim())) {
      try {
        displayName = new URL(displayName).host;
      } catch (err) {
        console.log(`Failed to process url as a name: ${err}`);
      }
    }

    sponsor.displayName = displayName;
  });




  const normalizedSponsors = await Promise.all(Object.values(mergedSponsors).map(async (sponsor) => {
    let {isActive, benefits, autoUTMLinks} = sponsor;

    if (isActive && benefits.github) {
      await processGithub(sponsor);
    }

    let {website, displayName} = sponsor;

    console.log(`Process sponsor [${displayName}]\n`);

    sponsor.tooltip = await renderTooltip(sponsor);

    let targetLink = sponsor.targetLink || website || sponsor.twitter || sponsor.github || sponsor.profile || undefined;

    sponsor.targetLink = targetLink && makeUTMURL(targetLink, !autoUTMLinks) || undefined;

    return {...sponsor};
  }));

  const sortedSponsors = {};

  normalizedSponsors.map((sponsor) => {
    const createdAt = new Date(sponsor.createdAt);
    const monthsPassed = (Date.now() - createdAt) / (MONTH * 1000);
    const averageMonthlyContribution = sponsor.totalAmountDonated / (monthsPassed || 1);

    const {tier, tierPrice, timeLeft, endDate} = sponsor;

    sponsor.visual = {
      opacity: timeLeft == null || timeLeft > 0 ? 1 :(sponsor.timeLeft / (creditDays * DAY))
    }

    console.log(
      `Add sponsor badge [${sponsor.displayName}]
        - tier: ${tier ? tier + '(' + tierPrice + '$)' : '< none >'}
        - total amount donated: ${sponsor.totalAmountDonated}$
        - last donation date: ${sponsor.lastTransactionAt}
        - created: ${sponsor.createdAt}
        - target link: ${sponsor.targetLink}
        - end date: ${endDate ? new Date(endDate) : '---'}
        - benefits: ${
            Object.entries(sponsor.benefits).map(([benefit, value]) => benefit + ': ' + value).join(', ')
          }
      `);

    return {
      ...sponsor,
      averageMonthlyContribution,
      score: Math.round(sponsor.totalAmountDonated * scoreTotalAmountFactor + averageMonthlyContribution + tierPrice * scoreTierPriceFactor)
    };
  })
    .sort((a, b) => b.score - a.score)
    //.sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
    //.sort((a, b) => b.hasActiveTier - a.hasActiveTier)
    .sort((a, b) => (b.index || 0) - (a.index || 0))
    .sort((a, b) => b.boost - a.boost)
    .forEach((sponsor) => {
      sortedSponsors[sponsor.login] = sponsor;
    })

  await processAvatars(sortedSponsors);

  await addImageMetadata(sortedSponsors);

  return sortedSponsors;
};

/*const triggerActionEvent = async (token, owner, repo) => {
  try {
    const {data} = await axios.post(`https://api.github.com/repos/${owner}/${repo}/dispatches`, {
      "event_type": "webhook"
    }, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `token ${token}`
      }
    });

    console.log(data);
  } catch (err) {
    console.log(`Request failed: ${err}`);
  }
}*/

const updateReadmeSponsors = async(sponsors) => {
  const markdown = await renderMarkdownSponsors(sponsors);
  try {
    await fs.mkdir('./public/data', {recursive: true}).catch(() => {});
    await fs.writeFile('./public/data/sponsors.md', markdown);
  } catch(err) {
    console.log(err);
  }
}


((async (dataFile) => {
  const sponsors = await pullSponsors('axios', {type: 'all'});

  await ensurePath(path.dirname(dataFile));

  const sorted = await processSponsors(sponsors);

  await writeJSON(dataFile, {
    sponsors: Object.values(sorted)
  });


  await updateReadmeSponsors(sorted);

})('./temp/data.json'));

