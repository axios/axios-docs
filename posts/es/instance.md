---
title: 'La instancia Axios'
prev_title: 'API de Axios'
prev_link: '/es/docs/api_intro'
next_title: 'Configuración de Petición'
next_link: '/es/docs/req_config'
---

### Creando una instancia

Puedes crear una instancia nueva de axios con una configuración personalizada.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Métodos de Instancia

Los métodos disponibles de la instancia están listados a continuación. La configuración especificada será combinada con la configuración de la instancia.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### Llamar a la instancia directamente con un objeto de configuración

Además de los métodos como `instance.get()` o `instance.post()`, también puedes llamar a una instancia de Axios directamente pasando un objeto de configuración. Esto funciona igual que `axios(config)` y es útil, por ejemplo, para reenviar una solicitud con la configuración original.

```js
const instance = axios.create({ baseURL: '/api' });

// Funciona igual que axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Este enfoque permite implementar una lógica de reintento limpia, por ejemplo, al manejar errores de autenticación:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Reenviar la solicitud original
  }

  throw error;
});
```