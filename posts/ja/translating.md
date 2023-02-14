---
title: 'ドキュメントの翻訳'
---

Axios をできるだけ多くの人が利用できるようにするには、これらのドキュメントをすべての言語で読めるようにすることが重要です。ドキュメントの翻訳にご協力いただける方はいつでも歓迎いたします。このガイドでは、このドキュメントに翻訳を追加する手順を説明します。

## 構造

すべての翻訳は、設定ファイル `{language-shortcut}.lang.js` (例えば `en.lang.js` や `de.lang.js`) と、 `posts/{language-shortcut}/*.md` (例えば `posts/en` や `posts/de`) の翻訳ドキュメントファイルから構成されています。`{language-shortcut}` は、あなたの言語の [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) の 2文字コードに置き換える必要があります。

## 言語を設定する

- `en.lang.js` をコピーします。
- 名前を `{language-shortcut}.lang.js` に変更します。
- `display` をあなたの言語の名前に置き換えてください。 たとえば、ドイツ語を翻訳する場合は、「German」を「Deutsch」に書き換えます。
- プレフィックスを `/{language-shortcut}/` に置き換えます。
- `p` と `t` フィールドの値を翻訳します。
- `sidebar` の `text` というラベルの付いたすべてのプロパティを翻訳します。 **注:** このドキュメントの最新バージョン以降、サイドバーのリンクを更新する必要はありません。

### コンフィギュレーションを登録する

言語の設定と、設定ファイル内のフレーズやリンクの翻訳が終わったら、それをルート設定に登録する必要があります。これを行うには、`inert.config.js` を開き、先頭付近に以下の行を追加します。

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

もちろん、`{language-shortuct}` を正しい [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) コードに置き換えることを忘れないでください (変数名にも書いてあります!)。

ここで、定数 `langs` を探します。この定数が `require` 文の上にある場合は、 `require` 文をその上に移動してください。`langs` のリストに、次のオブジェクトを追加してください。

```js
const langs = [
  ...
  {
    name: '"英語 "や "ドイツ語 "など、言語を一意に識別できる名前',
    prefix: "設定ファイルと同じプレフィックス",
    config: {language-shortcut}Config // 先ほどインポートした Config オブジェクト
  }
  ...
];
```

これで、ファイルの翻訳を開始できます。フォルダ `posts/en` を新しいフォルダ `posts/{language-shortcut}` にコピーし、すべてのファイルを翻訳します (もちろん、ファイル名は翻訳しないでください)。

問題が発生した場合は、[イシューを作成](https://github.com/axios/axios-docs/issues/new/choose) してください。
