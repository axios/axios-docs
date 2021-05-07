---
title: 'Instância Axios'
prev_title: 'Axios API'
prev_link: '/docs/ptBR/api_intro'
next_title: 'Configurações de Requisição'
next_link: '/docs/ptBR/req_config'
---

### Criando uma instância

Você pode criar uma nova instância do axios com uma configuração customizada.
<!--You can create a new instance of axios with a custom config.-->

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://algum-dominio.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Métodos de instância

Os métodos de instâncias disponiveis estão listadas abaixo. A configuração especificada será mesclada com a configuração da instância.
<!--The available instance methods are listed below. The specified config will be merged with the instance config.-->

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])