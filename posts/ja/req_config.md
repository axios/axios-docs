---
title: 'リクエスト設定'
prev_title: 'Axios インスタンス'
prev_link: '/ja/docs/instance'
next_title: 'レスポンス スキーマ'
next_link: '/ja/docs/res_schema'
---


これらは、リクエストを行う際に利用可能な設定オプションです。`url` だけが必須です。`method` が指定されていない場合、リクエストのデフォルトは `GET` です。

```js
{
  // `url` はリクエストに使用されるサーバーの URL です。
  url: '/user',

  // `method` はリクエストを行う際に使用されるリクエストメソッドです。
  method: 'get', // デフォルト

  // `url` が絶対パス指定でない限り、`baseURL` が `url` の前に付加されます。
  // Axios のインスタンスに `baseURL` を設定すると、そのインスタンスのメソッドに相対パスで
  // URLを渡すことができ、便利です。
  baseURL: 'https://some-domain.com/api',

  // `allowAbsoluteUrls` は、絶対 URL が設定された `baseUrl` を上書きするかどうかを決定します。
  // true（デフォルト）の場合、`url` に絶対 URL が指定されると `baseUrl` を上書きします。
  // false に設定すると、`url` が絶対 URL であっても、常に `baseUrl` が前に付加されます。
  allowAbsoluteUrls: true,

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

  // `paramsSerializer` は、`params` のシリアル化をカスタマイズできるオプションの設定です。
  paramsSerializer: {
    //キーと値のペアを反復的に送信するカスタム エンコーダー関数。
    encode?: (param: string): string => { /* ここでカスタム操作を実行し、変換された文字列を返します */ }, 
    
    // パラメーター全体のカスタム シリアライザー関数。ユーザーが 1.x より前の動作を模倣できるようにします。
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ), 
    
    //params で配列インデックスをフォーマットするための構成。 
    indexes: false // 利用可能な 3 つのオプション: 
    // (1) indexes: null (括弧がなくなる), 
    // (2) (default) indexes: false (空の括弧につながります),
    // (3) indexes: true (インデックス付きの括弧につながります).    
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
  maxRedirects: 21, // デフォルト

  // `beforeRedirect` は、リダイレクト前に呼び出される関数を定義します。
  // これを使用して、リダイレクト時にリクエストオプションを調整したり、
  // 最新のレスポンスヘッダーを確認したり、
  // エラーを投げることでリクエストをキャンセルすることができます。
  // maxRedirects が 0 に設定されている場合、`beforeRedirect` は使用されません。
  beforeRedirect: (options, { headers }) => {
   if (options.hostname === "example.com") {
     options.auth = "user:password";
   }
  },

  // `socketPath` は、Node.js で使用する UNIX ソケットを定義します。
  // 例えば '/var/run/docker.sock' を使用して、Docker デーモンにリクエストを送信します。
  // 指定できるのは `socketPath` または `proxy` のいずれかのみです。
  // 両方を指定すると、`socketPath` が使用されます。
  socketPath: null, // デフォルト

  // `transport` は、リクエストを送信する際に使用されるトランスポート方法を決定します。
  // 値が定義されていれば、それが使用されます。
  // そうでない場合、`maxRedirects` が 0 のときは、`protocol` に指定されたプロトコルに応じてデフォルトの `http` または `https` ライブラリが使用されます。
  // それ以外の場合は、同じくプロトコルに応じてリダイレクト処理が可能な `httpFollow` または `httpsFollow` ライブラリが使用されます。
  transport: undefined, // デフォルト

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

  // `signal` は AbortController のインスタンスで、リクエストをキャンセルするために使用できます
  signal: new AbortController().signal,

  // `cancelToken` には、リクエストをキャンセルするために使用するキャンセル トークンを指定します
  // (詳細は後述のキャンセルのセクションを参照してください)。
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` は、レスポンス ボディを自動的に解凍するかどうかを示します。
  // `true` に設定すると、すべての解凍されたレスポンスのレスポンス オブジェクトから
  // 'content-encoding' ヘッダーも削除されます。
  // - ノードのみ (XHR は解凍をオフにできません)
  decompress: true // デフォルト

  // `insecureHTTPParser` ブール値。
  // 無効な HTTP ヘッダーを受け入れる、安全でない HTTP パーサーを使用するかどうかを示します。
  // これにより、HTTP 仕様に準拠していない実装との相互運用が可能になる場合があります。
  // ただし、安全でないパーサーの使用は避けるべきです。
  // オプションについては以下を参照:
  // https://nodejs.org/dist/latest-v12.x/docs/api/http.html#http_http_request_url_options_callback
  // こちらも参照:
  // https://nodejs.org/en/blog/vulnerability/february-2020-security-releases/#strict-http-header-parsing-none
  insecureHTTPParser: undefined, // デフォルト

  // 後方互換のための一時的オプション。新しいバージョンでは削除される可能性があります。
  transitional: {
    // サイレント JSON パースモード
    // `true`  - JSON パースエラーを無視し、失敗した場合は response.data を null に設定（旧動作）
    // `false` - JSON パースに失敗した場合は SyntaxError をスロー（注意: responseType を 'json' に設定する必要があります）
    silentJSONParsing: true, // 現在の Axios バージョンのデフォルト値

    // `responseType` が 'json' でなくても、レスポンス文字列を JSON として解析しようとする
    forcedJSONParsing: true,

    // リクエストタイムアウト時に一般的な ECONNABORTED ではなく ETIMEDOUT エラーをスローする
    clarifyTimeoutError: false,
  },

  env: {
    // ペイロードを自動的に FormData オブジェクトへシリアライズする際に使用する FormData クラス
    FormData: window?.FormData || global?.FormData
  },

  formSerializer: {
    visitor: (value, key, path, helpers) => {}; // フォーム値をシリアライズするためのカスタム visitor 関数
    dots: boolean; // ブラケット形式ではなくドット形式を使用する
    metaTokens: boolean; // パラメータキー内の {} のような特殊な末尾を保持する
    indexes: boolean; // 配列インデックスの形式 null  - ブラケットなし, false - 空のブラケット, true  - インデックス付きブラケット
  },

  // http adapter 専用 (node.js)
  maxRate: [
    100 * 1024, // アップロード制限 100KB/s,
    100 * 1024  // ダウンロード制限 100KB/s
  ]
}
```
