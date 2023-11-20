---
title: "Empezando"
description: "Cliente HTTP simple basado en promesas para el navegador y node.js"
next_title: "Ejemplo Mínimo"
next_link: "/es/docs/example"
---

# ¿Qué es Axios?

Axios es un Cliente HTTP _[basado en promesas](https://javascript.info/promise-basics)_ para [`node.js`](https://nodejs.org) y el navegador. Es _[isomorfico](https://www.lullabot.com/articles/what-is-an-isomorphic-application)_ (= puede ejecutarse en el navegador y nodejs con el mismo código base). En el lado del servidor usa el modulo nativo `http` de node.js, mientras que en el lado del cliente (navegador) usa XMLHttpRequests.

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

# Características

- Hace [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) desde el navegador
- Hace peticiones [http](http://nodejs.org/api/http.html) desde node.js
- Soporta el API de [Promesa](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Intercepta petición y respuesta
- Transforma petición y datos de respuesta
- Cancela peticiones
- Tiempos de espera
- Serialización de parámetros de consulta (query parameters) con soporte para entradas anidadas
- Serialización del cuerpo (body) de la petición a:
  - JSON (`application/json`)
  - Multipart / FormData (`multipart/form-data`)
  - Formulario codificado en URL (URL encoded form) (`application/x-www-form-urlencoded`)
- Envío de formularios HTML como JSON.
- Transformación automática de datos JSON
- Capturas de progreso para navegadores y node.js con información adicional (velocidad, tiempo restante)
- Establecimiento de límites de ancho de banda para node.js.
- Compatible con FormData y Blob conforme a las especificaciones (incluyendo node.js).
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
