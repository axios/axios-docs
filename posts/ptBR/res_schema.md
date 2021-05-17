---
title: "Esquema de resposta"
prev_title: "Configurações de requisição"
prev_link: "/ptBR/docs/req_config"
next_title: "Configurações padrões"
next_link: "/ptBR/docs/config_defaults"
---

A resposta para uma requisição contêm as seguintes informações.

```js
{
  // `data` é a resposta que foi fornecida pelo servidor
  data: {},

  // `status` é o código de status HTTP da resposta do servido
  status: 200,

  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',

  // `headers` os cabeçalhos HTTP com os quais o servidor respondeu
  // Todos os nomes de cabeçalho estão em letras minúsculas e podem ser acessados ​​usando a notação de colchetes.
  // Exemplo: `response.headers['content-type']`
  headers: {},

  // `config` é a configuração que foi fornecida ao `axios` para a requisição
  config: {},

  // `request` é a requisição que gerou esta resposta
  // É a última instância da requisição do cliente em node.js (em redirecionamentos)
  // e uma instância XMLHttpRequest no navegador
  request: {}
}
```

Ao usar o `then`, você receberá a resposta da seguinte forma:

```js
axios.get("/user/12345").then(function (response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

Ao usar `catch`, ou passar uma [`rejection callback`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) como segundo parâmetro do `then`, a resposta estará disponível através do objeto `error` coomo explicado na seção de [manipulação de erros](/ptBR/docs/handling_errors).
