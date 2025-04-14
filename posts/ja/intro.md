---
title: 'はじめに'
description: 'ブラウザと Node.js のための Promise ベースの HTTP クライアント'
next_title: '最小限の例'
next_link: '/ja/docs/example'
---

# Axios とは？
Axios は、 [`node.js`](https://nodejs.org) とブラウザのための *[Promise ベース](https://javascript.info/promise-basics)* のHTTPクライアントです。これは *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* （= 同じコードベースでブラウザと Node.js の両方で実行できる）と呼ばれます。サーバーサイドでは Node.js のネイティブな `http` モジュールを使い、クライアント（ブラウザ）側では XMLHttpRequests を使用します。

# 特徴

- ブラウザから [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) を作成する
- Node.js から [http](http://nodejs.org/api/http.html) リクエストを作成する
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API をサポート
- リクエストとレスポンスのインターセプト
- リクエストとレスポンスデータの変換
- リクエストのキャンセル
- タイムアウト
- クエリパラメータシリアライゼーションとネストされたエントリのサポート
- リクエストボディの自動シリアライズ:
    - JSON (`application/json`)
    - Multipart / FormData (`multipart/form-data`)
    - URL encoded form (`application/x-www-form-urlencoded`)
- HTML フォームを JSON として投稿
- レスポンスの JSON データを自動処理
- 追加情報 (速度率、残り時間) を含むブラウザと Node.js の進行状況のキャプチャ
- Node.jsの帯域制限の設定
- 仕様に準拠した FormData および Blob (`Node.js` を含む) との互換性
- クライアント側での [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) 対策サポート

# インストール

Using npm:

```bash
$ npm install axios
```

Using bower:

```bash
$ bower install axios
```

Using yarn:

```bash
$ yarn add axios
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

require を使用して直接インポートするための事前構築された CommonJS モジュール (モジュール バンドラーがそれらを自動的に解決できなかった場合)

```js
const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs'); // node
```
