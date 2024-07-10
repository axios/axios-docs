---
title: 'Cancelación'
prev_title: 'Manejando Errores'
prev_link: '/es/docs/handling_errors'
next_title: 'Contenido tipo URL-Encoding'
next_link: '/es/docs/urlencoded'
---

## Cancelando solicitudes

Al configurar la propiedad `timeout` de una llamada axios, se manipularán los timeouts de su **respuesta**. 

En algunos casos (e.g. las conexiones a la red dejan de estar disponibles) una llamada axios se beneficiaría de la cancelación temprana de dicha **conexión**. Sin la cancelación, la llamada axios se puede colgar hasta que el código o pila padre se terminen (pueden ser unos cuantos minutos en aplicaciones servidor).

Para terminar una llamada axios puedes usar los siguientes métodos:
- `signal`
- `cancelToken` (obsoleto)

La combinación de `timeout` y un método de cancelación (e.g. `signal`) deberían cubrir los timeouts relacionados a la **respuesta** Y a la **conexión**.

### `signal`: AbortController

Comenzando desde `v0.22.0` Axios soporta el [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) para cancelar solicitudes de la forma de la API fetch:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancelar la solicitud
controller.abort()
```

Ejemplo con timeout usando la última [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // Aborta la solicitud después de 5 segundos
}).then(function(response) {
   //...
});
```

Ejemplo con una función auxiliar de timeout:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) //Aborta la solicitud después de 5 segundos
}).then(function(response) {
   //...
});
```

### CancelToken `obsoleto`

También puedes cancelar una solicitud usando un *CancelToken*. 

> La API de token de cancelación de axios está basada en el documento [propuesta de promesas cancelables](https://github.com/tc39/proposal-cancelable-promises) retirado.

> Esta API está obsoleta desde `v0.22.0` y no debe ser usada en proyectos nuevos.

Puedes crear un token de cancelación usando el factory `CancelToken.source` a como se muestra a continuación:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manejar error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancelar la solicitud (el parámetro mensaje es opcional)
source.cancel('Operation canceled by the user.');
```

También puedes crear un token de cancelación pasando una función ejecutora al constructor de `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Una función ejecutora recibe una función cancelar como parámetro
    cancel = c;
  })
});

// cancelar la solicitud
cancel();
```

> Nota: puedes cancelar varias solicitudes con el mismo token / signal de cancelación.

Durante el periodo de transición, puedes usar ambas APIs de cancelación, incluso para la misma solicitud:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manejar error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancelar la petición (el parámetro mensaje es opcional)
source.cancel('Operation canceled by the user.');
// OR
controller.abort(); // el parámetro mensaje no esta soportado
```
