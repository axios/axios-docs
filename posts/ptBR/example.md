---
title: 'Exemplos minimalistas'
description: 'Um pequeno exemplo de como usar o axios'
prev_title: 'Introdução'
prev_link: '/docs/ptBR/intro'
next_title: 'Requisições POST'
next_link: '/docs/ptBR/post_example'
---

## nota: Uso de CommonJS
<!--## note: CommonJS usage-->
Em ordem de usar o TypeScript (para intellissen e/ou autocomplete) enquanto usando CommonJS importe usando `require()` o código a seguir:
<!--In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:-->

```js
const axios = require('axios').default;

// axios.<method> agora irá prover autocomplete e parametros
// axios.<method> will now provide autocomplete and parameter typings
```

# Exemplo

Executando uma requisição `GET`
<!--Performing a `GET` request-->

```js
const axios = require('axios');

// Faz uma requisição a um usuarío com um ID expecifico
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // manipula o sucesso da requisição
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    // handle error
    console.log(error);
  })
  .then(function () {
    // sempre será executado
    // always executed
  });

// Opcionalmente a requisição acima tambem poderia ser feita assim
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // sempre será executado
    // always executed
  });  

// Quer usar async/await? Adicione o `async` prefixo na sua função/método
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```
> **NOTA:** `async/await` faz parte do ECMAScript 2017 e não é suportado no Internet
<!--> **NOTE:** `async/await` is part of ECMAScript 2017 and is not supported in Internet-->
> Explorer e versões antigas de browsers, use com cuidado.
<!--> Explorer and older browsers, so use with caution.-->