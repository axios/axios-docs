---
title: "Valori Predefiniti"
prev_title: "Schema di Riposta"
prev_link: "/docs/res_schema"
next_title: "Interceptors"
next_link: "/docs/interceptors"
---

## Valori Predefiniti

È possibile specificare i valori predefiniti che verranno applicati ad ogni richiesta.

### Valori predefiniti globali di axios

```js
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
```

### Valori predefiniti dell'istanza axios

```js
// Configura i valori predefiniti quando crei una nuova istanza axios
const instance = axios.create({
  baseURL: "https://api.example.com",
});

// Modifica i valori predefiniti dopo la creazione dell'istanza
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
```

### Priorità dei valori predefiniti

I valori predefiniti verranno uniti seguendo un ordine preciso. L'ordine inizia con i valori predefiniti della libreria, che puoi trovare qui [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js), poi la proprietà `defaults` dell'istanza, e infine l'argomento `config`. Quest'ultimo avrà precedenza sul primo.
Ecco un esempio:

```js
// Crea un'istanza utilizzando i valori predefiniti forniti dalla libreria
// Il valore di timeout predefinito della libreria è uguale a `0`
const instance = axios.create();

// Sovrascrivi il valore di timeout della libreria
// Ora tutte le richieste che fanno uso di questa istanza aspetteranno 2.5 secondi prima di andare in timeout
instance.defaults.timeout = 2500;

// Sovrascrivi il valore di timeout per questa richiesta, sapendo che richiederà molto tempo
instance.get("/longRequest", {
  timeout: 5000,
});
```
