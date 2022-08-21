---
title: 'リクエストの設定'
prev_title: 'Axios インスタンス'
prev_link: '/ja/docs/instance'
next_title: 'レスポンスのスキーマ'
next_link: '/ja/docs/res_schema'
---


以下はリクエストを行う際に利用可能な設定オプションです。必須なのは `url` だけです。 `method` が指定されていない場合、リクエストのデフォルトは `GET` です。

```js
{
  // `url` はリクエストに使用されるサーバのURLです。
  url: '/user',

  // `method` はリクエストを行う際に使用するリクエストメソッドです。
  method: 'get', // デフォルト

  // `baseURL` は `url` が絶対パスでない限り `url` の先頭に結合されます。
  // axios のインスタンスに `baseURL` を設定することで、そのインスタンスのメソッドに
  // 相対的なURLを渡すことができ、便利です。
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` はサーバに送信する前にリクエストデータを変更することができます
  // これはリクエストメソッド 'PUT', 'POST', 'PATCH' および 'DELETE' にのみ適用可能です
  // 配列の最後の関数は、文字列または Buffer, ArrayBuffer, FormData, Stream の
  // インスタンスを返さなければなりません。
  // headers オブジェクトを修正してもよいです
  transformRequest: [function (data, headers) {
    // データを変換するために必要なことを行ってください

    return data;
  }],

  // `transformResponse` はレスポンスデータが then/catch に渡される前に
  // 変更を加えることができます。
  transformResponse: [function (data) {
    // データを変換するために必要なことを行ってください

    return data;
  }],

  // `headers` は送信されるカスタムヘッダです。
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` はリクエストと一緒に送信される URL パラメータです
  // plain オブジェクトまたは URLSearchParams オブジェクトである必要があります
  // 注: `params` が null または undefined の場合は URL にレンダリングされません。
  params: {
    ID: 12345
  },

  // `paramsSerializer` は `params` のシリアライズを担当するオプションの関数です
  // (例 https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` はリクエストボディとして送信されるデータです
  // リクエストメソッド 'PUT', 'POST', 'DELETE', 'PATCH' に対してのみ適用可能です
  // `transformRequest` が設定されていない場合は、以下のいずれかの型でなければなりません:
  // - string, plain オブジェクト, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - ブラウザのみ: FormData, File, Blob
  // - Node のみ: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // ボディにデータを送信するための代替構文です
  // リクエストメソッド post
  // 値のみを送信し、キーは送信しません
  data: 'Country=Brasil&City=Belo Horizonte',

  // timeout` は、リクエストがタイムアウトするまでのミリ秒数を指定します。
  // もしリクエストが `timeout` よりも長くかかった場合、リクエストは中断されます。
  timeout: 1000, // デフォルトは `0` (タイムアウトなし)

  // `withCredentials` は cross-site Access-Control のリクエストを credentials を
  // 使用して行うかどうかを示します
  withCredentials: false, // デフォルト

  // `adapter` はテストを容易にするために、リクエストのカスタム処理を可能にします。
  // Promise を返し、有効なレスポンスを提供します (lib/adapters/README.md を参照) 。
  adapter: function (config) {
    /* ... */
  },

  // `auth` は HTTP Basic 認証を使用することを示し認証情報を提供します。
  // これは `Authorization` ヘッダを設定し、 `headers` を使用して設定した
  // 既存の `Authorization` カスタムヘッダを上書きします。
  // なお、このパラメータで設定可能なのは HTTP Basic 認証のみです。
  // Bearer トークンなどには、代わりに `Authorization` カスタムヘッダを使用してください。
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` はサーバが応答するデータの種類を示します
  // 選択肢: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   ブラウザのみ: 'blob'
  responseType: 'json', // デフォルト

  // `responseEncoding` はレスポンスのデコードに使用するエンコーディングを示します (Node.js のみ)
  // 注: `responseType` が 'stream' の場合、あるいはクライアントサイドのリクエストの場合は無視されます
  responseEncoding: 'utf8', // デフォルト

  // `xsrfCookieName` は xsrf トークンの値として使用するクッキーの名前です
  xsrfCookieName: 'XSRF-TOKEN', // デフォルト

  // `xsrfHeaderName` は xsrf トークンの値を格納する http ヘッダの名前です
  xsrfHeaderName: 'X-XSRF-TOKEN', // デフォルト

  // `onUploadProgress` はアップロードの ProgressEvent を処理できるようにします
  // ブラウザのみ
  onUploadProgress: function (progressEvent) {
    // ネイティブの ProgressEvent で必要なことを行ってください
  },

  // `onDownloadProgress` は ダウンロードの ProgressEvent を処理できるようにします
  // ブラウザのみ
  onDownloadProgress: function (progressEvent) {
    // ネイティブの ProgressEvent で必要なことを行ってください
  },

  // `maxContentLength` は node.js で許可される http レスポンスコンテンツの最大サイズをバイト数で定義します
  maxContentLength: 2000,

  // `maxBodyLength` (Node のみのオプション) http リクエストコンテンツの最大サイズをバイト数で定義します
  maxBodyLength: 2000,

  // `validateStatus` は与えられた HTTP レスポンスステータスコードに対して、
  // Promise を resolve するか reject するかを定義します。
  // もし `validateStatus` が `true` を返したら (あるいは `null` や `undefined` に設定されたら)
  // Promise は resolve され、それ以外の場合は Promise は reject されます。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // デフォルト
  },

  // `maxRedirects` は node.js で追いかけるリダイレクトの最大数を定義します。
  // 0に設定すると、リダイレクトは行われません。
  maxRedirects: 5, // デフォルト

  // `socketPath` は node.js で使用する UNIX ソケットを定義します。
  // 例: '/var/run/docker.sock' で docker デーモンにリクエストを送信します。
  // `socketPath` または `proxy` のどちらかのみを指定することができます。
  // 両方が指定された場合、 `socketPath`が使用されます。
  socketPath: null, // デフォルト

  // httpAgent` と `httpsAgent` はそれぞれ node.js で http と https のリクエストを実行する際に
  // 使用するカスタムエージェントを定義します。これにより、デフォルトでは有効になっていない
  // `keepAlive` のようなオプションを追加することができます。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` はプロキシサーバのホスト名、ポート、プロトコルを定義します。
  // また、従来の `http_proxy` や `https_proxy` 環境変数を使用してプロキシを定義することもできます。
  // プロキシの設定に環境変数を使用する場合、プロキシさせないドメインのリストをカンマ区切りで
  // `no_proxy` 環境変数に定義することも可能です。
  // 環境変数を無視してプロキシを無効にするには `false` を使用します。
  // `auth` はプロキシに接続する際に HTTP Basic 認証を使用することを示し、認証情報を提供します。
  // これは `Proxy-Authorization` ヘッダを設定し、 `headers` を使用して設定した既存の
  // `Proxy-Authorization` カスタムヘッダを上書きします。
  // プロキシサーバが HTTPS を使用する場合、プロトコルを `https` に設定する必要があります。
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` はリクエストをキャンセルするために使用するキャンセルトークンを指定します。
  // (詳細は「キャンセル」の項を参照)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` は、レスポンスボディを自動的に解凍するかどうかを指定します。
  // `true` に設定すると、すべての解凍されたレスポンスのレスポンスオブジェクトから
  // 'content-encoding' ヘッダも削除されます。
  // - Node のみ (XHR は解凍をオフにすることはできない)
  decompress: true // default

}
```
