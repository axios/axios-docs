---
title: 'Exemplos minimalistas'
description: 'Um pequeno exemplo de como usar o axios'
prev_title: 'Introdução'
prev_link: '/ptBR/docs/intro'
next_title: 'Requisições POST'
next_link: '/ptBR/docs/post_example'
---

## nota: Uso de CommonJS
Para usar o TypeScript (para intellisense e/ou preenchimento automático) enquanto utiliza importação via `require()` com CommonJS, utilize a seguinte abordagem:

```js
const axios = require('axios').default;

// axios.<método> agora contará com preenchimento automático e tipagem de parâmetros
```

# Exemplo

Executando uma requisição `GET`

```js
const axios = require('axios');

// Faz uma requisição a um usuário com um ID expecífico
axios.get('/user?ID=12345')
  .then(function (response) {
    // manipula a resposta da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula os erros
    console.log(error);
  })
  .finally(function () {
    // sempre será executado
  });

// Opcionalmente a requisição acima poderia ser feita da seguinte maneira
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
  .finally(function () {
    // sempre será executado
  });  

// Quer usar async/await? Adicione o prefixo `async` à sua função/método
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
> Explorer e navegadores antigos, use com cuidado.