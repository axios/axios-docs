---
title: '인터셉터'
prev_title: '구성 기본값'
prev_link: '/kr/docs/config_defaults'
next_title: '에러 핸들링'
next_link: '/kr/docs/handling_errors'
---

`then` 또는 `catch`로 처리되기 전에 요청과 응답을 가로챌수 있습니다.

```js
// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });
```

나중에 필요할때 인터셉터를 제거할 수 있습니다.

```js
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

커스텀 인스턴스에서도 인터셉터를 추가할 수 있습니다.

```js
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```