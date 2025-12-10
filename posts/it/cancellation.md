---
title: "Annullare le Richieste"
prev_title: "Gestione degli Errori"
prev_link: "/docs/handling_errors"
next_title: "Corpo con URL-Encoding"
next_link: "/docs/urlencoded"
---

## Annullare le richieste

Puoi gestire i timeout relativi alla **risposta**, impostando la proprietà `timeout`.

In alcuni casi (ad esempio quando una **connessione** di rete si interrompe), è utile poter annullare tempestivamente la richiesta axios. In caso contrario la richiesta potrebbe rimanere in sospeso finché lo stack o il codice chiamante non va in timeout, cosa che in un’applicazione server-side può richiedere diversi minuti.

Per terminare una chiamata axios, puoi usare i seguenti metodi:

- `signal`
- `cancelToken` (deprecato)

La combinazione di `timeout` e i metodi di annullamento (es. `signal`), dovrebbe coprire sia i timeout relativi alla **risposta** che i timeout relativi alla **connessione**.

### `signal`: AbortController

A partire dalla versione `v0.22.0`, Axios supporta [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) per annullare le richieste nello stesso modo in cui viene fatto con l'API fetch.

```js
const controller = new AbortController();

axios
  .get("/foo/bar", {
    signal: controller.signal,
  })
  .then(function (response) {
    //...
  });
// annulla la richiesta
controller.abort();
```

Esempio con un timeout, utilizzando l'API più recente di [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) [nodejs 17.3+]:

```js
axios
  .get("/foo/bar", {
    signal: AbortSignal.timeout(5000), // Interrompi la richiesta dopo 5 secondi
  })
  .then(function (response) {
    //...
  });
```

Esempio con una funzione ausiliaria di timeout:

```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios
  .get("/foo/bar", {
    signal: newAbortSignal(5000), // Interrompi la richiesta dopo 5 secondi
  })
  .then(function (response) {
    //...
  });
```

### CancelToken `deprecato`

Puoi anche annullare una richiesta usando un _CancelToken_.

> L'API per il token di annullamento di axios è basato sulla proposta, ormai ritirata: [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).

> Questa API è deprecata a partire dalla versione `v0.22.0` e non dovrebbe essere utilizzata nei nuovi progetti.

Puoi creare un token di annullamento usando la factory `CancelToken.source`, come mostrato qui sotto:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Richiesta annullata", thrown.message);
    } else {
      // Gestisci l'errore
    }
  });

axios.post(
  "/user/12345",
  {
    name: "Mario Rossi",
  },
  {
    cancelToken: source.token,
  }
);

// Annulla la richiesta (il parametro message è opzionale)
source.cancel("Operazione annullata dall'utente.");
```

Puoi anche creare un token di annullamento passando una funzione di esecuzione al costruttore di `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get("/user/12345", {
  cancelToken: new CancelToken(function executor(c) {
    // Una funzione di esecuzione riceve una funzione di annullamento come parametro
    cancel = c;
  }),
});

// Annulla la richiesta
cancel();
```

> Nota: puoi annullare più richieste con lo stesso token di annullamento / signal

Durante il periodo di transizione (tra due versioni), puoi usare entrambe le API di annullamento, anche per la stessa richiesta:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
    signal: controller.signal,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Richiesta annullata", thrown.message);
    } else {
      // Gestisci l'errore
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// Annulla la richiesta (il parametro message è opzionale)
source.cancel("Operazione annullata dall'utente.");
// OPPURE
controller.abort(); // il parametro message non è supportato qui
```
