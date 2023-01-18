---
title: 'Anfragenkonfigurationsschema'
prev_title: 'Die Axios-Instanz'
prev_link: '/de/docs/instance'
next_title: 'Antwortenschema'
next_link: '/de/docs/res_schema'
---

Dies sind die verfügbaren Konfigurationsoptionen für HTTP-Anfragen. Nur das Feld `url` wird benötigt. Für Anfragen wird standardmäßig die `GET`-Methode verwendet sofern die HTTP-Methode nicht explizit mit der Option `method` spezifiziert wird.

```js
{
  // `url` ist die Server-URL, die für die Anfrage verwendet wird.
  url: '/user',

  // `method` ist die zu verwendende HTTP-Methode
  method: 'get', // Standardwert

  // `baseURL` wird `url` vorangestellt außer bei `url` handelt es sich um eine absolute URL.
  // Dies ist speziell bei Axios-Instanzen nützlich wenn alle Anfragen der
  // Instanz an die selbe Domäne geschickt werden sollen.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` erlaubt Änderungen an den Anfragendaten bevor sie zum
  // Server geschickt werden. Dies funktioniert nur bei den Methoden 'PUT',
  // 'POST', 'PATCH' und 'DELETE'. Die letzte Funktion in der Liste muss einen
  // String, Buffer, ArrayBuffer, FormData oder Stream zurückgeben.
  // Das Objekt `headers` darf bearbeitet werden.
  transformRequest: [function (data, headers) {
    // Tun Sie was auch immer sie wollen um die Daten zu transformieren

    return data;
  }],

  // `transformResponse` erlaubt Änderungen an den zurückgegebenen Daten bevor
  // diese an `then` bzw. `catch` weitergegeben werden.
  transformResponse: [function (data) {
    // Tun Sie was auch immer sie wollen um die Daten zu transformieren

    return data;
  }],

  // Eigene Headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` sind die URL-Parameter, die in der Anfrage geschickt werden. Das Feld
  // muss entweder ein einfaches Objekt oder eine Instanz der Klasse URLSearchParams
  // beinhalten.
  params: {
    ID: 12345
  },

  // Mit `paramsSerializer` kann optional die Funktion zur Serialisierung des
  // Feldes `params` manuell überschrieben werden.
  // (z.B. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` beinhaltet die Daten, die im Körper der Anfrage übertragen werden sollen.
  // `data` wird nur bei den HTTP-Methoden 'PUT', 'POST', 'DELETE' und 'PATCH' berücksichtigt.
  // Wenn `transformRequest` nicht gesetzt ist, muss das Feld einer der folgenden Datentypen sein:
  //  - String, einfaches Objekt, ArrayBuffer, ArrayBufferView, URLSearchParams
  //  - Im Browser auch: FormData, File, Blob
  //  - In Node.js auch: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // Daten können auch so gesendet werden:
  data: 'Country=Brasil&City=Belo Horizonte',

  // Maximale Anzahl an Millisekunden bevor die Anfrage abgebrochen wird
  timeout: 1000, // Standardwert: `0` (kein timeout)

  // `withCredentials` gibt an, ob Cross-Site-Access-Control-Anfragen mit Credentials
  // ausgeführt werden sollen
  withCredentials: false, // Standardwert

  // `adapter` erlaubt ein einfacheres Testen, siehe https://github.com/axios/axios/blob/master/lib/adapters/README.md
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` Gibt den Datentypen der Serverantwort an.
  // Mögliche Werte sind: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // (Nur im Browser auch 'blob')
  responseType: 'json', // Standardwert

  // `responseEncoding` (Nur in nodejs) gibt das Encoding das zur Dekodierung der Antwort verwendet werden soll an
  responseEncoding: 'utf8', // Standardwert

  // `xsrfCookieName` Name des Cookies zur Nutzung für XSRF-tokens
  xsrfCookieName: 'XSRF-TOKEN', // Standardwert

  // `xsrfHeaderName` Name des Headers der das XSRF-token trägt
  xsrfHeaderName: 'X-XSRF-TOKEN', // Standardwert

  // `onUploadProgress` erlaubt die Behandlung von Progress-Events im Browser
  // Nur im Browser
  onUploadProgress: function (progressEvent) {
    // Progress-Event verarbeiten
  },

  // `onDownloadProgress` erlaubt die Behandlung von Progress-Events im Browser
  // Nur im Browser
  onDownloadProgress: function (progressEvent) {
    /// Progress-Event verarbeiten
  },

  // `maxContentLength` definiert die maximale Größe in Bytes der Antwort (nur in Nodejs)
  maxContentLength: 2000,

  // `maxBodyLength` definiert die maximale Größe in Bytes des Anfragenkörpers (nur in Nodejs)
  maxBodyLength: 2000,

  // `validateStatus` Gibt, basierend auf dem Status-Code an, ob die Anfrage erfolgreich war.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // Standardwert
  },

  // Maximale Menge an Redirects denen gefolgt wird
  maxRedirects: 5, // default

  // Pfad zu einem UNIX-Socket, der in Nodejs verwendet werden soll
  socketPath: null, // default

  // Eigene Agenten zur Verarbeitung von http und https. Nur in nodejs
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` definiert Hostname, Port, und Protokoll des Proxy-Servers.
  // Ein Proxy kann auch durch das Setzen der Umgebungsvariablen
  // http_proxy und https_proxy konfiguriert werden.
  // `auth` gibt die HTTP basic auth credentials des Proxy-Servers an.
  // Dies wird in den `Proxy-Authorization` Header geschrieben.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // Siehe https://axios-http.com/de/docs/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // Nur in nodejs (kann in XHR nicht deaktiviert werden) gibt dieser Wert an ob
  // die Daten automatisch dekomprimiert werden sollen
  decompress: true // default
}
```
