---
title: '回應架構'
prev_title: '請求配置'
prev_link: '/zhTW/docs/req_config'
next_title: '預設配置'
next_link: '/zhTW/docs/config_defaults'
---

一個請求的回應將包含以下資訊：

```js
{
  // `data` 是伺服器所回傳的回應本體
  data: {},

  // `status` 是伺服器所回傳的 HTTP 狀態碼
  status: 200,

  // `statusText` 為來自伺服器所回應是 HTTP 狀態訊息
  // 從 HTTP/2 開始狀態訊息將為空或不受支援
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` 為來自伺服器所回應的標頭
  // 所有標頭名稱皆為小寫，並可使用括號表示法取用
  // 例如：`response.headers['content-type']
  headers: {},

  // `config` 是 `axios` 的請求設置
  config: {},

  // `request` 為
  // 他是在 node.js 中最後 ClientRequest 實體（於重新導向內）
  // 在瀏覽器中則為 XMLHttpRequest 實體
  request: {}
}
```

當呼叫 `then` 方法時，你將會收到如下的回應資料：

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```
當使用 `catch` 時或在 `then` 的第二個參數傳遞了 [rejection callback](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 物件，回應內容將能透過 `error` 物件取得，詳見 [Handling Errors](/docs/handling_errors) 章節。
