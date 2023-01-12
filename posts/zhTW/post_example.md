---
title: 'POST 請求'
description: '了解如何以 Axios 發出 POST 請求'
prev_title: '簡單示例'
prev_link: '/zhTW/docs/example'
next_title: 'Axios API'
next_link: '/zhTW/docs/api_intro'
---

進行 `POST` 請求

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

進行多個並行（concurrent）的請求

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
