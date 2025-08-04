---
title: 'درخواست های از نوع POST'
description: 'نحوه انجام درخواست های POST با Axios'
prev_title: 'مثالی کوچک'
prev_link: '/fa/docs/example'
next_title: 'APIهای پروژه Axios'
next_link: '/fa/docs/api_intro'
---

نحوه ایجاد کردن درخواست `POST`

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

نحوه ایجاد کردن چندین درخواست به صورت همزمان

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
