---
title: "Schema della Risposta"
prev_title: "Configurazione della Richiesta"
prev_link: "/docs/req_config"
next_title: "Valori Predefiniti"
next_link: "/docs/config_defaults"
---

La risposta di una richiesta contiene le seguenti informazioni.

```js
{
  // `data` è la risposta fornita dal server
  data: {},

  // `status` è il codice di stato HTTP della risposta del server
  status: 200,

  // `statusText` è il messaggio dello stato HTTP del server
  // A partire da HTTP/2 il messaggio è vuoto o non supportato.
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // 'headers' sono gli header HTTP con cui ha risposto il server
  // Tutti i nomi degli header sono in minuscolo ed è possibile accedervi usando la notazione con le parentesi quadre.
  // Esempio: `response.headers['content-type']`
  headers: {},

  // `config` è la configurazione che è stata fornita ad axios per effettuare la richiesta
  config: {},

  // `request` è la richiesta che ha generato questa risposta
  // È l'ultima istanza di ClientRequest in node.js (nei rendirizzamenti)
  // e l'istanza XMLHttpRequest nel browser
  request: {}
}
```

Se usi `then`, riceverai la seguente risposta:

```js
axios.get("/user/12345").then(function (response) {
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
```

Se usi `catch`, o passi una [callback di rejection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) come secondo parametro di `then`, la risposta sarà disponibile attraverso l'oggetto `error`, come spiegato nella sezione [Gestione degli Errori](/docs/handling_errors).
