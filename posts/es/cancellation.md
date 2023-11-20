---
title: "Cancelación"
prev_title: "Manejando Errores"
prev_link: "/es/docs/handling_errors"
next_title: "Cuerpos de solicitud codificados como URL"
next_link: "/es/docs/urlencoded"
---

## Cancelando peticiones

Configurar la propiedad `timeout` en una llamada axios gestiona los tiempos de espera relacionados con la **respuesta**.

In some cases (e.g. network connection becomes unavailable) an axios call would benefit from cancelling the **connection** early. Without cancellation, the axios call can hang until the parent code/stack times out (might be a few minutes in a server-side applications).

En algunos casos (por ejemplo, si la conexión de red se interrumpe), sería beneficioso cancelar la **connection** de la llamada axios de manera temprana. Sin esta cancelación, la llamada axios puede quedar suspendida hasta que el código base (o la pila principal) alcance el tiempo de espera (puede ser de unos minutos en aplicaciones del lado del servidor).

Para terminar una llamada axios, puedes usar uno de los siguientes métodos:

- `signal`
- `cancelToken` (obsoleto)

Combinar `timeout` y algún método de cancelación (por ejemplo, `signal`), debería cubrir los tiempos de espera tanto de la **response** como de la **connection**.

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

> Esta API está obsoleta desde `v0.22.0` y no debería ser usada en nuevos proyectos.

Puedes crear un token de cancelación usando el factory `CancelToken.source`, como se muestra a continuación:

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

Durante el período de transición, puedes usar ambas APIs de cancelación, aun para la misma petición:

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
