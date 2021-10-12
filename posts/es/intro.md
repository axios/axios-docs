---
title: 'Empezando'
description: 'Cliente HTTP simple basado en promesas para el navegador y node.js'
next_title: 'Ejemplo Mínimo'
next_link: '/es/docs/example'
---

# ¿Qué es Axios?
Axios es un Cliente HTTP *[basado en promesas](https://javascript.info/promise-basics)* para [`node.js`](https://nodejs.org) y el navegador. Es *[isomorfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* (= puede ejecutarse en el navegador y nodejs con el mismo código base). En el lado del servidor usa el modulo nativo `http` de node.js, mientras que en el lado del cliente (navegador) usa XMLHttpRequests.

# Caracteristicas

- Hace [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) desde el navegador
- Hace peticiones [http](http://nodejs.org/api/http.html) desde node.js
- Soporta el API de [Promesa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Intercepta petición y respuesta
- Transforma petición y datos de respuesta
- Cancela peticiones
- Transformacion automatica de datos JSON
- Soporte para proteger al cliente contra [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# Instalación

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

Usando CDN jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

Usando CDN unpkg:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```