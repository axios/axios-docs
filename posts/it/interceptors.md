---
title: "Interceptors"
prev_title: "Valori Predefiniti"
prev_link: "/docs/config_defaults"
next_title: "Gestione degli Errori"
next_link: "/docs/handling_errors"
---

È possibile intercettare le richieste e le risposte **prima** che vengano gestite da `then` o `catch`.

La funzione `use` aggiunge un handler alla lista degli handler che vengono eseguiti quando la Promise viene risolta con successo o rifiutata. L'handler è definito da due funzioni specifiche, in base ai due casi.

È anche possibile passare come terzo parametro un oggetto opzionale options.
L’opzione synchronous indica se l’interceptor deve essere eseguito in modo sincrono: se synchronous è true l’handler viene eseguito sincrono, altrimenti viene considerato asincrono.
Se non viene fornita l’opzione synchronous, l’handler viene trattato come asincrono per impostazione predefinita.
`runWhen` controlla quando eseguire l'interceptor. Si può inserire una funzione che restituisce true o false in base a se l'interceptor deve intervenire. Il valore predefinito restituisce sempre true (l'interceptor viene eseguito sempre).

```js
// Aggiungi un interceptor alle richieste
axios.interceptors.request.use(function (config) {
    // Fai qualcosa prima che venga effettuata la richiesta
    return config;
  }, function (error) {
    // Fai qualcosa quando le richieste vanno in errore
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* Questa funzione restituisce true */}
);

// Aggiungi un interceptor alle risposte
axios.interceptors.response.use(function onFulfilled(response) {
    // Qualsiasi codice di stato HTTP che si trova nel range dei 2xx farà triggerare questa funzione
    // Fai qualcosa con la risposta
    return response;
  }, function onRejected(error) {
    // Qualsiasi codice di stato HTTP che NON si trova nel range dei 2xx farà triggerare questa funzione
    // Fai qualcosa con l'errore
    return Promise.reject(error);
  });
```

Generalmente, l'interceptor delle risposte `onFulfilled` viene invocato solo per le risposte con codice di stato HTTP nel range 2xx, altrimenti viene invocato `onRejected`.
Tuttavia, questo comportamento dipende dalla configurazione di [validateStatus](/docs/req_config).
Ad esempio, se `validateStatus` è impostato per restituire sempre `true`, allora `onFulfilled` verrà invocato per _qualsiasi_ risposta (senza tener conto del codice di stato HTTP).

Puoi sempre rimuovere un interceptor in qualsiasi momento, nel caso in cui tu non ne abbia più bisogno.

```js
const myInterceptor = axios.interceptors.request.use(function () {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);
```

Puoi aggiungere un inteceptor ad un'istanza di axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {
  /*...*/
});
```
