---
title: 'POST リクエスト'
description: 'Axios で POST リクエストを実行する方法'
prev_title: '最小限の例'
prev_link: '/ja/docs/example'
next_title: 'Axios API'
next_link: '/ja/docs/api_intro'
---

## `POST` リクエストの実行

### JSON

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

複数の同時リクエストの実行

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// または

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function ([acct, perm]) {
    // ...
  });
```

HTML フォームを JSON で投稿

```js
const {data} = await axios.post('/user', document.querySelector('#my-form'), {
  headers: {
    'Content-Type': 'application/json'
  }
})
```

### Forms

- Multipart (`multipart/form-data`)

```js
const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3],
    photo: document.querySelector('#fileInput').files
  }, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
)
```

- URL encoded form (`application/x-www-form-urlencoded`)

```js
const {data} = await axios.post('https://httpbin.org/post', {
    firstName: 'Fred',
    lastName: 'Flintstone',
    orders: [1, 2, 3]
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})
```
