---
title: '기본 예제'
description: 'Axios를 사용하기 위한 기본 예제'
prev_title: '소개'
prev_link: '/kr/docs/intro'
next_title: 'POST 요청'
next_link: '/kr/docs/post_example'
---

## 참고: CommonJS 사용법

`require()`를 이용한 CommonJS를 사용하는 동안 TypeScript 타이핑(인텔리센스 / 자동 완성)을 사용하려면, 다음 방법을 쓰세요.

```js
const axios = require('axios').default;

// axios.<method>는 이제 자동 완성과 파라미터 타이핑을 제공합니다.
```

# 예제

`GET` 요청 수행하기

```js
const axios = require('axios');

// 지정된 ID를 가진 유저에 대한 요청
axios.get('/user?ID=12345')
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });

// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });  

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

> **참고:** `async/await` 는 ECMAScript 2017 문법입니다.
> 해당 문법은 인터넷 익스플로러와 오래된 브라우저에서 지원되지 않습니다.