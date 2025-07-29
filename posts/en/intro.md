---
title: 'Getting Started'
description: 'Promise based HTTP client for the browser and node.js'
next_title: 'Minimal Example'
next_link: '/docs/example'
---

# What is Axios?
Axios is a *[promise-based](https://javascript.info/promise-basics)* HTTP Client for [`node.js`](https://nodejs.org) and the browser. It is *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= it can run in the browser and node.js with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.

# Features

- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser
- Make [http](http://nodejs.org/api/http.html) requests from node.js
- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Timeouts
- Query parameters serialization with support for nested entries
- Automatic request body serialization to:
    - JSON (`application/json`)
    - Multipart / FormData (`multipart/form-data`)
    - URL encoded form (`application/x-www-form-urlencoded`)
- Posting HTML forms as JSON    
- Automatic JSON data handling in response   
- Progress capturing for browsers and node.js with extra info (speed rate, remaining time)
- Setting bandwidth limits for node.js
- Compatible with spec-compliant FormData and Blob (including `node.js`)
- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Installing

Using npm:

```bash
$ npm install axios
```
<button onclick="copyToClipboard('npm install axios')">Copy</button>

Using bower:

```bash
$ bower install axios
```
<button onclick="copyToClipboard('bower install axios')">Copy</button>
Using yarn:

```bash
$ yarn add axios
```
<button onclick="copyToClipboard('yarn add axios')">Copy</button>
Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
<button onclick="copyToClipboard('<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>')">Copy</button>

Using unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
<button onclick="copyToClipboard('<script src="https://unpkg.com/axios/dist/axios.min.js"></script>')">Copy</button>
Prebuilt CommonJS modules for direct importing with require (if your module bundler failed to resolve them automatically)

```js
const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs'); // node
```
<button onclick="copyToClipboard('const axios = require('axios/dist/browser/axios.cjs');    
const axios = require(\'axios/dist/node/axios.cjs\'); // node')">Copy</button>

<script>
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
</script>