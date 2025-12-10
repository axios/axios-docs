---
title: 'Cancellation'
prev_title: 'Handling Errors'
prev_link: '/gu/docs/handling_errors'
next_title: 'URL-Encoding Bodies'
next_link: '/gu/docs/urlencoded'
---

## Cancelling requests 

Setting the `timeout` property in an axios call handles **response** related timeouts. 

અમુક પ્રક્રિયા માં (e.g. જ્યારે નેટ ઉપલભ્ય ના હોય) an axios call would benefit from cancelling the **connection** early. Without cancellation, the axios call can hang until the parent code/stack times out (સર્વર સાઇડ એપપસ માં થોડો વધારે સમય લે સકે ex: nextjs).

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

તમે વિનંતી ને નાબૂદ કરી સકો *CancelToken* વાપરી ને 

> તમે cancel token વાપરી સકો `CancelToken.source` વાપરી ને નીચે દર્શાવ્યા પ્રમાણે 

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

// cancel the request (મેસેજ parameter વૈકલ્પિક છે)
source.cancel('Operation canceled by the user.');
```

તમે `CancelToken` કન્સ્ટ્રક્ટરને એક્ઝિક્યુટર ફંક્શન પાસ કરીને કેન્સલ ટોકન પણ બનાવી શકો છો:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// વિનંતી નાબૂદ 
cancel();
```

> નોંધ: તમે એક જ કેન્સલ ટોકન / સિગ્નલ વડે અનેક વિનંતીઓ રદ કરી શકો છો.

સંક્રમણ સમયગાળા દરમિયાન, તમે બંને રદ કરવાના API નો ઉપયોગ કરી શકો છો, એક જ વિનંતી માટે પણ:

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