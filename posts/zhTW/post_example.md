---
title: 'POST 請求'
description: '如何使用 Axios 傳送 POST 請求'
prev_title: '極簡範例'
prev_link: '/docs/example'
next_title: 'Axios API'
next_link: '/docs/api_intro'
---

傳送 `POST` 請求

```js
axios.post('/user', {
    firstName: '小明',
    lastName: '王'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

同時傳送多個請求

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
