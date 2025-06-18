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

### Gọi instance trực tiếp với đối tượng cấu hình

Bên cạnh các phương thức tiện lợi như `instance.get()` hoặc `instance.post()`, bạn cũng có thể gọi trực tiếp một instance của Axios với một đối tượng cấu hình. Cách này tương tự như `axios(config)` và rất hữu ích khi bạn muốn gửi lại một request với cấu hình ban đầu.

```js
const instance = axios.create({ baseURL: '/api' });

// Hoạt động giống như axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

Cách này giúp bạn dễ dàng triển khai logic gửi lại request, ví dụ khi xử lý lỗi xác thực:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Gửi lại request ban đầu
  }

  throw error;
});
```