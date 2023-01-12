---
title: '翻譯本文件'
---

為了能讓 Axios 被更多人使用，翻譯是重要的一環，這使得各種語言的人們都能閱讀本文件，我們十分感謝所有想翻譯本文件的人。
這份指引提供了翻譯本文件的步驟。

## 檔案結構

每個語言的翻譯都由一個檔名為 `{language-shortuct}.lang.js` 的組態檔（如 `en.lang.js` 或 `de.lang.js`），以及 `posts/{language-shortuct}/*.md` 的譯文（如 `posts/en` 或 `posts/de`）構成。其中 `{language-shortuct}` 應代換為您的語言代碼，關於語言代碼的清單請參閱 [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)。

## 設定語言

 - 複製 `en.lang.js`.
 - 將其重新命名為 `{language-shortuct}.lang.js`.
 - 將 `display` 的值代換為您的語言本名，例如您翻譯的是德文，就使用「Deutsch」而非「德文」
 - 將譯文的資料夾名稱替換為 `{language-shortuct}`
 - 翻譯 `p` 及 `t` 屬性中的字串
 - 翻譯所有在 sidebar 中標示為 `text` 的屬性。**注意：** 自本文件的最新版開始，無需更新 sidebar 中的連結

### 更新設定值

在您完成調整組態檔，並翻譯了其中的句子、連結之後，還需要更新主設定檔。請開啟 `inert.config.js` 並在最上方加上：

```js
const {language-shortuct}Config = require('./{language-shortuct}.config.js');
```

請記得要將 `{language-shortuct}` 及變數名稱代換為正確的 [ISO 369-1](https://zh.wikipedia.org/zh-tw/ISO_639-1) 代碼。

接著請看 `langs` 常數，如果它高於剛才的 `require` 那行，請將 `require` 那行移到它上方。完成之後，在 `langs` 中加入這些內容：

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

現在您可以開始翻譯文件了，請複製一份 `posts/en` 的副本，並將其命名為 `posts/{language-shortcut}`，然後翻譯此資料夾中的所有檔案，記得別連檔名都翻譯了。

如果您在這些過程中遇到什麼問題，都歡迎您[建立一則 Issue](https://github.com/axios/axios-docs/issues/new/choose) 與我們討論。