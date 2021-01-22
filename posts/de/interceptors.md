---
title: 'Anfragen und Antworten abfangen'
prev_title: 'Konfigurationsstandardwerte'
prev_link: '/docs/de/config_defaults'
next_title: 'Errorverarbeitung'
next_link: '/docs/de/handling_errors'
---

Sie können Anfragen oder Antworten vor ihrer verarbeitung wie folgt abfangen:

```js
// Einen Anfragenabfänger erstellen
axios.interceptors.request.use(function (config) {
    // Etwas mit der anfrage tun bevor sie gesendet wird
    return config;
  }, function (error) {
    // Einen Anfragenfehler verarbeiten
    return Promise.reject(error);
  });

// Einen Antwortenabfänger erstellen
axios.interceptors.response.use(function (response) {
    // Jeder Statuscode im Bereich 2xx wird diese Funktion ausführen
    // Antwort vor dem Aufruf von `.then` verarbeiten
    return response;
  }, function (error) {
    // Jeder Statuscode auserhalb des Bereiches 2xx ruft diese Funktion auf
    // Fehler vor dem Aufruf von `.catch` verarbeiten
    return Promise.reject(error);
  });
```

Sie können einen Abfänger auch später wieder entfernen:

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Abfänger können auch zu einer Axios-Instanz hinzugefügt werden:

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```