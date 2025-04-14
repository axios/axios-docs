---
title: 'Ejemplo Mínimo'
description: 'Un ejemplo pequeño de como usar Axios'
prev_title: 'Introducción'
prev_link: 'intro'
next_title: 'Petición POST'
next_link: 'post_example'
---

## nota: Uso de CommonJS
Para aprovechar la tipificación de TypeScript (para intellisense / autocompletado) usa el próximo enfoque al utilizar los imports de CommonJS con `require()`:

```js
const axios = require('axios').default;

// axios.<method> proveerá autocompletado y tipificación  de parámetros
```

# Ejemplo

Ejecutado una petición `GET`

```js
const axios = require('axios');

// Hacer una petición para un usuario con ID especifico
axios.get('/user?ID=12345')
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

// Opcionalmente, la solicitud anterior también se puede realizar como
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // siempre sera ejecutado
  });  

// ¿Quieres usar async/await? Añade la palabra reservada `async` a tu función/método externo.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **NOTA:** `async/await` es parte de ECMAScript 2017 y no es soportado por Internet
> Explorer y otros navegadores antiguos, a si que usalo con cuidado.