---
title: 'Requisições POST'
description: 'Como executar uma requisição POST com Axios'
prev_title: 'Exemplos minimalistas'
prev_link: '/ptBR/docs/example'
next_title: 'Axios API'
next_link: '/ptBR/docs/api_intro'
---

## Executando uma requisição `POST`

### JSON

```js
axios.post('/user', {
    firstName: 'Santos',
    lastName: 'Dumont'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Executando multiplas requisições simultaneamente

```js
function getUserAccount() {
  return axios.get('/user/1963');
}

function getUserPermissions() {
  return axios.get('/user/1963/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// OU

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function ([acct, perm]) {
    // ...
  });
```

Enviando um formulário HTML como JSON

```js
const {data} = await axios.post('/user', document.querySelector('#my-form'), {
  headers: {
    'Content-Type': 'application/json'
  }
})
```

### Formulários

- Multipart (`multipart/form-data`)

```js
const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Santos',
    lastName: 'Dumont',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
)
```

- Formulário codificado para URL (`application/x-www-form-urlencoded`)

```js
const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Santos',
    lastName: 'Dumont',
    orders: [1, 2, 3]
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})
```
