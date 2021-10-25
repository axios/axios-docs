---
title: 'Bộ đón chặn'
prev_title: 'Cấu hình Mặc định'
prev_link: '/vi/docs/config_defaults'
next_title: 'Xử trí lỗi'
next_link: '/vi/docs/handling_errors'
---

Bạn có thể đón chặn request hoặc response trước khi chúng được xử trí bởi `then` hay `catch`.

```js
// Thêm một bộ đón chặn request
axios.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  });

// Thêm một bộ đón chặn response
axios.interceptors.response.use(function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  }, function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  });
```

Nếu sau đó bạn cần gỡ một bộ đón chặn nào đó ra thì bạn có thể

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

Bạn cũng có thể thêm bộ đón chặn vào instance axios tự đặt.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```