---
title: 'Axios-API'
prev_title: 'POST-Anfragen'
prev_link: '/de/docs/post_example'
next_title: 'Die Axios-Instanz'
next_link: '/de/docs/instance'
---

Anfragen können alternativ mit der Methode `axios` ausgeführt werden:

##### axios(config)

```js
import axios from 'axios';

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

### Weitere Methoden

Für Komfort wurden Parallelbezeichnungen für jede gängige HTTP-Methode hinzugefügt.

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

###### INFO
Wenn die oben genannten 8 Methoden verwendet werden, können die Felder `url`, `method` und `data` im Parameter `config` ausgelassen werden.
