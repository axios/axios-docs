---
title: 'リクエスト設定'
prev_title: 'Axios インスタンス'
prev_link: '/docs/instance'
next_title: 'レスポンス スキーマ'
next_link: '/docs/res_schema'
---


これらは、リクエストを行う際に利用可能な設定オプションです。`url` だけが必須です。`method` が指定されていない場合、リクエストのデフォルトは `GET` です。

```js
{
  // `url` はリクエストに使用されるサーバーの URL です。
  url: '/user',

  // `method` はリクエストを行う際に使用されるリクエストメソッドです。
  method: 'get', // default

  // `url` が絶対パス指定でない限り、`baseURL` が `url` の前に付加されます。
  // Axios のインスタンスに `baseURL` を設定すると、そのインスタンスのメソッドに相対パスで
  // URLを渡すことができ、便利です。
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` は、サーバーに送信される前にリクエスト データを変更できるようにします。
  // これはリクエスト メソッドの 'PUT'、'POST'、PATCH'、'DELETE' に対してのみ適用されます。
  // 配列の最後の関数は、文字列または Buffer、ArrayBuffer、FormData、Stream のインスタンスを返す必要があります。
  // ヘッダー オブジェクトを変更できます。
  transformRequest: [function (data, headers) {
    // データの変換処理を行います

    return data;
  }],

  // `transformResponse` を使用すると、レスポンス データを変更してから then/catch に渡すことができます。
  transformResponse: [function (data) {
    // データの変換処理を行います

    return data;
  }],

  // `headers` は送信されるカスタム ヘッダーです。
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` は、リクエストとともに送信される URL パラメータです。
  // プレーンオブジェクトまたは URLSearchParams オブジェクトである必要があります。
  // 注: null または未定義のパラメーターは URL にレンダリングされません。
  params: {
    ID: 12345
  },

  // `paramsSerializer`は、`params`のシリアル化を設定するフィールドです。
  // serializeフィールドを使用して、カスタムシリアル化関数を使用できます。
  // encodeフィールドを使用して、カスタムエンコーディング関数を使用できます。
  // 以前のように`paramsSerializer`に関数を設定すると、axiosのデフォルトエンコーディング関数がencodeフィールドに割り当てられます。
  // (たとえば、https://www.npmjs.com/package/qs、http://api.jquery.com/jquery.param/)
  paramsSerializer: {
      serialize: (params) => {
          return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
          encode: (str) => {
          return encodeURIComponent(str)
      }
  },

  // `data` はリクエスト ボディとして送信されるデータです。
  // リクエスト メソッド 'PUT'、'POST'、'DELETE'、'PATCH' に対してのみ適用可能です。
  // `transformRequest` が設定されていない場合は、以下のいずれかの型でなければなりません。
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - ブラウザのみ: FormData, File, Blob
  // - Node.js のみ: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // ボディにデータを送信するための代替構文
  // メソッド ポスト
  // キーではなく、値のみが送信されます。
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout`は、リクエストがタイムアウトするまでのミリ秒数を指定します。
  // リクエストに`timeout`より長い時間がかかる場合、リクエストは中止されます。
  timeout: 1000, // デフォルトは `0` (タイムアウトなし)

  // `withCredentials` は、資格情報を使用してクロスサイト アクセスコントロールの
  // リクエストを行うかどうかを示します。
  withCredentials: false, // デフォルト

  // `adapter`を使用すると、リクエストをカスタム処理できるため、テストが簡単になります。
  // Promise を返し、有効なレスポンスを提供します (lib/adapters/README.md を参照)。
  adapter: function (config) {
    /* ... */
  },

  // `auth` は、HTTP 基本認証を使用する必要があることを示し、資格情報を提供します。
  // これにより、 `Authorization` ヘッダーが設定され、`headers` を使用して設定した
  // 既存の `Authorization` カスタムヘッダーを上書きします。
  // このパラメーターを使用して構成できるのは、HTTP 基本認証のみであることに注意してください。
  // Bearer トークンなどの場合は、代わりに `Authorization` カスタム ヘッダーを使用してください。
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` には、以下のようなサーバーがオプションで応答するデータのタイプを指定します。
  // 'arraybuffer'、'document'、'json'、'text'、'stream'
  //   browser のみ: 'blob'
  responseType: 'json', // デフォルト

  // `responseEncoding` には、レスポンスのデコードで使用するエンコード方法を指定します (Node.js のみ)
  // 注: `responseType` が 'stream' の場合、あるいはクライアントサイドのリクエストの場合は無視されます。
  responseEncoding: 'utf8', // デフォルト

  // `xsrfCookieName` は、xsrf トークンの値として使用する Cookie の名前です。
  xsrfCookieName: 'XSRF-TOKEN', // デフォルト

  // `xsrfHeaderName` は、xsrf トークン値を格納する http ヘッダーの名前です。
  xsrfHeaderName: 'X-XSRF-TOKEN', // デフォルト

  // `onUploadProgress` を使用すると、アップロードの進行状況イベントを処理できます。
  // ブラウザのみ
  onUploadProgress: function (progressEvent) {
    // ネイティブの進行状況イベントを処理します
  },

  // `onDownloadProgress` を使用すると、ダウンロードの進行状況イベントを処理できます。
  // ブラウザのみ
  onDownloadProgress: function (progressEvent) {
    // ネイティブの進行状況イベントを処理します
  },

  // `maxContentLength` は Node.js で許可される http レスポンスのコンテンツの最大サイズをバイト数で定義します。
  maxContentLength: 2000,

  // `maxBodyLength` (Node.js のみのオプション) は、http リクエストのコンテンツの最大サイズをバイト数で定義します
  maxBodyLength: 2000,

  // `validateStatus` は、与えられた HTTP レスポンスのステータスコードに対して、Promise を解決するか拒否するかを定義します。
  // `validateStatus` が `true` を返す場合 (または `null` や `undefined` に設定されている場合) Promise は解決されます。
  // それ以外の場合は Promise は拒否されます。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // デフォルト
  },

  // `maxRedirects` は Node.js でリダイレクトをたどる最大数を定義します。
  // 0 に設定すると、リダイレクトは実行されません。
  maxRedirects: 5, // デフォルト

  // `socketPath` は、Node.js で使用する UNIX ソケットを定義します。
  // 例えば '/var/run/docker.sock' を使用して、Docker デーモンにリクエストを送信します。
  // 指定できるのは `socketPath` または `proxy` のいずれかのみです。
  // 両方を指定すると、`socketPath` が使用されます。
  socketPath: null, // デフォルト

  // `httpAgent` と `httpsAgent` は、それぞれ Node.js で http と https のリクエストを
  // 実行するときに使用するカスタムエージェントを定義します。
  // これにより、デフォルトでは有効になっていない `keepAlive` のようなオプションを追加できます。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` は、プロキシサーバーのホスト名、ポート、プロトコルを定義します。
  // また、従来の `http_proxy` と `https_proxy` 環境変数を使用して、プロキシを定義することもできます。
  // プロキシの設定に環境変数を使用する場合、プロキシを設定しないドメインのカンマ区切りのリストとして
  // `no_proxy` 環境変数を定義することもできます。
  // 環境変数を無視してプロキシを無効にするには、 `false` を使用します。
  // `auth` は、プロキシへの接続に HTTP 基本認証を使用することを示し、認証情報を提供します。
  // これにより、`Proxy-Authorization` ヘッダーが設定され、`headers` を使用して設定した既存の
  // `Proxy-Authorization` カスタムヘッダーが上書きされます。
  // プロキシサーバーが HTTPS を使用する場合は、プロトコルを `https` に設定する必要があります。 
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` には、リクエストをキャンセルするために使用するキャンセル トークンを指定します
  // (詳細は後述のキャンセルのセクションを参照してください)。
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` は、レスポンス ボディを自動的に解凍するかどうかを示します。
  // `true` に設定すると、すべての解凍されたレスポンスのレスポンス オブジェクトから
  // 'content-encoding' ヘッダーも削除されます。
  // - ノードのみ (XHR は解凍をオフにできません)
  decompress: true // デフォルト

}
```
