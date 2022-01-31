---
title: 'Schéma de réponse'
prev_title: 'Configuration de requête'
prev_link: '/fr/docs/req_config'
next_title: 'Configuration par défaut'
next_link: '/fr/docs/config_defaults'
---

La réponse d’une requête comporte les informations suivantes.

```js
{
  // `data` est le contenu de la réponse renvoyée par le serveur.
  data: {},

  // `status` est le code HTTP de la réponse.
  status: 200,

  // `statusText` est le message de statut HTTP de la réponse.
  statusText: 'OK',

  // `headers` sont les headers HTTP associés à la réponse.
  // Tous les noms de headers sont en minuscules et peuvent être récupérés en
  // utilisant les crochets.
  // Par exemple : `response.headers['content-type']`.
  headers: {},

  // `config` est la configuration de requête qui a été fournie à Axios.
  config: {},

  // `request` est la requête qui a engendré cette réponse.
  // Il s’agit de la dernière instance de ClientRequest avec node.js (il peut y
  // avoir des redirections) et d’une instance de XMLHttpRequest avec le
  // navigateur.
  request: {}
}
```

Si la réponse du serveur passe dans le bloc `then`, vous pourrez récupérer ces données de la façon suivante :

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

Si la réponse du serveur passe dans le bloc `catch`, ou par le [callback de rejet](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) en tant que second paramètre de `then`, vous pourrez récupérer ces données via l’objet `error` comme cela est expliqué sur la page [Gestion des erreurs](/fr/docs/handling_errors).