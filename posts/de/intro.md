---
title: 'Einleitung'
description: 'Der Promise-basierte HTTP-Client für den Browser und Node.js'
next_title: 'Minimalbeispiel'
next_link: '/de/docs/example'
---

# Was ist Axios?
Axios ist ein *[Promise-basierter](https://javascript.info/promise-basics)* HTTP-Client für [`node.js`](https://nodejs.org) und den Browser. Er ist *[isomorphisch](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= kann auf dem Server und im Browser verwendet werden). Auf der Server-Seite wird das Modul `http` verwendet, während im Browser XMLHttpRequests (ajax) ausgeführt werden.

# Features

- [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) im Browser ausführen
- [`http`](http://nodejs.org/api/http.html)-anfragen auf dem Server tätigen
- Unterstützt die [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)-API
- Anfragen und Antworten abfangen
- Anfragen- und Antwortdaten transformieren
- Anfragen abbrechen
- Automatische Verarbeitung von JSON-Daten
- Schützt im Browser vor [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Installieren

Via npm:

```bash
$ npm install axios
```

Via bower:

```bash
$ bower install axios
```

Via yarn:

```bash
$ yarn add axios
```

Via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Via unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
