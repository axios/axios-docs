---
title: 'Intercepteurs'
prev_title: 'Configuration par défaut'
prev_link: '/fr/docs/config_defaults'
next_title: 'Gestion des erreurs'
next_link: '/fr/docs/handling_errors'
---

Vous pouvez intercepter des requêtes ou des réponses avant qu’elles ne passent dans `then` ou `catch`.

```js
// ajout d’un intercepteur de requête
axios.interceptors.request.use(function (config) {
    // faire quelque chose avant que la requête ne soit envoyée
    return config;
  }, function (error) {
    // faire quelque chose en cas d’erreur
    return Promise.reject(error);
  });

// ajout d’un intercepteur de réponse
axios.interceptors.response.use(function (response) {
    // n’importe quel code de réponse HTTP dans la plage 2xx activera cette
    // fonction
    // faire quelque chose avec les données de la réponse
    return response;
  }, function (error) {
    // n’importe quel code de réponse HTTP hors de la plage 2xx activera cette
    // fonction
    // faire quelque chose avec les données de l’erreur
    return Promise.reject(error);
  });
```

Vous pouvez retirer un intercepteur après-coup.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Vous pouvez aussi associer un intercepteur à une instance.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```