---
title: '請求選項'
prev_title: 'Axios 物件'
prev_link: '/zhTW/docs/instance'
next_title: '回應結構'
next_link: '/zhTW/docs/res_schema'
---


以下列出所有發出請求時可用的選項。在所有選項中，只有 `url` 是必填的。如果沒有指定 `method` 選項，預設會使用 `GET` 方法。

```js
{
  // `url` 指定了請求的目標 URL
  url: '/user',

  // `method` 指定了送出請求時所用的請求方法
  method: 'get', // 預設值

  // `baseURL` 會成為 `url` 的前置字串，除非 `url` 是絕對位置
  // 在建立 Axios 實例時就指定其 `baseURL` 很方便，如此一來呼叫該實例的方法時僅需傳入相對 URL 就好
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` 選項可以在送出請求資料至伺服器前，對資料進行變更
  // 此選項僅在請求方法為 'PUT', 'POST', 'PATCH' 及 'DELETE' 時有效
  // 陣列中的最後一個函式必須傳回一個字串或者 Buffer、ArrayBuffer、FormData 或 Stream 物件
  // 您可以修改 headers 物件
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` 可以在請求資料被傳給 then/catch 前對資料進行變更
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` 指定了要送出的自訂標頭
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 指定了送出請求時要使用的 URL 參數
  // 值需為 plain object 或 URLSearchParams 物件
  // 備註：內容為 null 或 undefined 的參數不會出現在 URL 中
  params: {
    ID: 12345
  },

  // `paramsSerializer` 可提供一個選用的函式，負責對 `params` serializing
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 定義了請求主體中要傳送的資料
  // 此選項僅在請求方式為 PUT、POST、DELETE 及 PATCH 時有用
  // 當 `transformRequest` 為空時，值的資料型別需為以下幾種：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 僅限於瀏覽器使用：FormData, File, Blob
  // - 僅限於 Node.js 使用：Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // 傳送資料可使用的另一種語法
  // 請求方法：POST
  // 使用這種方式時，只有值（value）會被傳送，鍵（key）則不會
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` 定義了請求的逾時限制（以毫秒為單位）
  // 如果一則請求耗時超過此值，則中止該請求
  timeout: 1000, // 預設值為 `0`（無逾時限制）

  // `withCredentials` 指定了是否要在 cross-site Access-Control 請求中使用認證機密
  withCredentials: false, // 預設值

  // `adapter` 可用來自訂請求的處理方式，此選項可使測試變得更容易
  // 此函式需傳回 Promise 並提供有效的回應內容（請參見 lib/adapters/README.md 以了解更多資訊）
  adapter: function (config) {
    /* ... */
  },

  // `auth` 選項會使用 HTTP Basic 來認證，並提供認證機密
  // 此選項會覆寫 `headers` 中定義的 `Authorization` 標頭
  // 此選項僅能用來設定 HTTP Basic 認證，
  // 如需使用 Bearer token 或其他認證方式，請設定自訂的 `Authorization` 標頭
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` 指定了伺服器會傳回的資料型別，可用的選項為：
  //  'arraybuffer', 'document', 'json', 'text', 'stream'
  //   此外，在瀏覽器中還可使用 'blob' 
  responseType: 'json', // 預設值

  // `responseEncoding` 指定了對回應內容解碼時所用的編碼方式
  // 僅在 Node.js 中有效
  // 備註：此選項在 `responseType` 為 'stream' 時，或客戶端發出請求時會被忽略
  responseEncoding: 'utf8', // 預設值

  // `xsrfCookieName` 指定了要用作 XSRF Token 的 Cookie 名稱
  xsrfCookieName: 'XSRF-TOKEN', // 預設值

  // `xsrfHeaderName` 指定了要用來攜帶 XSRF Token 內容的 HTTP 標頭名稱
  xsrfHeaderName: 'X-XSRF-TOKEN', // 預設值

  // `onUploadProgress` 可用來處理上傳進度事件
  // 僅在瀏覽器中有效
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 可用來處理下載進度事件
  // 僅在瀏覽器中有效
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` 選項定義了允許的 HTTP 回應內容大小上限（以位元組為單位）
  // 僅在 Node.js 中有效
  maxContentLength: 2000,

  // `maxBodyLength` 選項定義了允許的 HTTP 請求內容大小上限（以位元組為單位）
  // 僅在 Node.js 中有效
  maxBodyLength: 2000,

  // `validateStatus` 定義了 HTTP 回應狀態碼的處理方式
  // 如果 `validateStatus` 被設為 `null`、`undefined`，或該函式傳回 `true`，則 resolve promise，否則 reject

  validateStatus: function (status) {
    return status >= 200 && status < 300; // 預設值
  },

  // `maxRedirects` 定義了要跟隨的跳轉次數上限
  // 若設為 0，則不允許任何跳轉
  // 僅在 Node.js 中有效
  maxRedirects: 5, // default

  // `socketPath` 定義了要使用的 UNIX Socket
  // 例如設為 '/var/run/docker.sock' 來對 docker daemon 送出請求
  // `socketPath` 及 `proxy` 選項互斥，若兩者都指定了，只會使用 `socketPath`
  // 僅在 Node.js 中有效
  socketPath: null, // 預設值

  // `httpAgent` 及 `httpsAgent` 定義了在 Node.js 中進行 HTTP/HTTPS 請求時要使用的自訂 User Agent
  // 可用來加上一些預設不啟用的選項，例如 `keepAlive`
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定義了 Proxy 伺服器的位址、連接埠及通訊協定
  // 您也可以透過傳統設定 `http_proxy` 及 `https_proxy` 環境變數的方式來定義 Proxy
  // 若您使用環境變數的方式配置 Proxy，也可以設定 `no_proxy` 環境變數來定義無需透過 Proxy 連接的網域白名單（以逗號隔開）
  // 此選項設為 `false` 時停用 Proxy，也會忽略相關的環境變數
  // `auth` 子選項會使用 HTTP Basic 來認證，並提供認證機密
  // 提供 `auth` 子選項時，會覆寫 `headers` 選項中定義的 `Proxy-Authorization` 標頭
  // 如果 Proxy 伺服器使用了 HTTPS，須將 protocol（協定）設為 `https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 定義了要用來取消請求的代符 (token)
  // 請參見〈取消請求〉以了解更多資訊
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` 選項定義了是否要自動 decompress 回應主體
  // 如設為 `true`，則所有經 decompress 的回應的 `content-encoding` 標頭都會被去除
  // - 因為 XHR 無法關閉 decompression，此選項僅可在 Node.js 上使用
  decompress: true // 預設值

}
```
