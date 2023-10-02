---
title: 'Konfigurationsstandardwerte'
prev_title: 'Antwortschema'
prev_link: '/de/docs/res_schema'
next_title: 'Abfänger'
next_link: '/de/docs/interceptors'
---

## Konfigurationsstandardwerte

Sie können Konfigurationsstandardwerte angeben, die bei jeder Anfrage verwendet werden.

### Globale Axios-Standardwerte

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Eigene Instanzstandardwerte

```js
// Bei Erstellen der Instanz
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Nach dem Erstellen der Instanz
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Konfigurationsreihenfolge

Konfigurationswerte werden mit folgender Reihenfolge zusammengefügt: Zuerst die Standardwerte des Moduls ([`lib/defaults.js`](https://github.com/axios/axios/blob/master/lib/defaults.js#L28)), dann die der Instanz und am Ende die der Anfrage. Jedes Element in der Reihenfolge überschreibt seinen Vorgänger. Hier sehen Sie ein Beispiel:

```js
// Eine Instanz mit den Standartwerten des moduls
// In diesem Moment wird der Standardwert für `timeout` (0) verwendet
const instance = axios.create();

// Die Modulstandartwerte werden nun überschrieben:
// Alle Anfragen werden nun nach 2,5 Sekunden abgebrochen.
instance.defaults.timeout = 2500;

// Jetzt werden auch die Instanzstandardwerte überschrieben:
// Diese Anfrage wird 5 Sekunden warten bevor sie abbricht.
instance.get('/longRequest', {
  timeout: 5000
});
```
