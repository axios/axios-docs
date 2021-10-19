---
title: '에러 핸들링'
prev_title: '인터셉터'
prev_link: '/kr/docs/interceptors'
next_title: '요청 취소'
next_link: '/kr/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 요청이 전송되었지만, 응답이 수신되지 않았습니다. 
      // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
      // node.js에서는 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    } else {
      // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```
`validateStatus` config 옵션을 사용하면, 오류를 발생시키는 HTTP 코드를 정의할 수 있습니다.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 상태 코드가 500 미만인 경우에만 해결
  }
})
```

`toJSON`을 사용하면, HTTP 에러에 대한 더 많은 정보를 객체 형식으로 가저옵니다.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```