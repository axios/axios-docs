---
title: 'Minimalbeispiel'
description: 'A kleines verwendungsbeispiel von axios'
prev_title: 'Einleitung'
prev_link: '/de/docs/intro'
next_title: 'POST-Anfragen'
next_link: '/de/docs/post_example'
---

## Verwendung mit CommonJS
Um TypeScript-Typings (für Intellisense / Autocomplete) trotz der Nutzung von CommonJS-Imports mit `require()` zu erhalten, verwenden Sie bitte die folgende Methode:

```js
const axios = require('axios').default;

// axios.<methode> wird nun autocomplete und typings zur Verfügung stellen.
```

# Beispiel

Eine `GET`-Anfrage ausführen:

```js
const axios = require('axios');

// Einen Nutzer mit einer bestimmten ID anfragen
axios.get('/user?ID=12345')
  .then(function (response) {
    // Erfolg verarbeiten
    console.log(response);
  })
  .catch(function (error) {
    // Fehler verarbeiten
    console.log(error);
  })
  .then(function () {
    // Wird immer ausgeführt
  });

// Die obige Anfrage könnte auch so ausgeführt werden:
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // Wird immer ausgeführt
  });  

// async/await wird auch unterstützt
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **NOTIZ:** `async/await` ist Teil von ECMAScript 2017 und wird von Internet
> Explorer und älteren Browsern nicht unterstützt.
