---
title: "L'Istanza Axios"
prev_title: "Axios API"
prev_link: "/docs/api_intro"
next_title: "Configurazione delle Richieste"
next_link: "/docs/req_config"
---

### Creare un'istanza

Puoi creare una nuova istanza di axios con una configurazione personalizzata.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
```

### Metodi di istanza

Di seguito sono elencati tutti i metodi disponibili nell'istanza. La configurazione definita in `config` verrà unita a quella predefinita dell'istanza.

##### axios#request(config)

##### axios#get(url[, config])

##### axios#delete(url[, config])

##### axios#head(url[, config])

##### axios#options(url[, config])

##### axios#post(url[, data[, config]])

##### axios#put(url[, data[, config]])

##### axios#patch(url[, data[, config]])

##### axios#getUri([config])

### Chiamare l'istanza con un oggetto di configurazione

In aggiunta all'utilizzo dei metodi `instance.get()` oppure `instance.post()`, è possibile invocare direttamente un'istanza di Axios passando un oggetto di configurazione come parametro. Questo è equivalente a chiamare `axios(config)`, ed è particolarmente utile quando vuoi ripetere una richiesta usando la stessa configurazione della richiesta originale.

```js
const instance = axios.create({ baseURL: "/api" });

// Funziona esattamente come axios(config)
instance({
  url: "/users",
  method: "get",
});
```

Questo tipo di approccio permette logiche di retry pulite quando si gestiscono errori di autenticazione:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Ritenta la richiesta originale con la stessa configurazione
  }

  throw error;
});
```
