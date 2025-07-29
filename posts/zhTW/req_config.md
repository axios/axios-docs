---
title: '請求配置'
prev_title: 'Axios 實體'
prev_link: '/zhTW/docs/instance'
next_title: '回應架構'
next_link: '/zhTW/docs/res_schema'
---

下列為所有可用配置選項，僅 `url` 為必要選項。若 `method` 未指定，將預設使用 `GET` 方法。

```js
{
  // 請求所要導向的伺服器 URL
  url: '/user',

  // `method` 為發起請求時所使用的方法
  method: 'get', // default

  // `baseURL` 將前置於 `url` 前面，除非 `url` 是一個絕對 URL。
  // 設置 `baseURL` 後，對於該 axios 實體只需傳入相對 URL 至請求方法中。
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` 允許在發送給伺服器之前，修改請求資料
  // 僅可使用於 ‘PUT', 'POST', 'PATCH' 和 ‘DELETE’ 請求方法
  // 陣列中最後一個函式必須回傳字串、Buffer 實體、ArrayBuffer、FormData 或 Stream
  // 你也可以修改標頭屬性 
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` 允許於傳遞給 then/catch 之前，修改回應資料
  // 將會傳遞給 then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` 為自定義的標頭
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是要隨著請求發送的 URL 參數
  // 必須為純物件或 URLSearchParams 物件
  // 注意：若參數為 null 或 undefined，則不會渲染於 URL 中。
  params: {
    ID: 12345
  },

  // `paramsSerializer` 為序列化 params 參數的可選功能
  // 如：https://www.npmjs.com/package/qs 或 http://api.jquery.com/jquery.param/
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 為請求資料的主體
  // 只適用於請求方法為 'PUT', 'POST', 'DELETE' 或'PATCH'
  // 當為設置 `transformRequest` 時，資料需為以下類型之一：
  // - 字串、純物件、ArrayBuffer、ArrayBufferView、URLSearchParams
  // - 僅瀏覽器：FormData、File、Blob
  // - 僅 node.js：Stream、Buffer
  data: {
    firstName: 'Fred'
  },

  // 另一種附加資料至主體的方法
  // POST 方法
  // 只有數值發送，而不發送鍵值
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定請求逾時的前的時長（毫秒）
  // 若請求時間超過了 `timeout` ，請求將被中止。
  timeout: 1000, // 預設為 `0` （無逾時）

  // `withCredentials` 表示發送請求時是否使用跨網站訪問控制
  // 需搭配憑證使用
  withCredentials: false, // 預設

  // `adapter` 允許自定義請求處理函數便於進行測試
  // 回傳 promise 並提供有效的回應（參見 lib/adapters/README.md）
  adapter: function (config) {
    /* ... */
  },

  // `auth` 指定使用 HTTP 基本身分認證
  // 此將會設置 `Authorization` 標頭，並複寫現有的內容
  // 請注意只有 HTTP 基本身分認證透過此參數設置
  // 若使用 Bearer 令牌或其他方式，請使用 `Authorization` 來自行定義標頭。
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 指定伺服器將回應的資料型態
  // 可用選項有：'arraybuffer', 'document', 'json', 'text', 'stream'
  // 僅瀏覽器端可用：’blob'
  responseType: 'json', // 預設

  // `responseEncoding` 指定解析回應的編碼方式（僅 Node.js）
  // 注意：當為瀏覽器端或 `responseType` 設為 'stream' 時無效。
  responseEncoding: 'utf8', // 預設

  // `xsrfCookieName` 為作為 xsrf令牌 的 cookie 名稱
  xsrfCookieName: 'XSRF-TOKEN', // 預設

  // `xsrfHeaderName` 為攜帶 xsrf 令牌 的 HTTP 標頭
  xsrfHeaderName: 'X-XSRF-TOKEN', // 預設

  // `onUploadProgress` 允許處理上傳時的進度事件
  // 僅瀏覽器端
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允許處理下載時的進度事件
  // 僅瀏覽器端 only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` 定義最大回應大小（Bytes），僅 Node.js
  maxContentLength: 2000,

  // `maxBodyLength` 定義請求的最大主體大小（Bytes），僅 Node.js
  maxBodyLength: 2000,

  // `validateStatus` 定義是否 resolve 或 reject 給定的特定 HTTP 狀態碼的回應。
  // 如果 `validateStatus` 回傳 `true` （或設為 `null`、`undefined`），該 promise 將被 resolve；反之，則會被 reject
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 預設
  },

  // `maxRedirects` 定義在 node.js 中重新導向的最大次數
  // 若設為 `0` ，將不會進入任何重新導向
  maxRedirects: 5, // 預設

  // `socketPath` 定義在 node.js 中 使用的 UNIX Socket
  // 如： ‘/var/run/docker.sock' 以向 Docker 守護執行序（Daemon）發送請求。
  // 僅可以指定為 `socketPath` 或 `proxy`
  // 若都指定了，則優先使用 `socketPath`
  socketPath: null, // 預設

  // `httpAgent` 和 `httpsAgent` 定義了在 node.js 中個別處理 http 或 https 請求時要使用的自定義代理。並允許添加選項，例如預設未啟用的 `keepAlive`。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定義了代理伺服器的主機名稱、埠口和協議。
  // 您也可以使用傳統的 `http_proxy` 和 `https_proxy` 環境變數來定義您的代理。
  // 如果您正在使用環境變數進行代理配置，則還可以定義一個 `no_proxy` 環境變數作為不需要代理的域名列表（以逗號分隔）。
  // 使用 `false` 來禁用代理，忽略環境變數。
  // `auth` 表示應該使用 HTTP 基本驗證連接到代理並提供認證信息。
  // 這將設置一個 `Proxy-Authorization` 標頭，覆蓋您使用 `headers` 設置的任何現有 `Proxy-Authorization` 自定義標頭。
  // 如果代理伺服器使用 HTTPS，則必須將協議設置為 `https`。
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 設置一個用於取消請求的取消token
  // (有關詳細訊息，請查看下方 `取消請求`)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` 表示回應正文是否需要自動解壓縮。
  // 若設為 `true` 將從解壓縮的回應物件中自動移除 `content-encoding` 標頭
  // - Node 有效 (XHR無法關閉解壓縮)
  decompress: true // 預設值

}
```
