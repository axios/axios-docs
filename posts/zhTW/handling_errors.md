---
title: '錯誤處理'
prev_title: 'Interceptor'
prev_link: '/zhTW/docs/interceptors'
next_title: '取消請求'
next_link: '/zhTW/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 送出請求後，伺服器回應的狀態碼不在 2xx 的範圍
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 送出請求後，卻沒有收到回應
      // 在瀏覽器中，`error.request` 是 XMLHttpRequest 物件；
      // 而在 Node.js 中，則是 http.ClientRequest 物件
      console.log(error.request);
    } else {
      // 在準備請求時就發生的其他錯誤
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

透過設定 `validateStatus` 選項，您可以自訂需對哪些 HTTP 狀態碼擲出 (throw) 錯誤。

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 只在狀態碼小於 500 時才 resolve promise
  }
})
```

您可以使用 `toJSON` 來取得一個紀錄 HTTP 錯誤詳細資料的 object。

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```