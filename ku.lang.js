/**
 * Configuration for the Central Kurdish language translation
 */

module.exports = {
  display: "کوردی",
  prefix: "/ku/",
  dir: "rtl",
  lang: "ckb-ku",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "ڕاژەخوازێکی HTTPـیە لەسەر بنچینەی Promise بۆ وێبگەڕ و نۆد",
    subhead: `ئەکسیۆس ڕاژەخوازێکی HTTPـیە لەسەر Promise بنچینەکراوە بۆ نۆد و وێبگەڕ. ئەکسیۆس ژێدەرگەیەکی ئاسان بۆ بەکارهێنان لە گورزەیەکی بچووک بە ناوبەستێکی شیاو بۆ پەرەسەندن دابین دەکات.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": "دەستپێبکە",
    "View on GitHub": "لە گیتهەب بیبینە",
    "Languages": "زمانەکان",
    "Open Source": "سەرجاوەکراوە",
    "Contribute": "بەشداریبکە",
    "Source on GitHub": "سەرچاوە لە گیتهەب",
    "Fork on GitHub": "فۆرک بکە لە گیتهەب",
    "Fork the Website": "ماڵپەڕەکە فۆرک بکە",
    "Create an Issue": "کێشەیەک دروست بکە",
    "Next": "دواتر",
    "Previous": "پێشتر",
    "Website Copy Right Footer": 'ئەم ماڵپەڕە: مافی لەبەرگگرتنەوەی پارێزراوە @ 2020-ئێستا John Jakob "Jake" Sarjeant. بەکارهێنراوە پاش مۆڵەت وەرگرتن',
    "View On Github": 'بڕوانە ئەم ماڵپەڕە لەسەر گیتهەب',
    "Axios Project Copy Right Footer": 'پڕۆژەی ئەکسیۆس: مافی لەبەرگگرتنەوەی پارێزراوە @ 2014-ئێستا Matt Zabriskie.',
    "License Label Footer":'بڵاوکراوەتەوە لە ژێر مۆڵەتی'
  },
  sidebar: [
    {
      type: "heading",
      text: "دەستپێبکە",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "پێشەکی",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "نموونە",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "داواکاری POST",
    },
    {
      type: "heading",
      text: "ناوبەستی ئەکسیۆس",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "ناوبەستی ئەکسیۆس",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "نموونەیەکی ئەکسیۆس",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "ڕێکخستنی داواکاری",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "شێوازی وەڵامەکان",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "بنەڕەتەکانی ڕێکخستن",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "ناوەندگیرەکان",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "چارەسەرکردنی هەڵەکان",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "هەڵوەشاندنەوە",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URL-Encoding Bodies",
    },
    {
      type: "heading",
      text: "هیتر",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "تێبینییەکان",
    },
    {
      type: "heading",
      text: "بەژداران",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "بنەماکانی ڕەفتارکردن",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "ڕینیشاندەری بەژداریکەر",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "بەژداریکردن لە ئەکسیۆس",
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "وەرگێڕانی ئەم بەڵگەنامانە",
    },
  ],
};
