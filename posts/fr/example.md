---
title: 'Exemple minimal'
description: 'Un petit exemple d’utilisation d’Axios'
prev_title: 'Introduction'
prev_link: '/fr/docs/intro'
next_title: 'Requêtes POST'
next_link: '/fr/docs/post_example'
---

## Note : utilisation CommonJS
Afin de profiter des types TypeScript (pour IntelliSense/l’autocomplétion) lorsque vous utilisez des imports CommonJS avec `require()`, vous pouvez opter pour l’approche qui suit :

```js
const axios = require('axios').default;

// axios.<méthode> permettra ainsi l’autocomplétion et donnera les types des paramètres
```

# Exemple

Faire une requête `GET`

```js
const axios = require('axios');

// Requêter un utilisateur avec un ID donné.
axios.get('/user?ID=12345')
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response);
  })
  .catch(function (error) {
    // en cas d’échec de la requête
    console.log(error);
  })
  .finally(function () {
    // dans tous les cas
  });

// la requête ci-dessus pourrait aussi être faite comme ceci :
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
    // dans tous les cas
  });  

// vous souhaitez utiliser async/await ?
// ajoutez le mot-clé `async` à la fonction/méthode englobante
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **Note :** `async/await` fait partie d’ECMAScript 2017 et n’est pas supporté par Internet Explorer et les vieux navigateurs, alors utilisez-le avec précaution.