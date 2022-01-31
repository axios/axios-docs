---
title: 'Gestion des erreurs'
prev_title: 'Intercepteurs'
prev_link: '/fr/docs/interceptors'
next_title: 'Annuler une requête'
next_link: '/fr/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // la requête a été faite et le code de réponse du serveur n’est pas dans
      // la plage 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // la requête a été faite mais aucune réponse n’a été reçue
      // `error.request` est une instance de XMLHttpRequest dans le navigateur
      // et une instance de http.ClientRequest avec node.js
      console.log(error.request);
    } else {
      // quelque chose s’est passé lors de la construction de la requête et cela
      // a provoqué une erreur
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Avec l’option de configuration `validateStatus`, vous pouvez définir les codes de réponse HTTP qui provoquent une erreur.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // la requête résout tant que le code de sa réponse est
                         // inférieur à 500
  }
})
```

Avec `toJSON` vous obtiendrez un objet contenant plus d’informations sur l’erreur HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```