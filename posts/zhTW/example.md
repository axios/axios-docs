---
title: '使用範例'
description: '一些 axios 的使用示範'
prev_title: '簡介'
prev_link: '/zhTW/docs/intro'
next_title: 'POST 請求'
next_link: '/zhTW/docs/post_example'
---

## 注意： CommonJS 使用方式
為了獲取 TypeScript 類型(針對 intellisense / autocomplete)，使用 CommonJS `require()` 引入時，請使用下述方式：

```js
const axios = require('axios').default;

// axios.<method> 將不會具有自動補全和參數類型提示
```

# 範例

發出一個 `GET` 請求

```js
const axios = require('axios');

// 使用給定的 user ID 發出請求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 處理回應
    console.log(response);
  })
  .catch(function (error) {
    // 處理錯誤
    console.log(error);
  })
  .finally(function () {
    // 一定會執行
  });

// 上述請求也等同於
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
  .finally(function () {
    // 一定會執行
  });  


// 若想要使用 async/await，只需要在外層函式加入 `async` 關鍵字。
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **注意**：`async/await` 是 ECMAScript 2017 的一部分，它並不被 IE 瀏覽器或其他舊版本瀏覽器所支援，使用時須留意。