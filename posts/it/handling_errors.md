---
title: "Gestione degli Errori"
prev_title: "Interceptors"
prev_link: "/docs/interceptors"
next_title: "Annullare le Richieste"
next_link: "/docs/cancellation"
---

La struttura generale degli errori axios è la seguente:

- **message** - Un breve riassunto del messaggio di errore e lo stato con cui è fallito.
- **name** - Definisce l'origine dell'errore. Per axios, sarà sempre un 'AxiosError'.
- **stack** - Fornisce lo stack trace dell'errore.
- **config** - Oggetto di configurazione axios definito dall'utente quando è stata effettuata la richiesta.
- **code** - Rappresenta un errore identificativo di axios. La tabella sottostante elenca le definizioni dei vari errori interni di axios.
- **status** - Il codice di stato HTTP della risposta. Vedi [qui](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) per il significato dei codici di stato HTTP più comuni.

```js
axios.get("/user/12345").catch(function (error) {
  if (error.response) {
    // È stata fatta una richiesta e il server ha risposto un codice di stato HTTP
    // che non rientra nel gruppo dei codici 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // È stata fatta una richiesta ma non è stata ricevuta nessuna risposta
    // `error.request` è un'istanza di XMLHttpRequest nel browser e un'istanza
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Si è verificato un errore durante la configurazione della richiesta
    console.log("Error", error.message);
  }
  console.log(error.config);
});
```

Con l'opzione di configurazione `validateStatus`, è possibile definire i codici HTTP che dovrebbero generare un errore.

```js
axios.get("/user/12345", {
  validateStatus: function (status) {
    return status < 500; // Valida solo le risposte con il codice di stato HTTP minore di 500
  },
});
```

Con `toJSON` è possibile ottenere un oggetto con più informazioni relative all'errore HTTP.

```js
axios.get("/user/12345").catch(function (error) {
  console.log(error.toJSON());
});
```
