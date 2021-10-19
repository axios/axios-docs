---
title: '요청 취소'
prev_title: '에러 핸들링'
prev_link: '/kr/docs/handling_errors'
next_title: 'URL-인코딩 바디'
next_link: '/kr/docs/urlencoded'
---

*취소 토큰*을 이용해 요청을 취소할 수 있습니다.

> Axios의 취소 토큰 API는 중단된 [취소가능한 프로미스 제안](https://github.com/tc39/proposal-cancelable-promises)을 기반으로 하고 있습니다.

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

// 요청 취소하기 (메시지 파라미터는 선택적입니다.)
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
