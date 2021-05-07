---
title: 'Introdução'
description: 'Cliente HTTP baseado em promessa para o navegador e Node.js'
next_title: 'Exemplos minimalistas'
next_link: '/docs/ptBR/example'
---

# O que é o Axios?
Axios é um cliente HTTP *[promise-based](https://javascript.info/promise-basics)* para o [`node.js`](https://nodejs.org) e para o navegador. É *[isomórfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*  (= pode rodar no navegador e no nodejs com a mesma base de código). No lado do servidor usa o código nativo do node.js `http` modulo, enquanto no lado do cliente (navegador) usa XMLHttpRequests.
<!--Axios is a *[promise-based](https://javascript.info/promise-basics)* HTTP Client for [`node.js`](https://nodejs.org) and the browser. It is *[isomórfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js `http` module, while on the client (browser) it uses XMLHttpRequests.-->

# Features

- Faz [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) do navegador
<!--- Make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) from the browser-->
- Faz requisições [http](http://nodejs.org/api/http.html) do node.js
<!--- Make [http](http://nodejs.org/api/http.html) requests from node.js-->
- Suporta a API de [Promessa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
<!--- Supports the [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API-->
- Intercepta requisições e respostas
<!--- Intercept request and response-->
- Transforma requisições e dados de respostas
<!--- Transform request and response data-->
- Cancela requisições
<!--- Cancel requests-->
- Automaticamente transforma dados para JSON
<!--- Automatic transforms for JSON data-->
- Suporta proteções contra [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) no lado do cliente
<!--- Client side support for protecting against [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)-->

# Instalando

<!--Using npm:-->
Usando o npm:

```bash
$ npm install axios
```

<!--Using bower:-->
Usando o bower:

```bash
$ bower install axios
```

<!--Using yarn:-->
Usando o yarn:

```bash
$ yarn add axios
```

<!--Using jsDelivr CDN:-->
Usando a CDN jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

<!--Using unpkg CDN:-->
Usando a CDN unpkg:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```