---
title: 'API de Axios'
description: 'Referencia del API de Axios'
prev_title: 'Petición Post'
prev_link: '/es/docs/post_example'
next_title: 'La instancia Axios'
next_link: '/es/docs/instance'
---

Las peticiones pueden ser hechas pasando la configuración relevante a `axios`.

##### axios(config)

```js
// Enviar una petición POST
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// Petición GET para una imagen remota en node.js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// Enviar petición GET (método por defecto)
axios('/user/12345');
```

### Alias de métodos de petición

Por conveniencia los alias han sido proveídos para todos los métodos de petición soportados.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])

##### axios.patch(url[, data[, config]])

###### NOTA
Al usar los alias, las propiedades `url`, `method`, y `data` no necesitan ser especificadas en la configuración.
