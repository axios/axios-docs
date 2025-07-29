---
title: 'Introduction'
description: 'Client HTTP basé sur les promesses pour navigateur et node.js'
next_title: 'Exemple minimal'
next_link: '/fr/docs/example'
---

# Qu’est-ce qu’Axios ?
Axios est un client HTTP *[basé sur les promesses](https://fr.javascript.info/promise-basics)* compatible avec [`node.js`](https://nodejs.org) et les navigateurs. Il est *[isomorphique](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (c’est à dire qu’il peut opérer dans le navigateur et dans node.js avec le même code). Côté serveur, il utilise le module natif `http` de node.js, et côté client (navigateur) il utilise les XMLHttpRequests.

# Fonctionnalités

- Faire des [XMLHttpRequests](https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest) depuis le navigateur
- Faire des requêtes [http](http://nodejs.org/api/http.html) depuis node.js
- Supporter l’API [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (promesses)
- Intercepter des requêtes et/ou des réponses
- Transformer les données de requêtes et/ou de réponses
- Annuler des requêtes
- Transformer automatiquement les données JSON
- Protéger contre les [XSRF](https://fr.wikipedia.org/wiki/Cross-site_request_forgery) côté client

# Installation

Avec npm :

```bash
$ npm install axios
```

Avec bower :

```bash
$ bower install axios
```

Avec yarn :

```bash
$ yarn add axios
```

Avec pnpm:

```bash
$ pnpm add axios
```


Avec le CDN jsDelivr :

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Avec le CDN unpkg :

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```