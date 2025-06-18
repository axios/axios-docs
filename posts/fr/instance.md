---
title: 'L’instance Axios'
prev_title: 'API Axios'
prev_link: '/fr/docs/api_intro'
next_title: 'Configuration de requête'
next_link: '/fr/docs/req_config'
---

### Créer une instance

Vous pouvez créer une nouvelle instance d’Axios avec une configuration spécifique.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Méthodes de l’intance

Les méthodes utilisables sur l’instance sont listées ci-dessous. La configuration passée sera combinée à celle qui a été utilisée pour créer l’instance.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### Appeler directement l’instance avec un objet de configuration

En plus des méthodes pratiques comme `instance.get()` ou `instance.post()`, vous pouvez aussi appeler une instance Axios directement avec un objet de configuration. Cela fonctionne comme `axios(config)` et est particulièrement utile pour renvoyer une requête avec la configuration d’origine.

```js
const instance = axios.create({ baseURL: '/api' });

// Fonctionne comme axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Cette approche permet une logique de retry propre, par exemple lors de la gestion des erreurs d’authentification :

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Renvoyer la requête d’origine
  }

  throw error;
});
```