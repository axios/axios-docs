---
title: 'Axios API'
description: 'A referência de API do Axios' #The Axios API Reference
prev_title: 'Requisições POST'
prev_link: '/docs/ptBR/post_example'
next_title: 'Instância Axios'
next_link: '/docs/ptBR/instance'
---
Requisições podem ser feitas passando a configuração relevante para `axios`.
<!--Requests can be made by passing the relevant config to `axios`.-->

##### axios(config)

```js
// Envia uma requisição post
// Send a POST request
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
// Requisição GET para imagem em node.js
// GET request for remote image in node.js
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
// Envia uma requisição GET (método padrão)
// Send a GET request (default method)
axios('/user/12345');
```

### Apelidos para requisições

Por conveniência, foram fornecidos apelidos para todos os métodos de solicitação suportados.
<!--For convenience aliases have been provided for all supported request methods.-->

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### Nota
Quando usarem os apelidos as propriedades dos métodos `url`, `method`, e `data` não precisam ser especificadas
<!--When using the alias methods `url`, `method`, and `data` properties don't need to be specified in config.-->
