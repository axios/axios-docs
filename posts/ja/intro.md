---
title: 'Axios 入門'
description: 'ブラウザと Node.js のための Promise ベースの HTTP クライアント'
next_title: '最小構成の使用例'
next_link: '/ja/docs/example'
---

# Axios とは?

Axios は、[`Node.js`](https://nodejs.org/)とブラウザのための *[Promise ベース](https://javascript.info/promise-basics)* の HTTP クライアントです。 これは *[Isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*（= 同じコードベースでブラウザと Node.js の両方で実行できる）と呼ばれます。 サーバー側ではネイティブ の Node.js `http` モジュールを使用し、クライアント (ブラウザ) では XMLHttpRequest を使用します。


# 特徴

- ブラウザからの [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 実行
- node.js からの [http](http://nodejs.org/api/http.html) リクエスト実行
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API のサポート
- リクエストとレスポンスのインターセプト
- リクエストとレスポンスのデータの変換
- リクエストのキャンセル
- タイムアウト
- ネストされた項目をサポートしたクエリパラメータのシリアライズ
- リクエストボディの自動シリアライズ:
    - JSON (`application/json`)
    - Multipart / FormData (`multipart/form-data`)
    - URL encoded form (`application/x-www-form-urlencoded`)
- HTML フォームを JSON として送信
- レスポンスの自動 JSON データ処理
- ブラウザおよび node.js での進行状況と追加情報の取得（速度、残り時間）
- node.js における帯域幅制限の設定
- 仕様に準拠した FormData および Blob に対応（`node.js` を含む）
- [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) から保護するためのクライアント側のサポート

# インストール方法

npm を利用する場合:

```bash
$ npm install axios
```

bower を利用する場合:

```bash
$ bower install axios
```

yarn を利用する場合:

```bash
$ yarn add axios
```

pnpm を利用する場合:

```bash
$ pnpm add axios
```

jsDelivr CDN を利用する場合:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

unpkg CDN を利用する場合:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

モジュールバンドラが自動で解決できなかった場合に備えて、require で直接インポート可能なビルド済み CommonJS モジュール

```js
const axios = require('axios/dist/browser/axios.cjs'); // ブラウザ
const axios = require('axios/dist/node/axios.cjs'); // node
```