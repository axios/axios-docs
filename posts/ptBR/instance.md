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

### Chamando a instância diretamente com um objeto de configuração

Além dos métodos convenientes como `instance.get()` ou `instance.post()`, você também pode chamar uma instância do Axios diretamente passando um objeto de configuração. Isso funciona da mesma forma que `axios(config)` e é útil, por exemplo, para reenviar uma requisição com a configuração original.

```js
const instance = axios.create({ baseURL: '/api' });

// Funciona como axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Esse padrão permite implementar uma lógica de repetição (retry) de forma limpa, como ao lidar com erros de autenticação:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Reenvia a requisição original
  }

  throw error;
});
```