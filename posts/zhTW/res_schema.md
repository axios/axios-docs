---
title: '回應結構'
prev_title: '請求選項'
prev_link: '/zhTW/docs/req_config'
next_title: '選項預設值'
next_link: '/zhTW/docs/config_defaults'
---

送出請求後，回應的結構如下：

```js
{
  // `data` 是由伺服器傳回的回應
  data: {},

  // `status` 是伺服器回應的 HTTP 狀態碼
  status: 200,

  // `statusText` 是伺服器回應的 HTTP 狀態訊息
  // 截至 HTTP/2，通常不支援狀態訊息，或者為空白
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` 是伺服器回應的 HTTP 標頭
  // 所有標頭名稱都會被轉成小寫，且可透過中括號符號存取內容
  // 範例：`response.headers['content-type']`
  headers: {},

  // `config` 記錄了發出請求的 `axios` 自身的選項
  config: {},

  // `request` 記錄了當時的請求
  // 在瀏覽器中，此項是 XMLHttpRequest 實例；
  // 在 Node.js 中，則是最後的 ClientRequest 實例（如有跳轉）
  request: {}
}
```

與 `then` 一同使用時，會收到的回應如下：

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

與 `catch` 一起使用，或在 `then` 的第二個參數傳入 [rejection callback](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) 時，回應的內容則可從 `error` 物件中存取，詳情請參閱[〈錯誤處理〉](/docs/handling_errors)。
