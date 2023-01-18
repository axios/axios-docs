---
title: 'Anfragen und Antworten abfangen'
prev_title: 'Konfigurationsstandardwerte'
prev_link: '/de/docs/config_defaults'
next_title: 'Errorverarbeitung'
next_link: '/de/docs/handling_errors'
---

Sie können Anfragen oder Antworten vor ihrer Verarbeitung wie folgt abfangen:

```js
// Einen Anfragenabfänger erstellen
axios.interceptors.request.use(function (config) {
    // Etwas mit der Anfrage tun bevor sie gesendet wird
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
