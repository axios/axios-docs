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

### Instanz direkt mit einem Konfigurationsobjekt aufrufen

Neben den Komfortmethoden wie `instance.get()` oder `instance.post()` können Sie eine Axios-Instanz auch direkt mit einem Konfigurationsobjekt aufrufen. Dies funktioniert genauso wie `axios(config)` und ist besonders nützlich, wenn Sie eine Anfrage mit der ursprünglichen Konfiguration erneut senden möchten.

```js
const instance = axios.create({ baseURL: '/api' });

// Funktioniert wie axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Dieses Vorgehen ermöglicht eine saubere Retry-Logik, z.B. beim Umgang mit Authentifizierungsfehlern:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Ursprüngliche Anfrage erneut senden
  }

  throw error;
});
```