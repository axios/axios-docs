---
title: '攔截器'
prev_title: '預設配置'
prev_link: '/zhTW/docs/config_defaults'
next_title: '錯誤處理'
next_link: '/zhTW/docs/handling_errors'
---

在請求或回應被 `then` 或 `catch` 處理之前，你可以提前攔截它。

```js
// 新增一個請求攔截器
axios.interceptors.request.use(function (config) {
    // 在請求實際發出前，做些什麼
    return config;
  }, function (error) {
    // 發生請求錯誤時，做些什麼
    return Promise.reject(error);
  });

// 新增一個回應攔截器
axios.interceptors.response.use(function (response) {
    // 任何 2xx 的 HTTP 狀態碼，將會觸發此函數
    // 針對回應資料，做些什麼
    return response;
  }, function (error) {
    // 任何 2xx 之外的 HTTP 狀態碼，都會觸發此函數
    // 針對回應錯誤，做些什麼
    return Promise.reject(error);
  });
```

若想要移除攔截器可以這麼做。

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

也可以將攔截器新增至客製的 axios 實體。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```