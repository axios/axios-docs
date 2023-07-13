---
title: "Cancelación"
prev_title: "Manejando Errores"
prev_link: "/es/docs/handling_errors"
next_title: "Cuerpos de solicitud codificados como URL"
next_link: "/es/docs/urlencoded"
---

## AbortController

Empezando desde `v0.22.0` Axios soporta el [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) para cancelar peticiones de la misma forma que la API de fetch:

```js
const controller = new AbortController();

axios
  .get("/foo/bar", {
    signal: controller.signal,
  })
  .then(function (response) {
    //...
  });
// cancelar la peticion
controller.abort();
```

## CancelToken `obsoleto`

También puedes cancelar una petición usando un _CancelToken_.

> La API token de cancelación está basado en la propuesta [propuesta para cancelar promesas](https://github.com/tc39/proposal-cancelable-promises).

> Esta API es obsoleto desde `v0.22.0` y no debería ser usada en proyectos nuevos

Puedes crear un token de cancelación usando el factory `CancelToken.source` a como se muestra a continuación:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Peticion Cancelada", thrown.message);
    } else {
      // Manejar error
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// cancelar la petición (el parámetro mensaje es opcional)
source.cancel("Operation canceled by the user.");
```

También puedes crear un token de cancelación pasando una función ejecutora al constructor del `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get("/user/12345", {
  cancelToken: new CancelToken(function executor(c) {
    // Una función ejecutora recibe una función de cancelación como parámetro
    cancel = c;
  }),
});

// cancelar la petición
cancel();
```

> Nota: puedes cancelar muchas peticiones con el mismo token / signal.

Durante el periodo de transición, puedes usar ambas APIs de cancelación, aun para la misma petición:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
    signal: controller.signal,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // manejar error
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// cancelar la petición (el parámetro mensaje es opcional)
source.cancel("Operation canceled by the user.");
// O
controller.abort(); // el parámetro mensaje no es soportado
```
