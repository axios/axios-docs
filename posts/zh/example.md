---
title: '基本用例'
description: '使用axios的基本用例'
prev_title: '介绍'
prev_link: '/docs/zh/intro'
next_title: 'POST 请求'
next_link: '/docs/zh/post_example'
---

## 注意: CommonJS 用法
为了在CommonJS中使用 `require（）` 导入时获得TypeScript类型推断（智能感知/自动完成），请使用以下方法：

```js
const axios = require('axios').default;

// axios.<method> 能够提供自动完成和参数类型推断功能
```

# 用例

发起一个 `GET` 请求

```js
const axios = require('axios');

// 向给定ID的用户发起请求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });

// 上述请求也可以按以下方式完成（可选）
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
    // 总是会执行
  });  

// 支持async/await用法
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **注意:** 由于`async/await` 是ECMAScript 2017中的一部分，而且在IE和一些旧的浏览器中不支持，所以使用时务必要小心。