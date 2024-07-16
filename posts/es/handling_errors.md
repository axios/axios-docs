---
title: 'Manejando Errores'
prev_title: 'Interceptores'
prev_link: 'interceptors'
next_title: 'Cancelación'
next_link: 'cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // La respuesta fue hecha y el servidor respondió con un código de estado
      // que esta fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La petición fue hecha pero no se recibió respuesta
      // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
      // http.ClientRequest en node.js
      console.log(error.request);
    } else {
      // Algo paso al preparar la petición que lanzo un Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Usando la opción de configuración `validateStatus`, puedes definir los codigo(s) HTTP que deberán lanzar un error.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Resuelve solo si el código de estado es menor que 500
  }
})
```

Usando `toJSON` obtienes un objeto con mas información sobre el error HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```