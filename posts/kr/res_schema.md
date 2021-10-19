---
title: '응답 스키마'
prev_title: '요청 Config'
prev_link: '/kr/docs/req_config'
next_title: 'Config 기본값'
next_link: '/kr/docs/config_defaults'
---

요청에 대한 응답은 아래의 정보를 가지고 있습니다.

```js
{
  // `data`는 서버가 제공하는 응답입니다.
  data: {},

  // `status`는 HTTP 상태 코드입니다.
  status: 200,

  // `statusText`는 HTTP 상태 메시지입니다.
  statusText: 'OK',

  // `headers`는 HTTP 헤더입니다.
  // 모든 헤더 이름은 소문자이며, 괄호 표기법을 사용하여 접근할 수 있습니다.
  // 예시: `response.headers['content-type']`
  headers: {},

  // `config`는 요청을 위해 `Axios`가 제공하는 구성입니다.
  config: {},

  // `request`는 이번 응답으로 생성된 요청입니다.
  // 이것은 node.js에서 마지막 ClientRequest 인스턴스 입니다.
  // 그리고 브라우저에선 XMLHttpRequest입니다.
  request: {}
}
```

`then`을 사용하면, 아래와 같은 응답을 받습니다:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

`catch`를 사용하거나, [거부 콜백 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)를 `then`의 두번째 인자로 넘길 시, [에러 핸들링](/kr/docs/handling_errors)에서 설명된 `error` 객체를 사용할 수 있습니다.