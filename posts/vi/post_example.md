---
title: 'POST Request'
description: 'Cách để phát đi POST request bằng Axios'
prev_title: 'Ví dụ cơ bản'
prev_link: '/vi/docs/example'
next_title: 'Axios API'
next_link: '/vi/docs/api_intro'
---

Phát đi một `POST` request

```js
axios.post('/user', {
    lastName: 'Trần'
    firstName: 'Quốc Tuấn',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Phát đi nhiều request đồng hành
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
