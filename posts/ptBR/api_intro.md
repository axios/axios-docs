---
title: "Axios API"
description: "A referência de API do Axios"
prev_title: "Requisições POST"
prev_link: "/ptBR/docs/post_example"
next_title: "Instância Axios"
next_link: "/ptBR/docs/instance"
---

Requisições podem ser feitas passando as configuraçãos relevantes para o `axios`.

##### axios(config)

```js
import axios from 'axios';

// Envia uma requisição post
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});
```

```js
// Requisição GET para imagem remota em node.js
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```

##### axios(url[, config])

```js
// Envia uma requisição GET (método padrão)
axios("/user/12345");
```

### Apelidos para requisições

Por conveniência, foram fornecidos pseudônimos para todos os métodos de solicitação suportados.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])
##### axios.postForm(url[, data[, config]])
##### axios.putForm(url[, data[, config]])
##### axios.patchForm(url[, data[, config]])

###### INFO
Ao usar os pseudônimo dos métodos, as propriedades `url`,` method` e `data` não precisam ser especificadas na configuração.
