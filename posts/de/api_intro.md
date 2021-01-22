---
title: 'Axios-API'
prev_title: 'POST-Anfragen'
prev_link: '/docs/de/post_example'
next_title: 'Die Axios-Instanz'
next_link: '/docs/de/instance'
---

Anfragen können alternative dadurch getätigt werden, die relevante configuration der funktion `axios` zu übergeben:

##### axios(config)

```js
// Eine POST-Anfrage absenden
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// GET-Anfrage nach einem bild in *node.js*
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
// GET-Anfrage
axios('/user/12345');
```

### Request method aliases

Für komfort wurden Parallelbezeichnungen für jede HTTP-Methode hinzugefügt.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### INFO
Wenn die oben genannten 8 Methoden verwendet werden können die felder `url`, `method` und `data` im Parameter `config` ausgelassen werden.