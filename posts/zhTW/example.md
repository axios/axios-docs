---
title: '簡單示例'
description: '關於使用 Axios 的小範例'
prev_title: '介紹'
prev_link: '/zhTW/docs/intro'
next_title: 'POST 請求'
next_link: '/zhTW/docs/post_example'
---

## 附註：使用 CommonJS
如果需要利用 TypeScript 型別（使文字編輯器的自動完成、IntelliSense 功能得以運作）以及 CommonJS 的 `require()` 來引入模組，請使用此方法：

```js
const axios = require('axios').default;

// 接下來編寫程式時，axios.<method> 會提供自動完成及參數的型別資訊
```

# 範例

進行 `GET` 請求

```js
const axios = require('axios');

// 發出一個以 ID 查詢使用者資料的請求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 處理成功狀況
    console.log(response);
  })
  .catch(function (error) {
    // 錯誤處理
    console.log(error);
  })
  .then(function () {
    // 不論狀況，皆會執行
  });

// 上述的請求也可以改寫為
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
    // 不論狀況，皆會執行
  });  

// 那 async/await 怎麼寫呢？ 在外層的函式/方法前加上 async 就行了
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **注意：** `async/await` 是 ECMAScript 2017 的一項功能，且不被 Internet Explorer 或更舊的瀏覽器支援