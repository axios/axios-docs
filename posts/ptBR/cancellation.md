---
title: 'Cancelamento'
prev_title: 'Manipulando erros'
prev_link: '/docs/ptBR/handling_errors'
next_title: 'Corpo de codificação de URL'
next_link: '/docs/ptBR/urlencoded'
---

Você pode cancelar uma requisição usando um *cancel token*.
<!--You can cancel a request using a *cancel token*.-->

> O token de cancelamento do axios é baseado em withdrawn [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).
<!--> The axios cancel token API is based on the withdrawn [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).-->

Você pode criar um token de cancelamento usando o `CancelToken.souce` conforme mostrado abaixo:
<!--You can create a cancel token using the `CancelToken.source` factory as shown below:-->

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manipula qualquer erro
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancela a requisição (o parametro de mensagem é opcional)
// cancel the request (the message parameter is optional)
source.cancel('Operação cancelada pelo usuário');
//source.cancel('Operation canceled by the user.');
```
Você também poder criar um token de cancelmaneot passando uma função executora para o construtor de `CancelToken`
<!--You can also create a cancel token by passing an executor function to the `CancelToken` constructor:-->

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function recebe uma função de cancelamento como parametro
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancela a requisição
// cancel the request
cancel();
```

> Nota: você pode cancelar multiplas requisições com o mesmo token de cancelamento.
<!--> Note: you can cancel several requests with the same cancel token.-->
