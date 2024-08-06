---
title: '요청 취소'
prev_title: '에러 핸들링'
prev_link: '/kr/docs/handling_errors'
next_title: 'URL-인코딩 바디'
next_link: '/kr/docs/urlencoded'
---

## 요청 취소

axios 호출에서 `timeout` 속성을 설정하면 **응답** 관련 타임아웃을 처리합니다.

몇가지 경우에 (예: 네트워크 연결을 사용할 수 없게 되는 경우 등) axios **연결**을 조기에 취소하는것이 유리합니다. 취소를 하지 않는 경우, axios호출이 부모 코드/스택이 타임아웃 될 때까지 대기할 수 있습니다 (서버 측 응용 프로그램의 경우 몇 분이 걸릴 수 있습니다)

axios 호출을 종료하려면 다음과 같은 방법을 사용할 수 있습니다:
- `signal`
- `cancelToken` (deprecated)

`timeout`과 취소 방법(예: `signal`)을 결합하면 **응답** 관련 타임아웃과 **연결** 관련 타임아웃을 모두 처리할 수 있습니다.

### `signal`: AbortController

Axios는 `v0.22.0` 부터 fetch API의 방식대로 요청을 취소하기 위해 [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)를 지원합니다:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// 요청 취소하기
controller.abort()
```

최신 [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API를 사용한 타임아웃 예 [nodejs 17.3+]:
```js
axios.get('/foo/bar', {
   signal: AbortSignal.timeout(5000) // 5초 후 요청 중단
}).then(function(response) {
   //...
});
```

타임아웃 헬퍼 함수를 사용한 예:
```js
function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // 5초 후 요청 중단
}).then(function(response) {
   //...
});
```

### CancelToken `deprecated`

*CancelToken*을 사용하여 요청을 취소할 수도 있습니다.

> axios cancel token API는 철회된 [cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises)을 기반으로 합니다.

> 이 API는 `v0.22.0` 부터 deprecated 되었으며 새 프로젝트에서 사용되어서는 안 됩니다.

아래와 같이 `CancelToken.source` 팩토리를 사용하여 취소 토큰을 만들수 있습니다:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 에러 핸들링
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 요청 취소하기 (메시지 파라미터는 옵션입니다)
source.cancel('Operation canceled by the user.');
```

실행자 함수를 `CancelToken` 생성자에 전달하여, 취소 토큰을 만들수도 있습니다:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // 실행자 함수는 취소 함수를 파라미터로 받습니다.
    cancel = c;
  })
});

// 요청 취소하기
cancel();
```

> 참고: 같은 취소 토큰으로 여러 요청을 취소할 수 있습니다.

전환 기간 동안에는 동일한 요청에 대해서 두가지 취소 API를 모두 사용할 수 있습니다:

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
    // 에러 핸들링
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 요청 취소하기 (메시지 파라미터는 옵션입니다)
source.cancel('Operation canceled by the user.');
// OR
controller.abort(); // 메시지 파라미터 지원하지 않음
```
