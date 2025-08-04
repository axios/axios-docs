---
title: 'Axios 入門'
description: 'ブラウザと Node.js のための Promise ベースの HTTP クライアント'
next_title: '最小構成の使用例'
next_link: '/ja/docs/example'
---

# Axios とは?

Axios は、[`Node.js`](https://nodejs.org/)とブラウザのための *[Promise ベース](https://javascript.info/promise-basics)* の HTTP クライアントです。 これは *[Isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*（= 同じコードベースでブラウザと Node.js の両方で実行できる）と呼ばれます。 サーバー側ではネイティブ の Node.js `http` モジュールを使用し、クライアント (ブラウザ) では XMLHttpRequests を使用します。


# 特徴

- ブラウザから [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) を作成する
- Node.js から [http](http://nodejs.org/api/http.html) リクエストを作成する
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API をサポート
- インターセプトの要求と応答
- リクエストとレスポンスのデータを変換
- リクエストをキャンセル
- JSON データの自動変換
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