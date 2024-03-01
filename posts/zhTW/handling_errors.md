---
title: '錯誤處理'
prev_title: '攔截器'
prev_link: '/zhTW/docs/interceptors'
next_title: '取消請求'
next_link: '/zhTW/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 請求已發送，但伺服器回應的狀態碼不在 2xx 的範圍內
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 請求已發送，但沒有收到回應
      // `error.request` 在瀏覽器中是一個 XMLHttpRequest 實體；而在 node.js 中視 http.ClientRequest 實體
      console.log(error.request);
    } else {
      // 在設置請求時發生了錯誤

      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

使用 `validateStatus` 配置參數，可以自行定義將會拋出錯誤的 HTTP 狀態碼。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 只有狀態碼是小於 500 才會解析
  }
})
```

使用 `toJSON` 取得更多關於 HTTP 錯誤的資訊。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```