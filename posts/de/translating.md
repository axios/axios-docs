---
title: 'Die Dokumentation übersetzen'
---

Um Axios für so viele Menschen wie möglich verfügbar zu machen, ist es wichtig das diese Dokumentation in möglichst vielen Sprachen verfügbar ist. Wir freuen uns immer über jeden der gerne eine Übersetzung beitragen würde. Hier finden Sie Instruktionen, die Ihnen zeigen, wie Sie eine neue Übersetzung hinzugügen können.

## Struktur

Jede Übersetzung besteht aus einer Konfigurationsdatei `{language-shortcut}.lang.js` (Also z.B. `en.lang.js` oder `de.lang.js`) und den übersetzen Textdateien im Ordner `posts/{language-shortcut}` (z.B. `posts/en` oder `posts/de`). `{language-shortcut}` sollte mit dem zweibuchstabingen [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) ihrer sprache ersetzt werden..

## Die Sprache Konfigurieren

 - Kopieren Sie `en.lang.js`.
 - Bennen Sie die Datei um auf `{language-shortcut}.lang.js`.
 - Ersetzen Sie den Wert des Feldes `display` mit dem Namen ihrer Sprache, so wie sie in der Sprache gennant wird, also für Deutsch “Deutsch” und nicht “German”.
 - Ersetzen Sie den Wert des Feldes `prefix` durch `/{language-shortcut}/`.
 - Übersetzen Sie die Werte in den feldern `p` und `t`.
 - Übersetzen Sie alle felder `text` im `sidebar`-Objekt.

Seit neuestem müssen Sie die Links in der Sidebar nicht mehr ändern da der Präfix nun automatisch eingefügt wird.

### Die Konfiguration registrieren

Wenn Sie mit dem Vorherigen Schritt fertig sind, müssen Sie Ihre Konfigurationsdatei noch registrieren. Öffnen Sie dazu die Datei `inert.config.js` und fügen sie relativ weit oben folgende Zeile hinzu:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

`{language-shortcut}` sollte natürlich mal wieder mit dem korrekten Kürzel ersetzt werden.

Suchen Sie nun nach der Konstante `langs`. Befindet sich diese Über Ihrem `require`-befehl, muss dieser über die Konstante bewegt werden. Fügen sie der liste nun folgendes Objekt hinzu:

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // The configuration object you imported earlier
  }
  ...
];
```

Nun können sie beginnen die Dokumentation zu übersetzen. Kopieren sie dazu den Ordner `posts/en` und nennen sie den neuen Ordner `posts/{language-shortcut}`. Dann übersetzen sie alle Dateien in dem Ordner.

Falls sie auf probleme stoßen, können sie jederzeit [ein Issue erstellen](https://github.com/axios/axios-docs/issues/new/choose).