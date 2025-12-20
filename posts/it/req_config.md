---
title: "Configurazione della Richiesta"
prev_title: "L'Istanza Axios"
prev_link: "/docs/instance"
next_title: "Schema della Risposta"
next_link: "/docs/res_schema"
---

Queste sono le opzioni di configurazione disponibili per effettuare le richieste. Solo il campo `url` è obbligatorio. Le richieste verranno impostate di default a `GET` se non è specificato il campo `method`.

```js
{
  // `url` è l'URL del server che verrà utilizzato per la richiesta
  url: '/user',

  // `method` è il metodo di richiesta da utilizzare quando si effettua la richiesta
  method: 'get', // default

  // `baseURL` verrà posto prima di `url` a meno che l'indirizzo `url` non sia assoluto.
  // Può tornare utile impostare il `baseURL` di un'istanza di axios
  // per poi passare URL relativi ai metodi di quell'istanza.
  baseURL: 'https://some-domain.com/api',

  // `allowAbsoluteUrls` determina se gli URL assoluti sovrascriveranno il `baseUrl` configurato.
  // Quando impostato a true (valore predefinito), i valori assoluti per il campo `url` sovrascriverranno il campo `baseUrl`.
  // Quando impostato a false, i valori assoluti per il campo `url` verranno sempre preceduti dal `baseUrl`.
  allowAbsoluteUrls: true,

  // `transformRequest` permette di modificare i dati della richiesta prima che venga inviata al server.
  // Questo parametro viene applicato solo ai metodi di richiesta 'PUT', 'POST', 'PATCH' e 'DELETE'
  // L'ultima funzione nell'array deve restituire una stringa oppure un'istanza di Buffer, ArrayBuffer, FormData o Stream.
  // Puoi modificare l'oggetto degli header.
  transformRequest: [function (data, headers) {
    // Fai quello che vuoi per trasformare i dati

    return data;
  }],

  // `transformResponse` permette di modificare i dati della risposta prima che questi passino per il then/catch
  transformResponse: [function (data) {
    // Fai quello che vuoi per trasformare i dati

    return data;
  }],

  // `headers` sono gli header personalizzati che puoi inviare
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` sono i parametri URL che vengono inviati con la richiesta
  // Deve essere un plain object oppure un oggetto URLSearchParams
  // NOTA: i parametri con valore null o undefined non vengono mostrati nell'URL.
  params: {
    ID: 12345
  },

   // `paramsSerializer` è una configurazione opzionale che ha il compito di serializzare `params`
  paramsSerializer: {
    encode?: (param: string): string => { /* Qui puoi eseguire logiche personalizzate e poi restituire la stringa con la trasformazione */ }, // funzione di codifica personalizzata; invia le coppie chiave/valore in modo iterativo
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ), // per imitare il comportamento pre 1.x e gestire tu la serializzazione dei parametri
    indexes: false // formato degli indici dell'array (null - senza parentesi, false (predefinito) - parentesi vuote, true - parentesi con gli indici)
  },

  // `data` sono i dati da inviare come corpo della richiesta
  // Questo parametro viene applicato solo ai metodi di richiesta 'PUT', 'POST', 'PATCH' e 'DELETE'.
  // Se non viene specificato `transformRequest`, deve essere di uno dei seguenti tipi:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Solo per i Browser: FormData, File, Blob
  // - Solo per Node: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // La sintassi alternativa per inviare i dati nel corpo di una richiesta
  // metodo post
  // viene inviato solo il valore, non la chiave
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` definisce il numero di millisecondi prima che la richiesta vada in timeout.
  // Se la richiesta richiede più tempo del valore definito in `timeout`, la richiesta verrà terminata.
  timeout: 1000, // il valore predefinito è `0` (nessun timeout)

  // `withCredentials` indica se le richieste Access-Control cross-site debbano essere fatte
  // utilizzando le credenziali
  withCredentials: false, // predefinito

  // `adapter` permette di gestire manualmente le richieste per rendere il testing più facile.
  // Restituisce una promise e fornisce una risposta valida (vedi lib/adapters/README.md)
  adapter: function (config) {
    /* ... */
  },

  // `auth` indica di utilizzare l'autorizzazione HTTP Base, fornendo le credenziali.
  // Verrà messo quindi un header `Authorization`, sovrascrivendo qualsiasi
  // header `Authorization` già presente che hai impostato nel campo `headers`.
  // Fai attenzione che solo l'autorizzazione HTTP Base è configurabile attraverso questo parametro.
  // Per i token di tipo Bearer e simili, usa degli header personalizzati per gestire l'`Autorizzazione`;
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indica il tipo di dato con cui il server potrà rispondere
  // Le opzioni disponibili sono: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   solo per il browser: 'blob'
  responseType: 'json', // predefinito

  // `responseEncoding` indica la codifica da utilizzare per decodificare le risposte (solo per Node.js)
  // Nota: Viene ignorato per `responseType` di tipo 'stream' o per richieste lato client.
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` è il nome del cookie da utilizzare come valore per i token xsrf
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` è il nome dell'header HTTP che porta il valore del token xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  //  `onUploadProgress permette di gestire gli eventi di progressione dei caricamenti
  // solo per i browser
  onUploadProgress: function (progressEvent) {
    // Gestisci l'evento di progressione nativo
  },

  // `onDownloadProgress` permette di gestire gli eventi di progressione dei downloads
  // solo per i browser
  onDownloadProgress: function (progressEvent) {
    // Gestisci l'evento di progressione nativo
  },

  // `maxContentLength` definisce la dimensione massima permessa del contenuto della risposta HTTP, in bytes.
  maxContentLength: 2000,

  // `maxBodyLength` (solo per Node) definisce la dimensione massima permessa del contenuto della richiesta HTTP, in bytes.
  maxBodyLength: 2000,

  // `validateStatus` definisce se risolvere o rifiutare la promise per un codice di stato specifico della risposta HTTP.
  // Se `validateStatus` restituisce `true` (oppure se impostato a `null` o `undefined`),
  // la promise verrà risolta; altrimenti la promise verrà rifiutata.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // predefinito
  },

  // `maxRedirects` definisce il numero massimo di reindirizzamenti da seguire in node.js.
  // Se impostato a 0, non verrà seguito nessun reindirizzamento.
  maxRedirects: 21, // predefinito

  // `beforeRedirect` definisce una funzione che verrà chiamata prima del reindirizzamento.
  // Usala per regolare le opzioni della richiesta al momento del reindirizzamento,
  // ispezionare l'ultimo header della risposta,
  // oppure per annullare la richiesta lanciando un errore.
  // Se maxRedirects è impostato a 0, `beforeRedirect` non verrà utilizzato.
  beforeRedirect: (options, { headers }) => {
   if (options.hostname === "example.com") {
     options.auth = "user:password";
   }
  },

  // `socketPath` definisce il percorso del Socket UNIX da usare in node.js.
  // esempio '/var/run/docker.sock' per inviare richieste al daemon di docker.
  // Puoi specificare solo `socketPath` oppure `proxy`.
  // Se vengono definiti entrambi, verrà utilizzato `socketPath`.
  socketPath: null, // predefinito

  // `transport` determina il metodo di trasporto che verrà utilizzato per effettuare le richieste.
  // Se definito, verrà scelto quello. Altrimenti, se `maxRedirects` è uguale a 0, verrà utilizzata di default la libreria `http` o `https`,
  // in base al tipo di protocollo definito nel campo `protocol`.
  // Altrimenti, verrà utilizzata la libreria `httpFollow` o `httpsFollow`, sempre in base al tipo di protocollo che può gestire i reindirizzamenti.
  transport: undefined, // default

  // `httpAgent` e `httpsAgent` definiscono un agent personalizzato da utilizzare quando si effettuano
  // richieste HTTP e HTTPS, rispettivamente, in node.js. Questo permette di aggiungere
  // opzioni come `keepAlive` che non sono abilitate di default prima della versione v19.0.0 di Node.js.
  // In seguito alla versione v19.0.0, non serve più modificare l'agent per abilitare `keepAlive`, in quanto
  // `http.globalAgent` ha già `keepAlive` abilitato di default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` definisce l'hostname, la porta e il protocollo del server proxy.
  // Puoi anche definire il tuo proxy utilizzando le variabili d'ambiente
  // convenzionali `http_proxy` e `https_proxy`.
  // Se decidi di utilizzare le variabili d'ambiente per la configurazione del proxy,
  // puoi anche definire una variabile d'ambiente chiamata `no_proxy` come una lista separata da virgola
  // dei domini che non devono essere soggetti a proxy.
  // Utilizza `false` per disabilitare i proxy, ignorando le variabili d'ambiente definite.
  // Disabilita se stai fornendo httpAgent/httpsAgent personalizzati per gestire il proxy delle richieste.
  // `auth` indica che deve essere utilizzata l'autorizzazione HTTP Base per la connessione al proxy,
  // fornendo le credenziali.
  // Questo aggiungerà un header `Proxy-Authorization`, andando a sovrascrivere
  // qualsiasi header `Proxy-Authorization` già esistente che hai impostato tramite il campo `headers`.
  // Se il server proxy utilizza HTTPS, devi impostare il protocollo a `https`.

  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // Puoi utilizzare `signal` e istanze di AbortController per annullare la richiesta
  signal: new AbortController().signal,

  // (Deprecata) `cancelToken` specifica un token di cancellazione che può essere usato per annullare la richiesta
  // (dai un'occhiata alla sezione Annullamento per ulteriori dettagli)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // Un modo alternativo per annullare richieste Axios usando un AbortController
  signal: new AbortController().signal,

  // `decompress` indica se il corpo della risposta deve essere decompresso automaticamente.
  // Se impostato a `true`, rimuove anche l'header 'content-encoding' dagli oggetti delle risposte
  // di tutte le risposte decompresse.
  // - Solo per Node (XHR non può disabilitare la decompressione)
  decompress: true // default

  // `insecureHTTPParser` boolean.
  // Indica se usare il parser HTTP non sicuro che accetta header HTTP invalidi.
  // Questo permette interoperabilità con implementazioni HTTP non conformi.
  // Tuttavia, non è raccomandato l'uso del parser non sicuro.
  // Vedi le opzioni https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_request_url_options_callback
  // Vedi anche https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/#strict-http-header-parsing-none
  insecureHTTPParser: undefined // default

  // Opzioni transizionali per la retro-compatibilità. Potrebbe essere rimosso nelle future versioni.
  transitional: {
    // Modalità silenziosa di parsing JSON
    // `true`  – ignora gli errori di parsing JSON e imposta response.data a null se il parsing fallisce (vecchio comportamento)
    // `false` – lancia un SyntaxError se il parsing del JSON fallisce (Nota: responseType deve essere impostato a 'json')
    silentJSONParsing: true, // default value for the current Axios version

    // try to parse the response string as JSON even if `responseType` is not 'json'
    forcedJSONParsing: true,

    // throw ETIMEDOUT error instead of generic ECONNABORTED on request timeouts
    clarifyTimeoutError: false,
  },

  env: {
    // La classe FormData da utilizzare automaticamente per serializzare il payload in un oggetto FormData.
    FormData: window?.FormData || global?.FormData
  },

  formSerializer: {
    visitor: (value, key, path, helpers) => {}; // funzione visitor personalizzata per serializzare i valori del form
    dots: boolean; // Usa la notazione a punti invece del formato con le parentesi
    metaTokens: boolean; // Conserva terminazioni speciali come {} nella chiave del parametro
    indexes: boolean; // formato degli indici dell'array null - senza parentesi, false - parentesi vuote, true - parentesi con gli indici
  },

  // Adapter http (node.js)
  maxRate: [
    100 * 1024, // 100KB/s limite di upload,
    100 * 1024  // 100KB/s limite di download
  ]
}
```
