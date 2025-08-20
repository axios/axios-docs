---
title: 'POST 請求'
description: '使用 Axios 發請一個 POST 請求'
prev_title: '使用範例'
prev_link: '/zhTW/docs/example'
next_title: 'Axios API'
next_link: '/zhTW/docs/api_intro'
---

## 發起一個 `POST` 請求

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

同時發出多個請求

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

// 等同於

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function ([acct, perm]) {
    // ...
  });
```

將 HTML 表單轉換為 JSON 發出 POST 請求


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

- URL encoded 表單 (`application/x-www-form-urlencoded`)

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
