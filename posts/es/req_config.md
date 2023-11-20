---
title: "Configuración de Petición"
prev_title: "La Instancia Axios"
prev_link: "/es/docs/instance"
next_title: "Esquema de Respuesta"
next_link: "/es/docs/res_schema"
---

Estas son las opciones de configuración disponibles para hacer peticiones. Sólo el `url` es requerido. Las peticiones serán por defecto `GET` si `method` no es especificado.

```js
{
  // `url` es la URL del servidor que será usada para la petición
  url: '/user',

  // `method` es el método a ser utilizado al hacer la petición
  method: 'get', // por defecto

  // `baseURL` será precedido a `url` a menos que `url` sea absoluto.
  // Es conveniente establecer un `baseURL` en una instancia de axios para pasar URLs relativas
  // a los métodos de ésta
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` permite cambios al data de la petición antes de ser enviado al servidor
  // Esto es sólo aplicable para los métodos de petición 'PUT', 'POST', 'PATCH' y 'DELETE'
  // La última función de la colección (array) debe retornar un string o una instancia de Buffer, ArrayBuffer,
  // FormData o Stream
  // Debes modificar el objeto headers.
  transformRequest: [function (data, headers) {
    // Haz lo que quieras para transformar data

    return data;
  }],

  // `transformResponse` permite que se realicen cambios en los datos de respuesta antes
  //  que pasen a then/catch
  transformResponse: [function (data) {
    // Haz lo que quieras para transformar data

    return data;
  }],

  // `headers` son las cabeceras personalizadas a ser enviadas
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` son los parámetros de la URL a ser enviados con la petición
  // Deben ser un objeto plano o un objeto URLSearchParams
  // NOTA: parámetros que son null o undefined no son renderizados en la URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` es una función opcional a cargo de serializar `params`
  // (por ejemplo, https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` es el data a ser enviado como el cuerpo (body) de la petición
  // Sólo aplicable a los métodos de petición 'PUT', 'POST', 'DELETE , y 'PATCH'
  // Cuando no se establece `transformRequest`, debe ser uno de los siguientes tipos:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Sólo Navegador: FormData, File, Blob
  // - Sólo en Node: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // sintaxis alternativa para enviar data al cuerpo
  // del método post
  // sólo el valor es enviando, no la llave
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` especifica el número de milisegundos antes que la petición expire.
  // Si la petición toma más tiempo que `timeout`, ésta será abortada.
  timeout: 1000, // `0` es el valor por defecto (sin timeout)

  // `withCredentials` indica si las solicitudes de acceso entre sitios (cross-site)
  // deben realizarse utilizando credenciales
  withCredentials: false, // por defecto

  // `adapter` permite la manipulación personalizada de peticiones, facilitando la realización de pruebas y testeos.
  // Retorna una promesa y provee una respuesta válida (ver lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indica que HTTP Basic auth debe ser usado y provee credenciales.
  // Esto establecerá una cabecera `Authorization`, sobrescribiendo cualquier cabecera personalizada
  // existente `Authorization`, previamente establecida a través de `headers`.
  // Ten en cuenta que sólo HTTP Basic auth es configurable a través de este parámetro.
  // Para tokens Bearer y otros, usa la cabecera personalizada `Authorization` en su lugar.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indica el tipo de data con el que el servidor responderá
  // las opciones son: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // sólo en el navegador: 'blob'
  responseType: 'json', // por defecto

  // `responseEncoding` indica la codificación a usar para decodificar las respuestas (sólo en Node.js)
  // Nota: Ignorado para `responseType` de 'stream' o peticiones del lado del cliente
  responseEncoding: 'utf8', // por defecto

  // `xsrfCookieName` es el nombre de la cookie a usar como valor para el token xsrf
  xsrfCookieName: 'XSRF-TOKEN', // por defecto

  // `xsrfHeaderName` es el nombre de la cabecera http que lleva el valor del token xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // por defecto

  // `onUploadProgress` permite la manipulación del evento progress para subidas
  // sólo en el navegador
  onUploadProgress: function (progressEvent) {
    // Haz lo que quieras con el evento nativo progress
  },

  // `onDownloadProgress` permite la manipulación del evento progress para descargas
  // sólo en el navegador
  onDownloadProgress: function (progressEvent) {
    // Haz lo que quieras con el evento nativo progress
  },

  // `maxContentLength` define el tamaño máximo del contenido de la respuesta http en bytes permitidos en node.js
  maxContentLength: 2000,

  // `maxBodyLength` (opción solo para Node) define el tamaño máximo permitido del contenido de la petición http en bytes
  maxBodyLength: 2000,

  // `validateStatus` define si resolver o rechazar la promesa para un dado
  // código de respuesta HTTP. Si `validateStatus` retorna `true` (o si se establece a `null`
  // o `undefined`), la promesa será resuelta; de otra manera, la promesa será
  // rechazada.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // defecto
  },

  // `maxRedirects` define el número máximo de redirecciones a seguir en node.js.
  // Si se establece en 0, no habrá redirecciones.
  maxRedirects: 5, // por defecto

  // `socketPath` define un Socket UNIX a ser utilizado en node.js.
  // por ejemplo, '/var/run/docker.sock' para enviar peticiones al daemon de docker (docker daemon).
  // Sólo `socketPath` o `proxy` puede ser especificado.
  // Si ambos son especificados, `socketPath` es utilizado.
  socketPath: null, // por defecto

  // `httpAgent` y `httpsAgent` definen un agente personalizado a ser usado al realizar una petición
  // http y https, respectivamente, en node.js. Esto permite añadir opciones como
  // `keepAlive` que no están habilitadas por defecto.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` define hostname, puerto, y protocolo del servidor proxy.
  // También puedes definir tu proxy usando las variables de entorno convencionales
  // `http_proxy` y `https_proxy`. Si estás usando variables de entorno
  // para tu configuración proxy, también puedes definir una variable de entorno `no_proxy`
  // como una lista separada por comas de dominios que no deben ser tomados en cuenta (proxied).
  // Usa `false` para desabilitar los proxies, ignorando las variables de entorno.
  // `auth` indica que HTTP Basic auth debe ser usado para conectar al proxy, y
  // provee credenciales.
  // Esto establecerá una cabecera `Proxy-Authorization`, sobrescribiendo cualquier cabecera personalizada
  // existente `Proxy-Authorization` establecidas por `headers`.
  // Si el servidor proxy usa HTTPS, entonces debes establecer el protocolo a `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` especifica un token de cancelación que puede ser usado para cancelar una petición
  // (ver sección sobre Cancelacion para mayor detalles)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indica si el cuerpo de la respuesta debe ser descomprimido
  // automáticamente. Si se establece en `true` también eliminará la cabecera 'content-encoding'
  // de los objetos de respuesta de todas las respuestas descomprimidas
  // - sólo en Node (XHR no puede apagar la descompresión)
  decompress: true // por defecto

}
```
