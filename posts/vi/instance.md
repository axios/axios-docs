---
title: 'Axios instance'
prev_title: 'Axios API'
prev_link: '/vi/docs/api_intro'
next_title: 'Cấu hình Request'
next_link: '/vi/docs/req_config'
---

### Tạo ra instance

Bạn có thể tạo ra một instance mới của axios bằng cấu hình tự đặt.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://tên-miền-nào-đó.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Phương thức instance

Các phương thức instance sẵn có đều được liệt kê dưới đây. Cấu hình được chỉ định thì sẽ được hợp chung với cấu hình instance.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])