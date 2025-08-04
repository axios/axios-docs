---
title: 'POST リクエスト'
description: 'Axios で POST リクエストを実行する方法'
prev_title: '最小構成の使用例'
prev_link: '/ja/docs/example'
next_title: 'Axios API'
next_link: '/ja/docs/api_intro'
---

`POST` リクエストの実行

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

複数のリクエストの並列処理

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```
