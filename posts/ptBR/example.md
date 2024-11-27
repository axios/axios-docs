---
title: 'Exemplos Minimalistas'
description: 'Um pequeno exemplo de como usar o axios'
prev_title: 'Introdução'
prev_link: '/ptBR/docs/intro'
next_title: 'Requisições POST'
next_link: '/ptBR/docs/post_example'
---

## nota: Uso de CommonJS
Em ordem de usar o TypeScript (para intellisense e/ou preenchimento automático) enquanto usando CommonJS, importe com o `require()` utilize a seguinte abordagem:

```js
const axios = require('axios').default;

// axios.<método> agora o axios fornecerá preenchimento automático e tipagens de parâmetros
```

# Exemplo

Executando uma requisição `GET`

```js
const axios = require('axios');

// Faz uma requisição a um usuário com um ID específico
axios.get('/user?ID=12345')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });

// Opcionalmente a requisição acima poderia ser feita assim da seguinte forma
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {
    // sempre será executado
  });

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
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
> Explorer e versões antigas de browsers, use com cuidado.
