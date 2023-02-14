---
title: 'Cancellation'
prev_title: 'Handling Errors'
prev_link: '/docs/handling_errors'
next_title: 'URL-Encoding Bodies'
next_link: '/docs/urlencoded'
---

## Cancelling requests

Setting the `timeout` property in an axios call handles **response** related timeouts. 

In some cases (e.g. network connection becomes unavailable) an axios call would benefit from cancelling the **connection** early. Without cancellation, the axios call can hang until the parent code/stack times out (might be a few minutes in a server-side applications). 

To terminate an axios call you can use following methods:
- `signal`
- `cancelToken` (deprecated)

Combining `timeout` and cancellation method (e.g. `signal`) should cover **response** related timeouts AND **connection** related timeouts.

### `signal`: AbortController

Starting from `v0.22.0` Axios supports [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to cancel requests in fetch API way:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```

Example with a timeout using latest [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) //Aborts request after 5 seconds
}).then(function(response) {
   //...
});
```

Example with a timeout helper function:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) //Aborts request after 5 seconds
}).then(function(response) {
   //...
});
```

### CancelToken `deprecated`

You can also cancel a request using a *CancelToken*. 

> The axios cancel token API is based on the withdrawn [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises).

> This API is deprecated since `v0.22.0` and shouldn't be used in new projects

You can create a cancel token using the `CancelToken.source` factory as shown below:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```

You can also create a cancel token by passing an executor function to the `CancelToken` constructor:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

> Note: you can cancel several requests with the same cancel token / signal.

During the transition period, you can use both cancellation APIs, even for the same request:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token,
  signal: controller.signal
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
// OR
controller.abort(); // the message parameter is not supported
```
