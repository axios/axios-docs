---
title: 'Configurações de requisição'
prev_title: 'Instância Axios'
prev_link: '/docs/ptBR/instance'
next_title: 'Esquema de Resposta'
next_link: '/docs/ptBR/res_schema'
---

Estas são as configurações opcionais disponiveis para fazer uma requisição. Apenas a `url` é obrigatória. Requisições serão setadas como padrão para `GET` se nenhum `method` for especificado.
<!--These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.-->

```js
{
  // `url` é o servidor quee será usada para a requisição
  // `url` is the server URL that will be used for the request
  url: '/user',

  // `method` é o método de requisição para ser usada quando fazendo uma requisição
  // `method` is the request method to be used when making the request
  method: 'get', // padrão

  // `baseURL` será pre-adicionada na url a menos que a `url` seja absoluta.
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // Pode ser conveniente definir uma `baseURL` para uma instância do axios para passar URLs relativas
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // para o método da instância.
  // to methods of that instance.
  baseURL: 'https://algum-dominio.com/api/',
  
  // `transformRequest` permite mudar os dados da requisição antes da mesma ser enviada para o servidor
  // `transformRequest` allows changes to the request data before it is sent to the server
  // Isto é aplicado apenas para requisições com os métodos 'PUT', 'POST', 'PATCH' e 'DELETE'
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // A última função no array deve retornar uma string ou o Buffer da instância, ArrayBuffer,
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData ou Stream
  // FormData or Stream
  // Você pode modificar o cabeçalho do objeto
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Faz o que quiser para transformar o dado
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` permite mudar os dados da responsta antes de ser passado para o then/catch
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Faça o que quiser para transformar os dados
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` são cabeçalhos customizaveis para ser enviado
  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` são os parametros da URL para ser enviado junto com a requisição
  // `params` are the URL parameters to be sent with the request
  // Deve sempre ser um objeto ou um objeto de URLSearchParams
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `paramsSerializer` é uma função opcional que comanda a serialização dos `params`
  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` são os dados a serem enviados no corpo da requisição
  // `data` is the data to be sent as the request body
  // Apenas aplicado em requisições com método 'PUT', 'POTS', 'DELETE' e 'PATCH'
  // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
  // Quando nenhum `transformRequest` é definido, deve ser um dos tipos a seguir: 
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, objetos simples, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Navegador apenas: FormData, File, Blob
  // - Browser only: FormData, File, Blob
  // - Apenas no Node: Stream, Buffer
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // Sintaxe alternativa para enviar dados no corpo
  // syntax alternative to send data into the body
  // método post
  // method post
  // apenas o valor é enviado, não a chave
  // only the value is sent, not the key
  data: 'Country=Brasil&City=Guarapari',

  // `timeout` expecifica o número em milisegundos antes do tempo da requisição acabar.
  // `timeout` specifies the number of milliseconds before the request times out.
  // Se a requisição levar um tempo maior do que o `timeout`, a requisição será abortada.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // o valor padrão do timeout é de `0` (no timeout)

  // `withCredentials` indica se as solicitações de controle de acesso entre sites
  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // deve ser feito usando credenciais
  // should be made using credentials
  withCredentials: false, // padrão

  // `adapter` permite o tratamento personalizado de solicitações, o que torna o teste mais fácil. 
  // `adapter` allows custom handling of requests which makes testing easier.
  // Retorna uma promessa e fornece uma resposta valida (veja lib/adapters/README.md).
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indica que a autenticação básica do HTTP deve ser usada e fornece credenciais.
  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // Isso vai definir um cabeçalho de `Authorization`, sobrescrevendo uma já existente
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` cabeçalhos personalizados que você definiu usando `headers`.
  // `Authorization` custom headers you have set using `headers`.
  // Por favor, note que apenas autenticação HTTP Basic é configuravel por meio deste parâmetro
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // Para tokens Bearer e outros, use o cabeçalho personalizado de `Authorization` 
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indica o tipo dos dados que o servidor irá responder
  // `responseType` indicates the type of data that the server will respond with
  // as opções são: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // navegador apenas: 'blob'
  // browser only: 'blob'
  responseType: 'json', // padrão

  // `responseEncoding` indica a codificação a ser usada para respostas de decodificação (somente Node.js)
  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Nota: Ignorado para `responseType` de 'stream' ou solicitações do lado do cliente
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // padrão

  // `xsrfCookieName` é o nome do cookie para usar pra um valor o token xsrf
  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // padrão

  // `xsrfHeaderName` é o nome do cabeçalho do http que carrega o valor do token xsrf
  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // padrão

  // `onUploadProgress` permite manusear o progresso do evento de upload
  // `onUploadProgress` allows handling of progress events for uploads
  // apenas no navegador
  // browser only
  onUploadProgress: function (progressEvent) {
    // Faça o que quiser com o progresso nativo do evento
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` permite manusear o progresso do evento para downloads
  // `onDownloadProgress` allows handling of progress events for downloads
  // apenas no navegador
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Faça o que quiser com o progresso nativo do evento
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` definen o tamanho máximo do conteúdo da resposta http em bytes permitido no node.js
  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Opção apenas para o Node) define o tamanho máximo permitido do conteúdo http em bytes
  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,

  // `validateStatus` define se deve resolver ou rejeitar a promessa de um determinado 
  // código de status de resposta HTTP. Se `validateStatus` retornar `true` (ou for definido como `null` 
  // ou `undefined`), a promessa será resolvida; caso contrário, a promessa será
  // rejeitada
  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // padrão
  },

  // `maxRedirects` define um número máximo de redirecionamento para seguir em node.js
  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // Se definido como 0, nenhum redirecionamento será permitido
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // padrão
  
  // `socketPath` define um UNIX Socket para ser usado em node.js.
  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' para enviar requisições para o docker daemon.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Apenas `socketPath` ou `proxy` podem ser especificado.
  // Only either `socketPath` or `proxy` can be specified.
  // Caso ambos seja especificado, `socketPath` será usado.
  // If both are specified, `socketPath` is used.
  socketPath: null, // padrão
  
  // `httpAgent` e `httpsAgent` define um agente personalizado para ser usando quando performando http
  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // e https requisições, no node.js. Isso permite opções a serem adicionadas como
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` que não está habilidado por padrão.
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` define o hostname, port e protocolo do proxy do servidor.
  // `proxy` defines the hostname, port, and protocol of the proxy server.
  // Você pode defirnir também seu próprio proxy usando `http_proxy` e
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proby` variáveis de ambiente. SE você estiver usando variáveis de ambiente
  // `https_proxy` environment variables. If you are using environment variables
  // para a configuração do seu proxy, você também pode definir uma variáveil de ambiente `no_proxy` 
  // for your proxy configuration, you can also define a `no_proxy` environment
  // como uma lista separada por vírgulas de domínios que não devem ser proxy.
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` para desabilidar proxies, ignorando as variáveis de ambiente.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indica que o HTTP Basic auth deve ser usado para conectar no proxy e
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // fornecer credenciais.
  // supplies credentials.
  // Isso definirá um cabeçalho `Proxy-Authorization`, sobrescrevendo qualquer
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` existente que você definiu usando `headres`.
  // `Proxy-Authorization` custom headers you have set using `headers`.
  // Se o proxy serve usar HTTPS, então você deve definir o protocolo para `https`.
  // If the proxy server uses HTTPS, then you must set the protocol to `https`. 
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` especifica um token de cancelamento que pode ser usado para cancelar a requisição
  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (veja a seção de Cancelamento abaixo para mais detalhes)
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indicar se o corpo da resposta deve ou não ser descomprimido
  // `decompress` indicates whether or not the response body should be decompressed 
  // automaticamente. Se definido como `true` irá remover também o cabeçalho `content-encoding`
  // automatically. If set to `true` will also remove the 'content-encoding' header 
  // de todos os objetos resposta
  // from the responses objects of all decompressed responses
  // - Apenas no Node (XHR não pode desligar a descompressão)
  // - Node only (XHR cannot turn off decompression)
  decompress: true // padrão

}
```