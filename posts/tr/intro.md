---
title: 'Başlangıç'
description: 'Tarayıcı ve node.js için Promise tabanlı HTTP istemcisi'
next_title: 'Basit Örnek'
next_link: '/tr/docs/example'
---

# Axios nedir?
Axios, [`node.js`](https://nodejs.org) ve tarayıcı için *[promise tabanlı](https://javascript.info/promise-basics)* HTTP İstemcisidir. *[izomorfik](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= tarayıcıda ve node.js'de aynı kod tabanıyla çalışabilir). Sunucu tarafında yerel (native) node.js `http` modülünü, istemcide (tarayıcı) ise XMLHttpRequest'i kullanır.

# Özellikler

- Tarayıcı üzerinden [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) istekleri gönderme.
- Node.js üzerinden [http](http://nodejs.org/api/http.html) istekleri gönderme.
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API'sini destekler
- İsteklere ve yanıtlara yol kesiciler ekleme
- İstek ve yanıt verilerini dönüştürme
- İstekleri iptal etme
- JSON verileri için otomatik dönüşüm
- [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)'ye karşı istemci taraflı koruma desteği

# Kurulum

npm ile:

```bash
$ npm install axios
```

bower ile:

```bash
$ bower install axios
```

yarn ile:

```bash
$ yarn add axios
```

pnpm ile:

```bash
$ pnpm add axios
```

jsDelivr CDN'i ile:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

unpkg CDN'i ile:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
