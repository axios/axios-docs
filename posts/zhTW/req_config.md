---
title: '請求設定'
prev_title: 'Axios 實體'
prev_link: '/docs/instance'
next_title: '回應結構描述'
next_link: '/docs/res_schema'
---


These are the available config options for making requests. Only the `url` is required. Requests will default to `GET` if `method` is not specified.

```js
{
  // `url` 為用於請求的伺服器 URL。
  url: '/user',

  // `method` 為發起請求時要使用的請求方法
  method: 'get', // 預設

  // 除非 `url` 為絕對路徑，否則 `baseURL` 將加在 `url` 前面。
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // 轉換資料

    return data;
  }],

  // `transformResponse` 允許在傳遞給 then/catch 前先對回應資料做更動
  transformResponse: [function (data) {
    // 轉換資料

    return data;
  }],

  // `headers` 為要傳送的自訂標頭
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 為要跟著請求一起傳送的 URL 參數
  // 必須為純文字或 URLSearchParams 物件
  // 備註：null 或是 undefined 的參數不會出現在 URL 中。
  params: {
    ID: 12345
  },

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 為做為請求本體傳送的資料
  // 僅適用於 'PUT'、'POST'、'DELETE'，和 'PATCH' 這四種請求方法
  // 未設置 `transformRequest` 時，必須為下列類型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 瀏覽器專用：FormData, File, Blob
  // - Node 專用：Stream, Buffer
  data: {
    firstName: '小明'
  },
  
  // 將資料傳送到本體的替代語法
  // post 方式
  // 僅會傳送數值，不會傳送鍵。
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 指定了請求逾時前的等待毫秒數。
  // 如果請求花費的時間大於 `timeout`，請求將被終止。
  timeout: 1000, // 預設為 `0` (無逾時)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // 預設

  // `adapter` 允許自訂處理請求，使測試更容易。
  // 回傳 promise 並提供有效回應 (參見 lib/adapters/README.md)。
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 指定了伺服器將回應的資料類型
  // 選項：'arraybuffer', 'document', 'json', 'text', 'stream'
  //  瀏覽器專用：'blob'
  responseType: 'json', // 預設

  // `responseEncoding` 指定了解碼回應的編碼 (Node.js 專用)
  // 註解：若 `responseType` 設為 'stream'，或是客戶端請求將忽略此設定
  responseEncoding: 'utf8', // 預設

  // `xsrfCookieName` 為做為 xsrf 權杖數值使用的 Cookie 名稱
  xsrfCookieName: 'XSRF-TOKEN', // 預設

  // `xsrfHeaderName` 為帶有 xsrf 權杖數值的 HTTP 標頭的名稱
  xsrfHeaderName: 'X-XSRF-TOKEN', // 預設

  // `onUploadProgress` 允許處理上傳進度事件
  // 瀏覽器專用
  onUploadProgress: function (progressEvent) {
    // 處理原生進度事件
  },

  // `onDownloadProgress` 允許處理下載進度事件
  // 瀏覽器專用
  onDownloadProgress: function (progressEvent) {
    // 處理原生進度事件
  },

  // `maxContentLength` 定義了在 Node.js 中允許的 HTTP 回應內容最大位元組數。
  maxContentLength: 2000,

  // `maxBodyLength` (Node.js 專用) 定義了 HTTP 請求內容所允許的最大位元組數。
  maxBodyLength: 2000,

  // `validateStatus` 定義了對給予的 HTTP 回應狀態碼要解析還是拒絕 Promise。
  // 若 `validateStatus` 回傳 `true` (或是設為 `null` 或 `undefined`)，Promise 將被解析；反之將被拒絕。
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 預設
  },

  // `maxRedirects` 定義在 Node.js 中要跟隨的重新導向最大數量。
  // If set to 0, no redirects will be followed. 若設為 0，將不會
  maxRedirects: 5, // 預設

  // `socketPath` 指定要在 Node.js 使用的 UNIX 通訊端。
  // 例如：'/var/run/docker.sock' 以將請求傳送至 Docker 常駐程式。
  // `socketPath` 和 `proxy` 僅能擇一使用。
  // 如果兩者皆有值，將使用 `socketPath`。
  socketPath: null, // 預設

  // `httpAgent` 和 `httpsAgent` 定義了在 Node.js 中執行 HTTP 和 HTTPS 時使用的自訂代理。
  // 這將允許加入如 `keepAlive` 這種預設情況下不啟用的選項。
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定義了 Proxy 伺服器的主機名稱、連接埠，及通訊協定。
  // 您也可以使用常規的 `https_proxy` 和 `https_proxy` 環境變數來定義 Proxy。
  // 如果您使用環境變數來定義 Proxy，您還能定義 `no_proxy` 環境變數作為不應使用 Proxy 的網域列表 (以逗號分隔)。
  // 使用 `false` 來停用 Proxy，並忽略環境變數。
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
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

  // `cancelToken` 指定了可以用來取消請求的取消權杖。
  // (詳見下方的取消條目)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` 指定了回應本體是否該被自動解壓縮。
  // 如果設為 `true`，也將從所有解壓縮回應中的回應物件移除 'content-encoding' 標頭。
  // - Node 專用 (XHR 無法停用解壓縮)
  decompress: true // 預設

}
```
