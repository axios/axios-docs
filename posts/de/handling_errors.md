---
title: 'Errorverarbeitung'
prev_title: 'Abfänger'
prev_link: '/de/docs/interceptors'
next_title: 'Anfragen Abbrechen'
next_link: '/de/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // Die Anfrage wurde erfolgreich gesendet aber der Server
      // antwortete mit einem Code außerhalb des Bereiches 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Die Anfrage wurde gesendet aber keine Antwort empfangen
      // `error.request` ist im Browser eine Instanz von XMLHTTPRequest
      // und in Node.js eine Instanz von http.ClientRequest.
      console.log(error.request);
    } else {
      // Etwas ging beim senden der Anfrage schief
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Mit der Konfigurationsoption `validateStatus` können Sie die Statuscodes, die einen Error auslösen, festlegen

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Nur Statuscodes über 500 lösen einen Error aus
  }
})
```

Mit `toJSON` erhalten sie ein Objekt mit mehr Informationen über den Fehler.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```
