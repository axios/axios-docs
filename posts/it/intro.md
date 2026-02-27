---
title: "Come Iniziare"
description: "Un client HTTP per il browser e node.js, basato sulle Promise."
next_title: "Esempio di Utilizzo"
next_link: "/docs/example"
---

# Che cos'è Axios?

Axios è un client HTTP per [`Node.js`](https://nodejs.org) e browser, basato sulle _[Promise](https://javascript.info/promise-basics)_. È _[isomorfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)_ (ovvero può essere eseguito sia sul browser che su node.js con lo stesso codice). Lato server, usa il modulo `http` nativo di node.js, mentre lato client (browser) usa XMLHttpRequest.

# Caratteristiche

- Permette di fare richieste [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) dal browser
- Permette di fare richieste [http](http://nodejs.org/api/http.html) da node.js
- Supporta l'API [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Permette di intercettare richieste e risposte
- Trasformazione dei dati delle richieste e delle risposte
- Annullamento delle richieste
- Gestione dei timeout
- Serializzazione dei parametri query con supporto a voci annidate
- Serializzazione automatica del corpo delle richieste in:
  - JSON (`application/json`)
  - Multipart / FormData (`multipart/form-data`)
  - Form URL encoded (`application/x-www-form-urlencoded`)
- Inviare form HTML come JSON
- Gestione automatica dei dati JSON nelle risposte
- Cattura dello stato di progressione della richiesta per i browser e node.js con informazioni extra (velocità, tempo rimanente)
- Impostare limiti di larghezza di banda per node.js
- Compatibile con FormData e Blob conformi alle specifiche (incluso `node.js`)
- Supporto lato client per la protezione contro [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Installazione

Usando npm:

```bash
$ npm install axios
```

Usando bower:

```bash
$ bower install axios
```

Usando yarn:

```bash
$ yarn add axios
```

Usando pnpm:

```bash
$ pnpm add axios
```

Usando jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Usando unpkg CDN:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

Moduli CommonJS precompilati per l'importo diretto con l'uso di require (se il tuo bundler dei moduli fallisce nella risoluzione automatica)

```js
const axios = require("axios/dist/browser/axios.cjs"); // browser
const axios = require("axios/dist/node/axios.cjs"); // node
```
