---
title: 'طلبات POST'
description: 'كيفية إجراء طلبات POST باستخدام Axios'
prev_title: 'مثال بسيط'
prev_link: '/ar/docs/example'
next_title: 'Axios API'
next_link: '/ar/docs/api_intro'
---

إجراء طلب `POST`

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

إجراء طلبات متعددة متزامنة

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
