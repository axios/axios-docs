---
title: '極簡範例'
description: '一些使用 axios 的範例'
prev_title: '簡介'
prev_link: '/docs/intro'
next_title: 'POST 請求'
next_link: '/docs/post_example'
---

## CommonJS 用法

若要取得 TypeScript 型別 (Intellisense/自動完成)，並同時使用 CommonJS 的 `require()` 匯入，請參考下列程式碼：

```js
const axios = require('axios').default;

// axios.<method> 即可提供自動完成和參數型別提示
```

# 範例

發起 `GET` 請求

```js
const axios = require('axios');

// 為指定 ID 的使用者發起請求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 處理成功回應
    console.log(response);
  })
  .catch(function (error) {
    // 處理錯誤
    console.log(error);
  })
  .then(function () {
    // 總會執行
  });

// 上述請求也可寫成
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 總會執行
  });  

// 想要使用 async/await 嗎？請將 `async` 關鍵字加到外層的函式/方法。 

async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **備註：**`async/await` 為 ECMAScript 2017 的一部分，不受 Internet Explorer 及舊版瀏覽器支援，請小心使用。