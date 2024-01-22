---
title: 'Configuración de Petición'
prev_title: 'La Instancia Axios'
prev_link: '/es/docs/instance'
next_title: 'Esquema de Respuesta'
next_link: '/es/docs/res_schema'
---


Estas son las opciones de configuración disponibles para hacer peticiones. Solo el `url` es requerido. Las peticiones serán por defecto `GET` si `method` no es especificado.

```js
{
  // `url` es la URL del servidor que sera usada para la petición
  url: '/user',

  // `method` es el método a ser utilizado al hacer la petición 
  method: 'get', // defecto

  // `baseURL` será precedido a `url` a no ser que `url` sea absoluto.
  // Es conveniente establecer un `baseURL` en una instancia de axios para pasar URLs relativas
  // a los métodos de esta
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` permite cambios al data de la petición antes de ser enviado al servidor
  // Esto es solo aplicable para los métodos de petición 'PUT', 'POST', 'PATCH' y 'DELETE'
  // La última función en el arreglo debe regresar un string o una instancia de Buffer, ArrayBuffer,
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

  // `paramsSerializer` es una configuración opcional que le permite personalizar la serialización de `params`.
  paramsSerializer: {

    //Función de codificador personalizada que envía pares clave/valor de forma iterativa.
    encode?: (param: string): string => { /* Realice operaciones personalizadas aquí y devuelva una cadena transformada */ }, 
    
    // Función de serializador personalizado para todo el parámetro. Permite al usuario imitar el comportamiento anterior a 1.x.
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ), 
    
    //Configuración para formatear índices de matriz en los parámetros.
    indexes: false // Tres opciones disponibles: 
    // (1) indexes: null (no conduce a corchetes), 
    // (2) (default) indexes: false (conduce a corchetes vacíos),
    // (3) indexes: true (conduce a corchetes con índices).    
  },

  // `data` es el data a ser enviado como el cuerpo de la petición
  // Solo aplicable a los métodos de petición 'PUT', 'POST', 'DELETE , y 'PATCH'
  // Cuando no se establece `transformRequest`, debe ser uno de los siguientes tipos:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Solo Navegador: FormData, File, Blob
  // - Solo en Node: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // sintaxis alternativa para enviar data al cuerpo
  // del método post
  // solo el valor es enviando, no la llave
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` especifica el número de milisegundos antes que la petición expire.
  // Si la petición toma más tiempo que `timeout`, esta será abortada.
  timeout: 1000, // `0` es el valor por defecto (no timeout)

  // `withCredentials` indica cuando o no se pueden hacer peticiones cross-site Access-Control 
  // usando credenciales
  withCredentials: false, // defecto

  // `adapter` permite la manipulación personalizada de peticiones, haciendo las pruebas más fácil.
  // Retorna una promesa y provee una respuesta valida (ver lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indica que HTTP Basic auth debe ser usado, y proveer credenciales.
  // Esto establecerá una cabecera `Authorization`, sobrescribiendo cualquier cabecera personalizada
  // existente `Authorization`, previamente a través de `headers`.
  // Ten encuenta que solo HTTP Basic auth es configurable a través de este parámetro.
  // Para tokens Bearer y otros, usa la cabecera personalizada `Authorization` en su lugar.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indica el tipo de data con el que el servidor responderá
  // las opciones son: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // solo en el navegador: 'blob'
  responseType: 'json', // defecto
  
  // `responseEncoding` indica la codificación a usar para decodificar las respuestas (solo en Node.js)
  // Nota: Ignorado para `responseType` de 'stream' o peticiones del lado del cliente
  responseEncoding: 'utf8', // defecto

  // `xsrfCookieName` es el nombre de la cookie a usar como valor para el token xsrf
  xsrfCookieName: 'XSRF-TOKEN', // defecto

  // `xsrfHeaderName` es el nombre de la cabecera http que lleva el valor del token xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // defecto

  // `onUploadProgress` permite la manipulación del evento progress para subidas
  // solo en el navegador
  onUploadProgress: function (progressEvent) {
    // Haz lo que quieras con el evento nativo progress
  },

  // `onDownloadProgress` permite la manipulación del evento progress para descargars
  // solo en el navegador
  onDownloadProgress: function (progressEvent) {
    // Haz lo que quieras con el evento nativo progress
  },

  // `maxContentLength` define el tamaño máximo del contenido de la respuesta http en bytes permitidos en node.js
  maxContentLength: 2000,

  // `maxBodyLength` (opcion solo para Node) define el tamaño máximo permitido del contenido de la petición http en bytes
  maxBodyLength: 2000,

  // `validateStatus` define si resolver o rechazar la promesa para un dado
  // codigo de respuesta HTTP. Si `validateStatus` retorna `true` (o si se establece a `null`
  // o `undefined`), la promesa será resuelta; de otra manera, la promesa será
  // rechazada.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // defecto
  },

  // `maxRedirects` define el número máximo de redirecciones a seguir en node.js.
  // Si se establece en 0, no habra redirecciones.
  maxRedirects: 5, // defecto

  // `socketPath` define un Socket UNIX a ser utilizado en node.js.
  // e.g. '/var/run/docker.sock' para enviar peticiones al demonio de docker (docker daemon).
  // Solo `socketPath` o `proxy` puede ser especificado.
  // Si ambos son especificados, `socketPath` es utilizado.
  socketPath: null, // defecto

  // `httpAgent` y `httpsAgent` definen un agente personalizado a ser usado al realizar una petición
  // http y https, respectivamente, en node.js. Esto permite añadir opciones como
  // `keepAlive` que no estan habilitadas por defecto.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` define hostname, puerto, y protocolo del servidor proxy.
  // También puedes definir tu proxy usando las variables de entorno convencionales 
  // `http_proxy` y `https_proxy`. Si estas usando variables de entorno
  // para tu configuración proxy, también puedes definir una variable de entorno `no_proxy`
  // como una lista separada por comas de dominios que no deben ser tomados en cuenta (proxied).
  // Usa `false` para desabilitar los proxies, ignorando las variables de entorno.
  // `auth` indica que HTTP Basic auth debe ser usado para conectar al proxy, y
  // proveer credenciales.
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

  // `decompress` indica sí o no el cuerpo de la respuesta debe ser descomprimido 
  // automáticamente. Si se establece en `true` también removerá la cabecera 'content-encoding'  
  // de los objetos de respuesta de todas las respuestas descomprimidas
  // - solo en Node (XHR no puede apagar la descompresión)
  decompress: true // defecto

}
```
