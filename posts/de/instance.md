---
title: 'Die Axios-Instanz'
prev_title: 'Die Axios-API'
prev_link: '/de/docs/api_intro'
next_title: 'Anfragenkonfigurationsschema'
next_link: '/de/docs/req_config'
---

### Eine Instanz erstellen

Sie können eine neue Instanz mit eigener Konfiguration durch folgende Methode erstellen:

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Instanczmethoden

Die verfügbaren Instanzmethoden sind im folgenden aufgelistet. Die beim Aufruf dieser Methoden angegebene Konfiguration wird mit der Instanzkonfiguration zusammengeführt.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])
