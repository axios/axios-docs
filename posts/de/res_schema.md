---
title: 'Antwortenschema'
prev_title: 'Anfragenkonfigurationsschema'
prev_link: '/de/docs/req_config'
next_title: 'Konfigurationsstandardwerte'
next_link: '/de/docs/config_defaults'
---

Die Antwort auf eine Anfrage enthält folgende Informationen:

```js
{
  // `data`: Die Antwort, die der Server gesendet hat
  data: {},

  // `status`: Der HTTP-Status-Code der Serverantwort
  status: 200,

  // `statusText`: Die HTTP-Status-Nachricht der Serverantwort
  statusText: 'OK',

  // `headers`: Die HTTP-Header der Serverantwort
  // Alle Header-Namen sind in Kleinbuchstaben.
  // Beispiel: `response.headers['content-type']`
  headers: {},

  // `config` Die konfiguration, die in der Anfrage angegeben wurde
  config: {},

  // `request` Die Anfrage, die diese Antwort generiert hat. Auf
  // Node.js ein ClientRequest, im Browser eine Instanz von
  // XMLHttpRequest
  request: {}
}
```

Die Antwort wird so empfangen:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

Bei der Verwendung von `catch` oder eines [`rejection callback`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) als zweiter Parameter zu `then`, wird die Antwort durch das Objekt `error` verfügbar, wie im Abschnitt [Errorverarbeitung](/de/docs/handling_errors) erklärt wird.
