---
title: '回應結構描述'
prev_title: '請求設定'
prev_link: '/docs/req_config'
next_title: '預設設定'
next_link: '/docs/config_defaults'
---

請求的回應包含了下列資訊。

```js
{
  // `data` 為伺服器提供的回應。
  data: {},

  // `status` 為伺服器回應的 HTTP 狀態碼。
  status: 200,

  // `statusText` 為伺服器回應的 HTTP 狀態訊息。
  // 自 HTTP/2 開始，狀態訊息為空白或不支援。
  // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
  statusText: 'OK',

  // `headers` 為伺服器回應的 HTTP 標頭。
  // 所有標頭名稱為小寫，且可使用方括號標記法存取。
  // 範例：`response.headers['content-type']`
  headers: {},

  // `config` 為提供給 `axios` 的請求設定。
  config: {},

  // `request` 為產生此回應的請求。
  // 在 Node.js 中，將是最後的 ClientRequest 實體 (in redirects)，在瀏覽器中則為 XMLHttpRequest 實體。

  
  request: {}
}
```

使用 `then` 時，您將以下列方式來存取回應：

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

使用 `catch`，或是將[拒絕回呼](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)做為 `then` 的第二參數傳遞時，回應將包含在 `error` 物件中，如[處理錯誤](/docs/handling_errors)條目所述。

