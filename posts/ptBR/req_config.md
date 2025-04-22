---
title: "Configurações de requisição"
prev_title: "Instância Axios"
prev_link: "/ptBR/docs/instance"
next_title: "Esquema de Resposta"
next_link: "/ptBR/docs/res_schema"
---


Estas são as configurações opcionais disponíveis para fazer uma requisição. Apenas a `url` é obrigatória. Requisições serão setadas como padrão para `GET` se nenhum `method` for especificado.

```js
{
  // `url` é a URL do servidor que será usada na requisição
  url: '/user',

  // `method` é o método a ser usado na requisição
  method: 'get', // padrão

  // `baseURL` será adicionada antes da `url`, a menos que a `url` seja absoluta.
  // Pode ser conveniente definir uma `baseURL` para uma instância do axios para que possa passar URLs relativas
  // para os método dessa instância.
  baseURL: 'https://some-domain.com/api/',

  // `allowAbsoluteUrls` define se URLs absolutas irão sobrescrever a `baseUrl` ou não.
  // Se definido como true (padrão), valores absolutos na `url` irão sobrescrever `baseUrl`.
  // Se definido como false, valores absolutos na `url` sempre serão adicionados à `baseUrl`.
  allowAbsoluteUrls: true,

  // `transformRequest` permite mudar os dados da requisição antes da mesma ser enviada para o servidor
  // Isto é aplicado apenas para requisições com os métodos 'PUT', 'POST', 'PATCH' e 'DELETE'
  // A última função no array deve retornar uma string ou o Buffer da instância, ArrayBuffer,
  // FormData ou Stream
  // Você pode modificar o cabeçalho do objeto
  transformRequest: [function (data, headers) {
    // Faz o que quiser para transformar os dados

    return data;
  }],

  // `transformResponse` permite alterar os dados da responsta antes
  // de serem passados para o then/catch
  transformResponse: [function (data) {
    // Faz o que quiser para transformar os dados
    
    return data;
  }],

  // `headers` são cabeçalhos customizáveis para serem enviados
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` são os parametros da URL a serem enviados junto com a requisição
  // Deve ser um objeto ou um objeto URLSearchParams
  // NOTE: parâmetros com valor null ou undefined não estarão presentes na URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` é uma função opcional que comanda a serialização dos `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` são os dados a serem enviados no corpo da requisição
  // Apenas aplicado em requisições com os métodos 'PUT', 'POTS', 'DELETE' e 'PATCH'
  // Quando nenhum `transformRequest` é definido, deve ser um dos tipos a seguir:
  // - string, objetos simples, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Navegador apenas: FormData, File, Blob
  // - Apenas no Node: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // Sintaxe alternativa para enviar dados no corpo
  // método post
  // apenas o valor é enviado, e não as chaves
  data: 'Country=Brasil&City=Guarapari',

  // `timeout` expecifica o número em milisegundos antes do tempo da requisição acabar.
  // Se a requisição levar um tempo maior do que o `timeout`, a requisição será abortada.
  timeout: 1000, // o valor padrão do timeout é de `0` (sem intervalo)

  // `withCredentials` indica se as solicitações de controle de acesso entre sites
  // devem ou não ser feitas utilizando as credenciais
  withCredentials: false, // padrão

  // `adapter` permite o tratamento personalizado de solicitações, o que torna o teste mais fácil.
  // Retorna uma promessa e fornece uma resposta valida (veja lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indica que a autenticação básica do HTTP deve ser usada e fornece as credenciais.
  // Isso vai definir um novo cabeçalho de `Authorization`, sobrescrevendo uma já existente
  // `Authorization` cabeçalhos personalizados que você definiu usando `headers`.
  // Por favor, note que apenas autenticação HTTP Basic é configuravel por meio deste parâmetro
  // Para tokens Bearer e outros, use o cabeçalho personalizado de `Authorization`
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indica o tipo dos dados que o servidor irá responder
  // as opções são: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // navegador apenas: 'blob'
  responseType: 'json', // padrão

  // `responseEncoding` indica a codificação a ser usada para respostas de decodificação (somente Node.js)
  // Nota: Ignorado para `responseType` de 'stream' ou solicitações do lado do cliente
  responseEncoding: 'utf8', // padrão

  // `xsrfCookieName` é o nome do cookie para utilizar como um valor para o token xsrf
  xsrfCookieName: 'XSRF-TOKEN', // padrão

  // `xsrfHeaderName` é o nome do cabeçalho do http que carrega o valor do token xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // padrão

  // `onUploadProgress` permite manusear o progresso do evento de upload
  // apenas no navegador
  onUploadProgress: function (progressEvent) {
    // Faça o que quiser com o progresso nativo do evento
  },

  // `onDownloadProgress` permite manusear o progresso do evento para downloads
  // apenas no navegador
  onDownloadProgress: function (progressEvent) {
    // Faça o que quiser com o progresso nativo do evento
  },

  // `maxContentLength` define o tamanho máximo do conteúdo da resposta http em bytes permitido no node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Opção apenas para o Node) define o tamanho máximo permitido do conteúdo http em bytes
  maxBodyLength: 2000,

  // `validateStatus` define se deve resolver ou rejeitar a promessa de acordo com o
  // código de status HTTP da resposta. Se `validateStatus` retornar `true` (ou for definido como `null`
  // ou `undefined`), a promessa será resolvida; caso contrário, a promessa será
  // rejeitada.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // padrão
  },

  // `maxRedirects` define um número máximo de redirecionamento para seguir no node.js
  // Se definido como 0, nenhum redirecionamento será permitido
  maxRedirects: 5, // padrão

  // `socketPath` define um UNIX Socket para ser usado em node.js.
  // e.g. '/var/run/docker.sock' para enviar requisições para o docker daemon.
  // Apenas `socketPath` ou `proxy` podem ser especificados.
  // Caso ambos sejam especificados, o `socketPath` será utilizado.
  socketPath: null, // padrão

  // `httpAgent` e `httpsAgent` definem agentes personalizados a serem usados pelas requisições http
  // e https, respectivamente, no node.js. Isso permite adicionar opções, como
  // `keepAlive`, que não estão habilidadas por padrão.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` define o nome do host, a porta e o protocolo do proxy do servidor.
  // Você pode defirnir também seu próprio proxy usando `http_proxy` e
  // `https_proxy` das variáveis de ambiente. Se você estiver usando variáveis de ambiente
  // para a configuração do seu proxy, você também pode definir uma variável de ambiente `no_proxy`
  // como uma lista separada por vírgulas de domínios que não devem utilizar proxy.
  // Use `false` para desabilidar proxies, ignorando as variáveis de ambiente.
  // `auth` indica que o HTTP Basic auth deve ser usado para conectar no proxy e
  // fornecer credenciais.
  // Isso definirá um cabeçalho `Proxy-Authorization`, sobrescrevendo qualquer outro
  // `Proxy-Authorization` existente que você definiu usando `headres`.
  // Se o proxy do servidor utilizar HTTPS, então você deve definir o protocolo para `https`.

  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `signal` é uma instância de AbortController, pode ser utilizada para cancelar a requisição
  signal: new AbortController().signal,

  // (Descontinuado) `cancelToken` especifica um token de cancelamento que pode ser utilizado para cancelar a requisição
  // (veja a seção de Cancelamento abaixo para mais detalhes)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indica se o corpo da resposta deve ou não ser descomprimido
  // automaticamente. Se definido como `true` irá remover também o cabeçalho `content-encoding`
  // de todos os objetos resposta
  // - Apenas no Node (XHR não pode desligar a descompressão)
  decompress: true // padrão

}
```
