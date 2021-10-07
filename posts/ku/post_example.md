---
title: 'داواکاری POST'
description: 'چۆنیەتی ئەنجامدانی داواکارییەکی POST بە ئەکسیۆس'
prev_title: 'نموونەیەکی سادە'
prev_link: '/ku/docs/example'
next_title: 'ناوبەستی ئەکسیۆس'
next_link: '/ku/docs/api_intro'
---

ئەنجامدانی داواکاری `POST`

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

ئەنجامدانی چەند داواکارییەکی هاوکات

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
