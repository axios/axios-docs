---
title: 'ドキュメントを翻訳する'
---

Axios をできるだけ多くの人が利用できるようにするには、ドキュメントをすべての言語で読むことができるようにすることが重要です。ドキュメントの翻訳にご協力いただける方はいつでも歓迎いたします。
このガイドでは、このドキュメントに翻訳を追加する手順を説明します。

## 構成

すべての翻訳は、設定ファイル `{language-shortcut}.lang.js` (例えば `en.lang.js` や `de.lang.js`) と、 `posts/{language-shortcut}/*.md` (例えば `posts/en` や `posts/de`) の翻訳された文書ファイルから構成されています。 `{language-shortcut}` は、あなたの言語の [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) の 2 文字コードに置き換えてください。

## 言語の設定

 - `en.lang.js` をコピーしてください。
 - それを `{language-shortcut}.lang.js` にリネームしてください。
 - `display` をあなたの言語での言語名に置き換えてください。例えばドイツ語の翻訳をする場合、 “German” の代わりに “Deutsch” と書きます。
 - prefix を `/{language-shortcut}/` に置換してください。
 - `p` および `t` フィールドの値を翻訳してください。
 - サイドバーの `text` というラベルの付いたプロパティをすべて翻訳してください。**注:** このドキュメントの最新版以降、サイドバーのリンクは更新する必要がなくなりました。

### 設定の登録

言語の設定と、設定ファイル内のフレーズやリンクの翻訳が終わったら、それをルートの設定に登録する必要があります。これを行うには `inert.config.js` を開き、先頭付近に以下の行を追加してください:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

もちろん、 `{language-shortuct}` を正しい [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) コードに置き換えることを忘れないでください (変数名の中にも！) 。

さて、 `langs` 定数を探します。もしこの定数が `require` 文の上にあるならば、 `require` 文をその上に移動してください。 `langs` のリストに、次のオブジェクトを追加してください:

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

さて、ファイルの翻訳を始めましょう。 `posts/en` フォルダを新しいフォルダ `posts/{language-shortcut}` にコピーして、すべてのファイルを翻訳してください (もちろんファイル名は翻訳しないでください) 。

もし何か問題にぶつかったら、遠慮なく [issue を作成](https://github.com/axios/axios-docs/issues/new/choose) してください。