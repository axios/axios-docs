---
title: '翻譯說明文件'
---

To make Axios accessible to as many people as possible, it is important that these docs can be read in all languages. We always appreciate anyone who wants 
to help translate the documentation. This guide provides instructions for adding a translation to this documentation.

## 架構

Every translation is composed of a configuration file, `{language-shortcut}.lang.js` (for example, `en.lang.js` or `de.lang.js`) and the translated documentation files in `posts/{language-shortcut}/*.md` (for example `posts/en` or `posts/de`). `{language-shortcut}` should be replaced with your language's [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter code.

## Configuring your language

 - 複製 `en.lang.js`。
 - 將其重新命名為 `{language-shortcut}.lang.js`。
 - Replace `display` with the name of your language, in your language. For example, if you're translating german, place “Deutsch” instead of “German”.
 - Replace prefix with `/{language-shortcut}/`.
 - Translate the values in the `p` and `t` fields.
 - Translate all the properties labeled `text` in the sidebar. **Note:** Since the latest version of this documentation, links in the sidebar no longer need to be updated.

### Registering the configuration

Once you've finished configuring your language and translating the phrases and links in the configuration file, you'll need to register it in the root configuration. To do this, open `inert.config.js` and add the following line near the top:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

Of course, remember to replace `{language-shortuct}` with the correct [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) code (in the variable name, too!).

Now, look for the `langs` constant. If this constant is located above your `require` statement, move your `require` statement above it. To the `langs` list, add the following object:

```js
const langs = [
  ...
  {
    name: '能夠辨識出您的語言的唯一名稱，例如 ｢English｣ 或 ｢繁體中文 (台灣)｣',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // 您方才匯入的設定物件
  }
  ...
];
```

Now, you can begin translating the files. Copy the folder `posts/en` into a new folder `posts/{language-shortcut}` and translate all the files (當然，別把檔名一起翻譯了)。

如果您遇到任何問題，歡迎[開立 Issue](https://github.com/axios/axios-docs/issues/new/choose)。