---
title: '入門'
description: '基於 Promise 的 HTTP 客戶端，為瀏覽器和 Node.js 打造'
next_title: '極簡範例'
next_link: '/docs/example'
---

# Axios 是什麼？
Axios 是 *[基於 Promise](https://javascript.info/promise-basics)* 的 HTTP 客戶端，為 [`Node.js`](https://nodejs.org) 和瀏覽器打造。具*[同構](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= 使用相同的程式碼基底在瀏覽器和 Node.js 上運行) 特性。 在伺服器端 Axios 將使用 Node.js 原生的 `http` 模組，在客戶端 (瀏覽器) 則使用 XMLHttpRequests。

# 功能

- 從瀏覽器發起 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 從 Node.js 發起 [http](http://nodejs.org/api/http.html) 請求
- 支援 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 攔截請求和回應
- 轉換請求和回應資料
- 取消請求
- 自動為 JSON 資料轉換
- 客戶端支援 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) 防護

# 安裝

使用 npm：

```bash
$ npm install axios
```

使用 bower：

```bash
$ bower install axios
```

使用 yarn：

```bash
$ yarn add axios
```

使用 jsDelivr CDN：

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

使用 unpkg CDN：

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```