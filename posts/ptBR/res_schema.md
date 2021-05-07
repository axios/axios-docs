---
title: 'Esquema de resposta'
prev_title: 'Configurações de requisição'
prev_link: '/docs/ptBR/req_config'
next_title: 'Configurações padrões'
next_link: '/docs/ptBR/config_defaults'
---

A resposta para uma requisição contem as seguintes informações.
<!--The response for a request contains the following information.-->

```js
{
  // `data` é a resposta que foi fornecida pelo servidor
  // `data` is the response that was provided by the server
  data: {},
  
  // `status` é o código de status HTTP da resposta do servido
  // `status` is the HTTP status code from the server response
  status: 200,

  // `statusText` é a mensagem do status da resposta do servidor
  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` os cabeçalhos HTTP com os quais o servidor respondeu
  // `headers` the HTTP headers that the server responded with
  // Todos os nomes de cabeçalho são em caixa baixa e podem ser acessados ​​usando a notação de colchetes.
  // All header names are lower cased and can be accessed using the bracket notation.
  // Exemplo: `response.headers['content-type']`
  headers: {},

  // `config` é a configuração que foi fornecida ao `axios` para a requisição
  // `config` is the config that was provided to `axios` for the request
  config: {},

  // `request` é a requisição que gerou esta resposta
  // `request` is the request that generated this response
  // É a última instância de ClientRequest em node.js (em redirecionamentos)
  // It is the last ClientRequest instance in node.js (in redirects)
  // e uma instância XMLHttpRequest no navegador
  // and an XMLHttpRequest instance in the browser
  request: {}
}
```

Ao usar o `then`, você receberá a seguinte resposta:
<!--When using `then`, you will receive the response as follows:-->

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

Ao usar `cathc`, ou passar uma [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) como segundo parâmetro do `then`, a resposta estará disponível através do objeto `error` coomo explicado na seção [Manipulando Erros](/docs/ptBR/handling_errors).
<!--When using `catch`, or passing a [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) as second parameter of `then`, the response will be available through the `error` object as explained in the [Handling Errors](/docs/handling_errors) section.-->