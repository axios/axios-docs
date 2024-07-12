---
title: 'Esquema de Respuesta'
prev_title: 'Configuración de Petición'
prev_link: '/es/docs/req_config'
next_title: 'Configuraciones por Defecto'
next_link: '/es/docs/config_defaults'
---

La respuesta para una petición contiene la siguiente información.

```js
{
  // `data` es la respuesta provista por el servidor
  data: {},

  // `status` es el código HTTP de la respuesta del servidor
  // A partir de HTTP/2, el texto de estado está en blanco o no es compatible.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  status: 200,

  // `statusText` es el mensaje del estado HTTP de la respuesta del servidor
  statusText: 'OK',

  // `headers` las cabeceras HTTP con las que el servidor respondió
  // Todos los nombres de cabeceras son convertidos a minúsculas y pueden ser accedidos usando la notación de corchetes.
  // Ejemplo: `response.headers['content-type']`
  headers: {},

  // `config`  es la configuración provista a `axios` por la petición
  config: {},

  // `request` es la petición que genera esta respuesta,
  // es la última instancia ClientRequest en node.js (en redirecciones)
  // y una instancia XMLHttpRequest en el navegador.
  request: {}
}
```

Al usar `then`, recibirás la respuesta de la siguiente manera:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

Al usar `catch`, o pasando un [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) como segundo parámetro de `then`, la respuesta estará disponible a través del objeto `error` como se explicó en la sección [Manipulando errores](/es/docs/handling_errors).