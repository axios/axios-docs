---
title: 'Introdução'
description: 'Cliente HTTP baseado em promessas para o navegador e node.js'
next_title: 'Exemplos minimalistas'
next_link: '/ptBR/docs/example'
---

# O que é o Axios?
Axios é um cliente HTTP *[baseado em promessas](https://javascript.info/promise-basics)* para o [`node.js`](https://nodejs.org) e para o navegador. É *[isomórfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)*  (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o módulo `http`, enquanto no lado do cliente (navegador) usa XMLHttpRequests.

# Recursos

- Faz [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) do navegador
- Faz requisições [http](http://nodejs.org/api/http.html) do node.js
- Suporta a API de [Promessas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
- Intercepta requisições e respostas
- Transforma os dados de requisições e de respostas
- Cancela requisições
- Timeouts
- Serializa parâmetros de consulta com suporte para aninhamento
- Serializa automaticamente o corpo da requisição para:
    - JSON (`application/json`)
    - Multipart / FormData (`multipart/form-data`)
    - Formulário codificado para URL (`application/x-www-form-urlencoded`)
- Posta formulários HTML como JSON
- Lida automaticamente com dados JSON em respostas
- Captura progresso da requisição em navegadores e node.js com informações extra (velocidade, tempo restante)
- Define limites de largura de banda no node.js
- Compatível com FormData e Blob (inclusive no `node.js`)
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

Módulos CommonJs para importação direta via require (se a resolução automática falhar)

```js
const axios = require('axios/dist/browser/axios.cjs'); // navegador
const axios = require('axios/dist/node/axios.cjs'); // node
```
