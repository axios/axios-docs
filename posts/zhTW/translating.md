---
title: '協助翻譯文件'
---

為了讓 Axios 盡可能的讓更多人使用，讓此文件能夠以所有語言是很重要的。我們感謝所有想要協助翻譯文件的人，
在此將提供翻譯文件的指南。

## 架構
所有翻譯皆由設置檔所編譯而成，`{language-shortcut}.lang.js`(如 `en.lang.js` 或 `de.lang.js`)，而翻譯文件檔案位於 `posts/{language-shortcut}/*.md` (如 `posts/en` 或 `posts/de`)，`{language-shortcut}` 應該使用你的語言的 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) 兩位字母替換。

## 編寫設置檔
 - 建立 `en.lang.js` 的副本。
 - 重新命名 `{language-shortcut}.lang.js`。
 - 替換 `display` 成你的語言名稱，並用該語言撰寫。例如：若你正翻譯成德語，應該填寫 Deutsch 而非 German
 - 替換前墜字串 `{/language-shortcut}`
 - 翻譯在 `p` 與 `t` 欄位中
 - 翻譯側邊欄所有具有 `text` 標籤的屬性。**注意** 從現版本開始，側邊欄的連結不需要再做更新。

### 註冊設置檔
當你完成新增你的語言的設置檔案，並且也完成文字及連結的翻譯，你需要在根設置中註冊它，打開 `inert.config.js` ，並在文件頂端添加如下：

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

切記要使用正確的 [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) 的代號替換 `{language-shortcut}`，相關變數都是！
接著，找到 `langs` 常熟，如果該常數的宣告先於 `require` 陳述式，請將該陳述式移動至常數宣告之前。接著在 `langs` 陣列中加入以下的結構的物件：

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // The configuration object you imported earlier
  }
  ...
];
```

現在，你可以開始翻譯了。複製 `posts/en` 資料夾內的文件至新資料夾中 `posrt/{language-short}` ，接著就可以開始翻譯文件了（可別翻譯翻譯檔案名稱）。
如果你遇到任何問題，請至[提出問題](https://github.com/axios/axios-docs/issues/new/choose)．