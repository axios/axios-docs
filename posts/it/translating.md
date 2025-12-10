---
title: "Tradurre la documentazione"
---

Per rendere Axios accessibile a più persone possibili, è importante che questa documentazione possa essere letta in tutte le lingue. Siamo grati a chiunque voglia contribuire alla traduzione della documentazione. Questa guida fornisce tutte le istruzioni per aggiungerne una nuova.

## Struttura

Ogni traduzione è composta da un file di configurazione, `{language-shortcut}.lang.js` (per esempio, `en.lang.js` oppure `de.lang.js`) e dai file relativi alla traduzione della documentazione presenti in `posts/{language-shortcut}/*.md` (per esempio `posts/en` oppure `posts/de`). `{language-shortcut}` deve essere sostituito con il codice [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) della tua lingua, composto da due lettere.

## Configurare la tua lingua

- Copia `en.lang.js`.
- Rinominalo in `{language-shortcut}.lang.js`.
- Sostituisci `display` con il nome della tua lingua, nella tua lingua. Per esempio, se stai traducendo in tedesco, metti “Deutsch” invece di “Tedesco”.
- Sostituisci il prefisso con `/{language-shortcut}/`.
- Traduci i valori nei campi `p` e `t`.
- Traduci tutte le proprietà con l'etichetta `text` nella barra laterale. **Nota:** Dall'ultima versione di questa documentazione, non è più necessario aggiornare i link della barra laterale.

### Registrare la configurazione

Una volta finita la configurazione della lingua e aver tradotto le frasi e i link nel file di configurazione, dovrai registrarla nella configurazione principale. Per farlo, apri `inert.config.js` e aggiungi la seguente riga nelle prime righe del file:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

Ovviamente, ricordati di sostituire `{language-shortcut}` con il codice [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) corretto (anche nel nome della variabile!).

Ora, cerca la costante `langs`. Se questa costante si trova sopra la tua dichiarazione di `require`, sposta la tua dichiarazione di `require` sopra. Aggiungi poi il seguente oggetto alla lista `langs`:

```js
const langs = [
  ...
  {
    name: 'Qualsiasi nome che definisca in maniera univoca la tua lingua, per esempio "English" oppure "German"',
    prefix: "Lo stesso prefisso utilizzato per il file di configurazione.",
    config: {language-shortcut}Config // L'oggetto di configurazione che hai importato in precedenza
  }
  ...
];
```

Ora, puoi iniziare a tradurre i file. Copia la cartella `posts/en` in una nuova cartella `posts/{language-shortcut}` e traduci tutti i file (non tradurre i nomi dei file, ovviamente).

Se riscontri qualsiasi problema, sentiti libero di [creare una issue](https://github.com/axios/axios-docs/issues/new/choose).
