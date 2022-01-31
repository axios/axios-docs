---
title: 'API Axios'
description: 'Le référentiel de l’API Axios'
prev_title: 'Requêtes POST'
prev_link: '/fr/docs/post_example'
next_title: 'L’instance Axios'
next_link: '/fr/docs/instance'
---

Les requêtes peuvent être faites en passant la configuration correspondante à `axios()`.

##### axios(config)

```js
// Envoi d’une requête POST.
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Pierrafeu'
  }
});
```

```js
// Requête GET pour une image distante avec node.js.
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// Envoyer une requête GET (c’est la méthode par défaut).
axios('/user/12345');
```

### Alias des méthodes de requête

Pour plus de simplicité, des alias correspondant à toutes les méthodes supportées existent.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

> **Note :** lorsque vous utilisez des alias de méthodes, les champs `url`, `method` et `data` n’ont pas besoin d’être spécifiés dans la configuration.
