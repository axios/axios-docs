---
title: 'Interceptadores'
prev_title: 'Configurações padrões'
prev_link: '/ptBR/docs/config_defaults'
next_title: 'Manipulando Erros'
next_link: '/ptBR/docs/handling_errors'
---

Você pode interceptar requisições ou respostas antes de serem manipuladas pelo `then` ou `catch`.

```js
// Adiciona um interceptador na requisição
axios.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    return Promise.reject(error);
  });

// Adiciona um interceptador na resposta
axios.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Faz alguma coisa com os dados de resposta
    return response;
  }, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Faz alguma coisa com o erro da resposta
    return Promise.reject(error);
  });
```

Se você precisar remover um interceptador mais tarde, você pode.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Você pode adicionar interceptadores em uma instância customizada do axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```
