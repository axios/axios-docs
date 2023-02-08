---
title: 'طلبات POST'
description: 'كيفية تنفيذ طلبات POST باستخدام Axios'
prev_title: 'مثال مبسط'
prev_link: '/docs/example'
next_title: 'واجهة برمجة التطبيقات Axios'
next_link: '/docs/api_intro'
---

أداء طلب `POST`

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

اداء طلبات متعددة متزامنة

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
