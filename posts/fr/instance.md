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