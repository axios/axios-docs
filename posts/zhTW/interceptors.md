---
title: 'Interceptor'
prev_title: '選項預設值'
prev_link: '/zhTW/docs/config_defaults'
next_title: '錯誤處理'
next_link: '/zhTW/docs/handling_errors'
---

您可以在 `then` 或 `catch` 執行前，攔截請求及回應。

```js
// 新增一個請求的 interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 新增一個回應的 interceptor
axios.interceptors.response.use(function (response) {
    // 回應的狀態碼在 2xx 為範圍時，就會觸發此函式
    // Do something with response data
    return response;
  }, function (error) {
    // 回應的狀態碼在 2xx 範圍以外時，就會觸發此函式
    // Do something with response error
    return Promise.reject(error);
  });
```

如不需要 interceptor，您可以將其移除。

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

可以對自訂的 Axios 物件加上 interceptor。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```