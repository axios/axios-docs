---
title: 'POST 请求'
description: '用Axios如何发起POST请求'
prev_title: '基本用例'
prev_link: '/zh/docs/example'
next_title: 'Axios API'
next_link: '/zh/docs/api_intro'
---

发起一个 `POST` 请求

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

发起多个并发请求

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