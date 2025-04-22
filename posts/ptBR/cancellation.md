---
title: 'Cancelamento'
prev_title: 'Lidando com Erros'
prev_link: '/ptBR/docs/handling_errors'
next_title: 'Corpo de codificação de URL'
next_link: '/ptBR/docs/urlencoded'
---

## Cancelando requisições

Definindo a propriedade `timeout` numa chamada do axios, lidamos com timeouts na **resposta**.

Em alguns casos (caso a conexão com a rede torne-se indisponível, por exemplo) uma chamada do axios se beneficiaria de poder cancelar a **conexão** de forma prematura. Sem o cancelamento, a chamada ficará esperando até que a requisição exceda o tempo máximo definido no `timeout` (o que pode demorar alguns minutos em uma aplicação server-side).

Para finalizar uma chamada você pode utilizar os seguintes métodos:
- `signal`
- `cancelToken` (descontinuado)

Utilizando `timeout` em conjunto com um método de cancelamento (`signal`, por exemplo), podemos lidar com timeouts na **resposta** E TAMBÉM na **conexão**

### `signal`: AbortController

A partir da versão `v0.22.0`, Axios suporta o uso de [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) para cancelar requisições realizadas via API fetch:

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

Exemplo com timeout utilizando a API [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) mais recente [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // aborta a requisição após 5 segundos
}).then(function(response) {
   //...
});
```

Exemplo com uma função auxiliar: 
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // aborta a requisição após 5 segundos
}).then(function(response) {
   //...
});
```

### CancelToken `descontinuado`

Você também pode cancelat uma requisição utilizando um *CancelToken*.

> A API que o axios utiliza é baseada na [proposta de promessas canceláveis](https://github.com/tc39/proposal-cancelable-promises).

> Essa API foi descontinuada a partir da versão `v0.22.0` e não deve ser utilizada em novos projetos.

Você pode criar um token de cancelamento por meio do método `CancelToken.source`, conforme mostrado abaixo:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Requisição cancelada', thrown.message);
  } else {
    // lida com erro
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancela a requisição (a mensagem é opcional)
source.cancel('Operação cancelada pelo usuário.');
```

Você também pode criar um token de cancelamento passando uma função executora para o construtor de `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // A função executora recebe como parâmetro uma função de cancelamento
    cancel = c;
  })
});

// cancela a requisição
cancel();
```

> Nota: você pode cancelar várias requisições com o mesmo token / signal.

Durante o período de transição, é possível utilizar ambas as APIs de cancelamento, até mesmo em uma única requisição:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Requisição cancelada', thrown.message);
  } else {
    // lida com erro
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancela a requisição (a mensagem é opcional)
source.cancel('Operação cancelada pelo usuário.');
// OR
controller.abort(); // não suporta mensagem
```