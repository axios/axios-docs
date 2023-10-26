---
title: 'Interceptores'
prev_title: 'Configuraciones por Defecto'
prev_link: '/es/docs/config_defaults'
next_title: 'Manejando Errores'
next_link: '/es/docs/handling_errors'
---

Puedes interceptar peticiones o respuestas antes que sean manipulados por `then` o `catch`. 

```js
// Agregar un interceptor a la petición
axios.interceptors.request.use(function (config) {
    // Haz algo antes que la petición se ha enviada
    return config;
  }, function (error) {
    // Haz algo con el error de la petición
    return Promise.reject(error);
  });

// Agregar una respuesta al interceptor
axios.interceptors.response.use(function (response) {
    // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función 
    // Haz algo con los datos de la respuesta
    return response;
  }, function (error) {
    // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
    // Haz algo con el error
    return Promise.reject(error);
  });
```

Si necesitas quitar un interceptor después, puedes hacerlo.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Puedes agregar interceptores a una instancia personalizada de axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```