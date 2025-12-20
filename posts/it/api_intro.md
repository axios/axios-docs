---
title: "Axios API"
description: "Documentazione API di Axios"
prev_title: "Richieste POST"
prev_link: "/docs/post_example"
next_title: "L'istanza Axios"
next_link: "/docs/instance"
---

Le richieste possono essere effettuate passando un oggetto di configurazione come parametro di `axios`.

##### axios(config)

```js
// Richiesta POST
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});
```

```js
// Richiesta GET per un'immagine remota con node.js
axios({
  method: "get",
  url: "http://bit.ly/2mTM3nY",
  responseType: "stream",
}).then(function (response) {
  response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
});
```

##### axios(url[, config])

```js
// Inviare una richiesta GET (metodo predefinito)
axios("/user/12345");
```

### Alias dei metodi di richiesta

Per comodità, vengono utilizzati degli alias per tutti i metodi di richiesta supportati.

##### axios.request(config)

##### axios.get(url[, config])

##### axios.delete(url[, config])

##### axios.head(url[, config])

##### axios.options(url[, config])

##### axios.post(url[, data[, config]])

##### axios.put(url[, data[, config]])

##### axios.patch(url[, data[, config]])

##### axios.postForm(url[, data[, config]])

##### axios.putForm(url[, data[, config]])

##### axios.patchForm(url[, data[, config]])

> NOTA: Quando si usano gli alias, non serve specificare le proprietà `url`, `method`, e `data` all'interno di config.
