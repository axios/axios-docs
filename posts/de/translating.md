---
title: 'Die Dokumentation übersetzen'
---

Um Axios für so viele Menschen wie möglich verfügbar zu machen, ist es wichtig dass diese Dokumentation in möglichst vielen Sprachen verfügbar ist. Wir freuen uns immer über jeden der gerne eine Übersetzung beitragen würde. Hier finden Sie Instruktionen, die Ihnen zeigen, wie Sie eine neue Übersetzung hinzugügen können.

## Struktur

Jede Übersetzung besteht aus einer Konfigurationsdatei `{language-shortcut}.lang.js` (Also z.B. `en.lang.js` oder `de.lang.js`) und den übersetzten Textdateien im Ordner `posts/{language-shortcut}` (z.B. `posts/en` oder `posts/de`). `{language-shortcut}` sollte mit dem zweibuchstabigen [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) ihrer Sprache ersetzt werden.

## Die Sprache Konfigurieren

 - Kopieren Sie `en.lang.js`.
 - Benennen Sie die Datei um in `{language-shortcut}.lang.js`.
 - Ersetzen Sie den Wert des Feldes `display` mit dem Namen ihrer Sprache, so wie Sie in der Sprache genannt wird, also für Deutsch “Deutsch” und nicht “German”.
 - Ersetzen Sie den Wert des Feldes `prefix` durch `/{language-shortcut}/`.
 - Übersetzen Sie die Werte in den Feldern `p` und `t`.
 - Übersetzen Sie alle Felder `text` im `sidebar`-Objekt.

Seit neuestem müssen Sie die Links in der Sidebar nicht mehr ändern, da der Präfix nun automatisch eingefügt wird.

### Die Konfiguration registrieren

Wenn Sie mit dem vorherigen Schritt fertig sind, müssen Sie Ihre Konfigurationsdatei noch registrieren. Öffnen Sie dazu die Datei `inert.config.js` und fügen sie relativ weit oben folgende Zeile hinzu:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

`{language-shortcut}` sollte natürlich mal wieder mit dem korrekten Kürzel ersetzt werden.

Suchen Sie nun nach der Konstante `langs`. Befindet sich diese Über Ihrem `require`-Befehl, muss dieser über die Konstante bewegt werden. Fügen Sie der Liste nun folgendes Objekt hinzu:

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

Nun können Sie beginnen die Dokumentation zu übersetzen. Kopieren Sie dazu den Ordner `posts/en` und nennen sie den neuen Ordner `posts/{language-shortcut}`. Dann übersetzen Sie alle Dateien in dem Ordner.

Falls Sie auf Probleme stoßen, können Sie jederzeit [ein Issue erstellen](https://github.com/axios/axios-docs/issues/new/choose).
