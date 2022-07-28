---
title: '處理錯誤'
prev_title: '攔截器'
prev_link: '/docs/interceptors'
next_title: '取消'
next_link: '/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 請求已送出，而伺服器回傳了非 2xx 的狀態碼
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 請求已送出，但未收到任何回應
      // `error.request` 在瀏覽器中為 XMLHttpRequest 的實體，在 Node.js 中則為 http.ClientRequest 的實體
      console.log(error.request);
    } else {
      // 在設置請求時發生了觸發錯誤的事情
      console.log('錯誤', error.message);
    }
    console.log(error.config);
  });
```

您可以使用 `validateStatus` 選項來定義應擲回錯誤的 HTTP 狀態碼。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 僅在狀態碼小於 500 的情況下解析
  }
})
```

使用 `toJSON` 以取得關於 HTTP 錯誤詳細資訊的物件。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```