---
title: 'Anfragen Abbrechen'
prev_title: 'Errorverarbeitung'
prev_link: '/de/docs/handling_errors'
next_title: 'URL-Ähnlich Kodierte Anfragenkörper'
next_link: '/de/docs/urlencoded'
---

Anfragen können mit hilfe eines *Cancel Token*s abgebrochen werden.

> Diese API basiert auf den zurückgezogenen Vorschlag für *[abbrechbare Promises](https://github.com/tc39/proposal-cancelable-promises)*.

Ein CancelToken kann wie folgt erstellt werden:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Anfrage abgebrochen', thrown.message);
  } else {
    // Error verarbeiten
  }
});

axios.post('/user/12345', {
  name: 'Neuer name'
}, {
  cancelToken: source.token
})

// Anfrage abbrechen. (Das Argument mit der Nachricht ist optional.)
source.cancel('Operation wurde vom Nutzer abgebrochen');
```

Ein CancelToken kann auch wie folgt erstellt werden:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Diese Funktion bekommt eine Funktion zum Abbrechen der Anfrage als Argument
    cancel = c;
  })
});

// Anfrage abbrechen
cancel();
```

> Info: Sie können mehrere Anfragen mit dem gleichen CancelToken abbrechen
