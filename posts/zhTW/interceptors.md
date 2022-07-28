---
title: '攔截器'
prev_title: '預設設定'
prev_link: '/docs/config_defaults'
next_title: '處理錯誤'
next_link: '/docs/handling_errors'
---

您可以在 `then` 或是 `catch` 處理前攔截請求或回應。

```js
// 新增請求攔截器
axios.interceptors.request.use(function (config) {
    // 在送出請求前執行
    return config;
  }, function (error) {
    // 處理請求錯誤
    return Promise.reject(error);
  });

// 新增回應攔截器
axios.interceptors.response.use(function (response) {
    // 任何 2xx 的狀態碼將觸發此函式
    // 處理回應資料
    return response;
  }, function (error) {
    // 任何非 2xx 的狀態碼將觸發此函式
    // 處理回應錯誤
    return Promise.reject(error);
  });
```

若要移除攔截器：

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

您可以給 axios 的自訂實體新增攔截器。

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```