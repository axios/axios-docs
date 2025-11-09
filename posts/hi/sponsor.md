---
title: 'Sponsoring Axios'
---

Thank you for considering supporting our project. Your donation will be used to maintain and develop Axios.

As a benefit to our major sponsors, we provide the opportunity to add your logo and brief
information to our website and/or [Readme.md](https://github.com/axios/axios) depending on the tier of support you choose.
This process is fully automated if you donate through [OpenCollective.com](https://opencollective.com/axios/contribute),
so your logo will be added within 24 hours.

Your logo can be placed:
- in the carousel on the main page
- in carousels on each page of the documentation
- at the top of [Readme.md](https://github.com/axios/axios) in our repo

Place in the carousel depends on:
- newness of the sponsor (new sponsors temporarily receive higher places)
- selected support tier
- total amount of money donated
- consistency of donations

If you donate through [GitHub](https://github.com/sponsors/axios), you will need to contact us later if you want your logo to be promoted according
to our support tiers.

### Tiers

See tiers list on [Open Collective](https://opencollective.com/axios/contribute)

|                                             |   Bronze   |   Silver    |    Gold     |     Platinum     |
|---------------------------------------------|:----------:|:-----------:|:-----------:|:----------------:|
| Main page                                   | small logo | medium logo | large logo  | extra large logo |
| Docs pages                                  |            |             | medium logo |    large logo    |
| [Readme.md](https://github.com/axios/axios) |            |             | small logo  |   medium logo    |
| Data merging from sponsor's GitHub repo     |            |      +      |      +      |        +         |
| Links block in tooltip*                     |            |             |      +      |        +         |
| Embedded Youtube video in tooltip*          |            |             |      +      |        +         |
| Max description length in Readme.md (chars) |            |             |     100     |       150        |

> Note:
> The extra links block and video can only be set via `sponsors.json`

### Backer tier

You can create a custom tier, in which case you will get the benefits of the highest existing tier whose price
is covered by your donation. The extra donation amount above the existing tier will be taken into account
when sorting sponsors in a carousel.

### Sponsor logo

Your logo will be downloaded to our server, optimized, trimmed empty borders and resized with preservation of proportions.
If the width of the logo is significantly greater than its height, then the text caption will be hidden,
and the logo will take up all the available space. The maximum logo height is the same for all tiers.

### Description

If the description is not provided, we will try to parse it from the sponsor's site meta tags.

### GitHub

If you have set up your GitHub profile in your Open Collective profile,
you can create a special repository called `axios-sponsor` with `sponsor.json` in its root to manage your sponsor profile data.

The data from this file will be merged with your Open Collective profile which allows you to provide some extra info for advertising.

`sponsor.json` has the following structure (each field is optional):

```json
    {
      "displayName": "Umbrella Corporation",
      "targetLink": "https://umbrellacorp.com/",
      "alt": "Umbrella Corporation",
      "image": "https://fake.com/logo.png",
      "image_dark": "https://fake.com/logo_dark.png",
      "description": "The Umbrella Corporation is a pharmaceutical company",  
      "website": "https://google.com/",
      "github": "https://github.com/fakeGitHib",
      "icon": "https://fake.com/icon.png",
      "video": "https://www.youtube.com/embed/isosE4Bowh0",
      "twitter": "https://x.com/profile",
      "showCaption": true,
      "crown": false,
      "hide": false,
      "links": {
        "link1": "https://google.com/",
        "link2": "https://google.com/"
      }
    }
```
Every 24 hour our backend will pull this data when update sponsors list on the website.
