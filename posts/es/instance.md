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