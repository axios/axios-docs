---
title: 'Interceptadores'
prev_title: 'Configurações padrões'
prev_link: '/docs/ptBR/config_defaults'
next_title: 'Manipulando Erros'
next_link: '/docs/ptBR/handling_errors'
---
Você pode interceptar requisições ou respostas antes de serem manipuladas pelo `then` ou `catch`.
<!--You can intercept requests or responses before they are handled by `then` or `catch`.-->

```js
// Adiciona um interceptador na requisição
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Faz alguma coisa antes da requisição ser enviada
    // Do something before request is sent
    return config;
  }, function (error) {
    // Faz alguma coisa com o erro da requisição
    // Do something with request error
    return Promise.reject(error);
  });

// Adiciona um interceptador na resposta
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Qualquer código de status que dentro do limite de 2xx faz com que está função seja acionada
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Faz alguma coisa com os dados de resposta
    // Do something with response data
    return response;
  }, function (error) {
    // Qualquer código de status que não esteja no limite do código 2xx faz com que está função seja acionada
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Faz alguma coisa com o erro da resposta
    // Do something with response error
    return Promise.reject(error);
  });
```

Se você precisar remover um interceptador mais tarde, você pode.
<!--If you need to remove an interceptor later you can.-->

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Você pode adicionar interceptadores em uma instância customizada do axios.
<!--You can add interceptors to a custom instance of axios.-->

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```