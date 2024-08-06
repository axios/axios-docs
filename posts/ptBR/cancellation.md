---
title: 'Cancelamento'
prev_title: 'Manipulando erros'
prev_link: '/ptBR/docs/handling_errors'
next_title: 'Corpo de codificação de URL'
next_link: '/ptBR/docs/urlencoded'
---

## AbortController

A partir da `v0.22.0`, o Axios oferece suporte ao [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) para cancelar requisições em forma de API fetch.

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancela a requisição
controller.abort()
```

## CancelToken `descontinuado`

Você pode cancelar uma requisição usando um *cancel token*.

> O token de cancelamento do axios é baseado em retirada [proposta de promessas canceláveis](https://github.com/tc39/proposal-cancelable-promises).

Você pode criar um token de cancelamento usando o `CancelToken.source` conforme mostrado abaixo:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // manipulando erro
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancela a requisição (o parâmetro de mensagem é opcional)
source.cancel('Operação cancelada pelo usuário');
```

Você também poder criar um token de cancelamento passando uma função executora para o construtor de `CancelToken`

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Uma função executora recebe uma função de cancelamento como parâmetro
    cancel = c;
  })
});

// cancela a requisição
cancel();
```

> Nota: você pode cancelar múltiplas requisições com o mesmo token de cancelamento.
