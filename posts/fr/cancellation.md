---
title: 'Annuler une requête'
prev_title: 'Gestion des erreurs'
prev_link: '/fr/docs/handling_errors'
next_title: 'URL-Encoder le contenu d’une requête'
next_link: '/fr/docs/urlencoded'
---

## AbortController

À partir de sa `v0.22.0` Axios supporte [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) afin d’annuler des requêtes à la façon de l’API fetch :

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// annule la requête
controller.abort()
```

## CancelToken `déprécié`

Vous pouvez aussi annuler une requête à l’aide d’un *CancelToken* (jeton d’annulation). 

> L’API des jetons d’annulation d’Axios est basée sur la [proposition permettant d’annuler des promesses](https://github.com/tc39/proposal-cancelable-promises) qui a depuis été retirée.

> Cette API est dépréciée depuis la `v0.22.0` et ne devrait pas être utilisée pour de nouveaux projets

Vous pouvez créer un jeton d’annulation à l’aide de la factory `CancelToken.source` comme ce qui suit :

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // gestion de l’erreur
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// annule la requête (le message est optionnel)
source.cancel('Operation canceled by the user.');
```

Vous pouvez aussi créer un jeton d’annulation en passant une fonction `executor()` au constructeur de `CancelToken` :

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // la fonction executor reçoit une fonction d’annulation comme paramètre
    cancel = c;
  })
});

// annule la requête
cancel();
```

> **Note :** vous pouvez annuler plusieurs requêtes différentes avec le même jeton/signal d’annulation.

Pendant la période de transition, vous pouvez utiliser n’importe laquelle des APIs d’annulation, y compris pour une même requête :

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // gestion de l’erreur
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// annule la requête (le message est optionnel)
source.cancel('Operation canceled by the user.');
// OU
// annule la requête (le paramètre de message n’est pas supporté)
controller.abort();
```
