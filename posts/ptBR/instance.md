---
title: 'Instância Axios'
prev_title: 'Axios API'
prev_link: '/ptBR/docs/api_intro'
next_title: 'Configurações de Requisição'
next_link: '/ptBR/docs/req_config'
---

### Criando uma instância

Você pode criar uma nova instância do axios com uma configuração customizada.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Métodos de instância

Os métodos de instâncias disponiveis estão listadas abaixo. A configuração especificada será mesclada com a configuração da instância.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])