---
title: 'Introdução'
description: 'Cliente HTTP baseado em promessas para o navegador e Node.js'
next_title: 'Exemplos minimalistas'
next_link: '/ptBR/docs/example'
---

# O que é o Axios?
Axios é um cliente HTTP *[baseado-em-promessas](https://javascript.info/promise-basics)* para o [`node.js`](https://nodejs.org) e para o navegador. É *[isomórfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*  (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo `http`, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

# Features

- Faz [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) do navegador
- Faz requisições [http](http://nodejs.org/api/http.html) do node.js
- Suporta a API de [Promessas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
- Intercepta requisições e respostas
- Transforma os dados de requisições e de respostas
- Cancela requisições
- Automaticamente transforma dados para JSON
- Suporta proteções contra [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) no lado do cliente

# Instalando

Usando o npm:

```bash
$ npm install axios
```

Usando o bower:

```bash
$ bower install axios
```

Usando o yarn:

```bash
$ yarn add axios
```

Usando a CDN do jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Usando a CDN do unpkg:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```