---
title: 'POST İstekleri'
description: 'Axios ile POST isteği nasıl gönderilir'
prev_title: 'Basit Örnek'
prev_link: '/docs/example'
next_title: "Axios API'si"
next_link: '/docs/api_intro'
---

`POST` isteği göndermek

```js
axios.post('/user', {
    firstName: 'Efe',
    lastName: 'Ceylan'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Birden çok eşzamanlı istek gerçekleştirme

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
