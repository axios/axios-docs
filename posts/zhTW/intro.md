---
title: '快速開始'
description: 'Axios 是一個基於 Promise 的 HTTP 客戶端函式庫，可用於瀏覽器及 node.js'
next_title: '使用範例'
next_link: '/zhTW/docs/example'
---

# Axios 是什麼？
Axios 是基於 *[Promise](https://javascript.info/promise-basics)* 的 HTTP 客戶端函式庫，可應用於 [`node.js`](https://nodejs.org) 及瀏覽器。它是 *[同構](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* 的 (同一份程式碼可以在瀏覽器和 node.js 中運行)在伺服器端將會使用 node.js 的原生 `http` 模組，而瀏覽器端則會使用 XMLHttpRequests。

# 特色

- 從瀏覽器建立 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 從 node.js 建立 [http](http://nodejs.org/api/http.html) 請求
- 支援 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 支援請求和回應的攔截
- 自動轉換請求和回應資料
- 支援取消請求
- 設置請求逾時
- 支援巢狀數據的查詢參數序列化
- 自動序列化請求為：
    - JSON (`application/json`)
    - Multipart / FormData (`multipart/form-data`)
    - URL encoded form (`application/x-www-form-urlencoded`)
- 將 HTML 表單以 JSON 格式提交
- 自動解析回應中的 JSON 格式資料
- 上傳/下載進度追蹤及額外資訊（傳送速率、剩餘時間）
- 設定頻寬限制（僅 node.js ）
- 完全相容符合規範的 FormData and Blob 物件
- 支援 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) 防護（僅瀏覽器端）

# 安裝

透過 npm:

```bash
$ npm install axios
```

透過 bower:

```bash
$ bower install axios
```

透過 yarn:

```bash
$ yarn add axios
```

透過 jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

透過 unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

可以透過 `require` 直接引入的預編譯 CommonJS 模組（若你的模組打包工具無法自動解析）

```js
const axios = require('axios/dist/browser/axios.cjs'); // 瀏覽器
const axios = require('axios/dist/node/axios.cjs'); // node
```
