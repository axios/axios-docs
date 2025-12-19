---
title: 'POST अनुरोध'
description: 'Axios के साथ POST अनुरोध कैसे करें'
prev_title: 'न्यूनतम उदाहरण'
prev_link: '/docs/example'
next_link: '/docs/api_intro'
next_title: 'Axios API'
---

## `POST` अनुरोध निष्पादित करना

### JSON

```js
axios.post('/user', {
पहला नाम: 'Fred',
अंतिम नाम: 'Flintstone'
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
```

एक साथ कई अनुरोध निष्पादित करना

```js
फ़ंक्शन getUserAccount() {
return axios.get('/user/12345');
}

फ़ंक्शन getUserPermissions() {
return axios.get('/user/12345/permissions');
}

const [acct, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);

/ या

Promise.all([getUserAccount(), getUserPermissions()])
.then(फ़ंक्शन ([acct, perm]) {
/ ...
});
```

एक HTML फ़ॉर्म को JSON के रूप में पोस्ट करें

```js
const {data} = await axios.post('/user', document.querySelector('#my-form'), {
हेडर: {
'Content-Type': 'application/json'
}
})
```

### फ़ॉर्म

- मल्टीपार्ट (`multipart/form-data`)

```js
const {data} = await axios.post('https://httpbin.org/post', {
firstName: 'Fred',
lastName: 'Flintstone',
orders: [1, 2, 3],
photo: document.querySelector('#fileInput').files
}, {
हेडर: {
'Content-Type': 'multipart/form-data'
}
}
)
```

- URL एनकोडेड फ़ॉर्म (`application/x-www-form-urlencoded`)

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