---
title: "Esempio di Utilizzo"
description: "Un piccolo esempio di utilizzo di axios"
prev_title: "Introduzione"
prev_link: "/docs/intro"
next_title: "Richieste POST"
next_link: "/docs/post_example"
---

## Nota: Utilizzo in CommonJS

Per ottenere la tipizzazione **Typescript** (per l'**IntelliSense** e l'autocompletamento) usando CommonJS con `require()`, utilizza il seguente approccio:

```js
const axios = require("axios").default;

// axios.<method> verrà riconosciuto da IntelliSense per l’autocompletamento e la tipizzazione dei parametri
```

# Esempio

Eseguire una richiesta `GET`

```js
const axios = require("axios");

// Fare una richiesta per un utente con un ID specifico
axios
  .get("/user?ID=12345")
  .then(function (response) {
    // Gestisci l'esito positivo
    console.log(response);
  })
  .catch(function (error) {
    // Gestisci l'errore
    console.log(error);
  })
  .finally(function () {
    // viene sempre eseguito
  });

// In alternativa, la richiesta potrebbe essere fatta anche in questo modo
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // viene sempre eseguito
  });

// Vuoi usare la sintassi async/await? Aggiungi `async` alla dichiarazione della funzione/metodo.”
async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **NOTA:** `async/await` fa parte dello standard ECMAScript 2017 e pertanto non è supportato su Internet
> Explorer e altri browser vecchi, quindi usa con attenzione.
