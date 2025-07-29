---
title: 'Interceptors'
prev_title: 'Config Defaults'
prev_link: '/docs/config_defaults'
next_title: 'Handling Errors'
next_link: '/docs/handling_errors'
---

You can intercept requests or responses **before** they are handled by `then` or `catch`.

The `use` function adds a handler to the list of handlers to be run when the Promise is fulfilled or rejected. The handler is defined by the fulfilled and rejected functions.

There is an optional `options` object that can be passed in as the third parameter. `synchronous` if the synchronous option is true. The handler is defined as asynchronous if the synchronous option is false. If the synchronous option is not provided, the handler is defined as asynchronous. `runWhen` will control when the provided interceptor will run. Provide a function that will return true or false on whether it should run, defaults to always true.

```js
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
  { synchronous: true, runWhen: () => /* This function returns true */}
);

// Add a response interceptor
axios.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```

In normal circumstances the `onFulfilled` response interceptor is only called for responses in the 2xx range, and `onRejected` is called otherwise.
However, this behavior depends on [validateStatus](/docs/req_config).
For instance, if `validateStatus` is setup to always return `true`, then `onFulfilled` will be called for *all* responses.

If you need to remove an interceptor later you can.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

You can add interceptors to a custom instance of axios.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```
