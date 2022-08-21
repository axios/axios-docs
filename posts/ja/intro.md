---
title: 'はじめに'
description: 'ブラウザと node.js のための Promise ベースの HTTP クライアント'
next_title: '最小の例'
next_link: '/ja/docs/example'
---

# Axios とは？
Axios は [`node.js`](https://nodejs.org/ja/) とブラウザのための *[Promise ベース](https://ja.javascript.info/promise-basics)* のHTTPクライアントです。そして *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (＝同じコードをブラウザと node.js で実行できる) です。サーバーサイドでは node.js のネイティブな `http` モジュールを使い、クライアント (ブラウザ) 側では XMLHttpRequests を使用します。

# 特徴

- ブラウザから [XMLHttpRequests](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest) を作成する
- node.js からは [http](http://nodejs.org/api/http.html) リクエストを作成する
- [Promise](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) API をサポートしている
- リクエストとレスポンスをインターセプトする
- リクエストとレスポンスのデータを変換する
- リクエストをキャンセルする
- JSONデータの自動変換を行う
- クライアント側での [XSRF](https://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%88%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B8%E3%82%A7%E3%83%AA) 対策をサポートしている

# インストール

npm を使う場合:

```bash
$ npm install axios
```

bower を使う場合:

```bash
$ bower install axios
```

yarn を使う場合:

```bash
$ yarn add axios
```

jsDelivr CDN を使う場合:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

unpkg CDN を使う場合:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```