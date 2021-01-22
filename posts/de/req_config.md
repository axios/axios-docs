---
title: 'Anfragenkonfigurationsschema'
prev_title: 'Die Axios-Instanz'
prev_link: '/docs/de/instance'
next_title: 'Antwortenschema'
next_link: '/docs/de/res_schema'
---

Dies sind die verfügbaren Konfigurationsoptionen für HTTP-Anfragen. Nur das feld `url` wird benötigt. Anfragen weden standardmäßig die `GET`-Methode verwenden wenn die option `method` ausgelassen wird.

```js
{
  // `url` ist die Server-URL Die für die anfrage verwendet wird.
  url: '/user',

  // `method` ist die zu verwendende HTTP-Methode
  method: 'get', // Standardwert

  // `baseURL` wird and `url` vorangestellt wenn `url` nicht absolut ist.
  // Dies ist speziell bei Axios-Instanzen nützlich wenn alle Anfragen der
  // Instanz an die selbe Domäne geschickt werden sollen.
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` erlaubt Anderungen an den Anfragendaten bevor sie zum
  // Server geschickt werden. Dies funktioniert nur bei den Methoden 'PUT',
  // 'POST', 'PATCH' und 'DELETE'. Die letzte Funktion in der liste muss einen
  // String,  Buffer, ArrayBuffer, FormData oder Stream zurückgeben.
  // Das objekt `headers` darf bearbeitet werden.
  transformRequest: [function (data, headers) {
    // Tun sie was auch immer sie wollen um die daten zu transformieren

    return data;
  }],

  // `transformResponse` erlaubt Anderungen an den Zurückgegebenen daten bevor
  // diese an `then` bzw. `catch` weitergeben werden.
  transformResponse: [function (data) {
    // Tun sie was auch immer sie wollen um die daten zu transformieren

    return data;
  }],

  // Eigene Headers
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` sind die URL-Parameter die in der Anfrage geschickt weden. Das feld
  // muss entweder ein einfaches Object oder eine Instanz der Klasse URLSearchParams
  // beinhalten.
  params: {
    ID: 12345
  },

  // Mit `paramsSerializer` kann optioanl die Funktion zur serialisation des
  // feldes `params` manuell überschrieben werden.
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` sind die Daten die im Körper der Anfrage geschickt werden sollen.
  // Funktioniert nur bei 'PUT', 'POST', 'DELETE' und 'PATCH'
  // Wenn transformRequest nicht gesetzt ist muss das feld einen folgender datentypen besitzen:
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

  // `withCredentials` Gibt an ob Cross-Site-Access-Control-Anfragen mit Credentials
  // ausgeführt werden sollen
  withCredentials: false, // Standardwert

  // `adapter` erlaubt einfacheres testen, siehe https://github.com/axios/axios/blob/master/lib/adapters/README.md
  adapter: function (config) {
    /* ... */
  },

  // `auth` HTTP Basic Auth
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` Gibt den datentypen der Serverantwort an.
  // Optionen sind: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // (Nur im Browser auch 'blob')
  responseType: 'json', // Standardwert

  // `responseEncoding` (Nur in nodejs) gibt das Encoding das zur Dekodierung der Antwort verwendet werden soll
  responseEncoding: 'utf8', // Standartwert

  // `xsrfCookieName` Name des Cookies zur nutzung für XSRF-tokens
  xsrfCookieName: 'XSRF-TOKEN', // Standardwert

  // `xsrfHeaderName` Name des Headers der das XSRF-token trägt
  xsrfHeaderName: 'X-XSRF-TOKEN', // Standardwert

  // `onUploadProgress` erlaubt die Behandlung von Progress-Events im browser
  // Nur im browser
  onUploadProgress: function (progressEvent) {
    // Progress-Event Verarbeiten
  },

  // `onDownloadProgress` erlaubt die Behandlung von Progress-Events im browser
  // Nur im browser
  onDownloadProgress: function (progressEvent) {
    /// Progress-Event Verarbeiten
  },

  // `maxContentLength` definiert die maximale Größe der Antwort (nur in Nodejs)
  maxContentLength: 2000,

  // `maxBodyLength` definiert die maximale Größe des Anfragenkörpers (nur in Nodejs)
  maxBodyLength: 2000,

  // `validateStatus` Gibt basiert auf den status-code an ob die anfrage erflogreich war
  validateStatus: function (status) {
    return status >= 200 && status < 300; // Standardwert
  },

  // Maximale menge an redirects denen gefolgt wird
  maxRedirects: 5, // default

  // Pfad zu einer UNIX-Socker die in Nodejs verwendet werden soll
  socketPath: null, // default

  // Eigene agenten zur verarbeitung von http und https. Nur in nodejs
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` definiert Hostname, Port, und Protokoll des Proxy-Servers.
  // Ein Proxy kann auch durch die Verwendung der Umgebungsvariablen
  // http_proxy und https_proxy Konfiguriert werden falls sie Umgebungsvariablen
  // verwenden. `auth` gibt die HTTP basic auth credentials des Proxy-Servers an.
  // Dies wird den `Proxy-Authorization` header überschreiben.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // Siehe https://axios-http.com/docs/de/cancellation
  cancelToken: new CancelToken(function (cancel) {
  }),

  // Nur in nodejs (kann in XHR nicht deaktiviert werden) gibt dieser wert an ob
  // die daten automatisch dekomprimiert werden sollen
  decompress: true // default
}
```