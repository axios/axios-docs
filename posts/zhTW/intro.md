---
title: '新手上路'
description: '基於 Promise 的 HTTP 客戶端函式庫，可用於瀏覽器及 Node.js'
next_title: '簡單示例'
next_link: '/zhTW/docs/example'
---

# Axios 是什麼？

Axios 提供了[基於 Promise](https://javascript.info/promise-basics) 的 HTTP 客戶端，可以執行於 [`Node.js`](https://nodejs.org/zh-tw/) 及瀏覽器中，此特性使得同樣的程式碼無需經過修改，就能在前後端使用。在伺服器端 Axios 使用了 Node.js 的 `http` 模組，而在客戶端上（也就是瀏覽器）使用了 XMLHttpRequests。

# 功能

- 從瀏覽器發起 [XMLHttpRequests](https://developer.mozilla.org/zh-TW/docs/Web/API/XMLHttpRequest) 請求
- 從 Node.js 發起 [http](http://nodejs.org/api/http.html) 請求
- 支援 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 攔截請求及回應
- 轉換請求及回應資料
- 中止請求
- 自動轉換 JSON 資料
- 防禦客戶端的 [XSRF](https://zh.wikipedia.org/zh-tw/跨站請求偽造) 攻擊

# 安裝 Axios

npm:

```bash
$ npm install axios
```

bower:

```bash
$ bower install axios
```

yarn:

```bash
$ yarn add axios
```

使用 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

使用 unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```