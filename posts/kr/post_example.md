---
title: 'POST 요청'
description: 'Axios로 POST 요청을 시작하는 방법'
prev_title: '기본 예제'
prev_link: '/kr/docs/example'
next_title: 'Axios API'
next_link: '/kr/docs/api_intro'
---

`POST` 요청 생성

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

여러 동시 `POST` 요청 생성

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
