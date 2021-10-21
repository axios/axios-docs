---
title: 'Config 기본값'
prev_title: '응답 스키마'
prev_link: '/kr/docs/res_schema'
next_title: '인터셉트'
next_link: '/kr/docs/interceptors'
---

## Config 기본값

모든 요청에 적용될 config 기본값을 지정할 수 있습니다.

### 전역 Axios 기본값

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 커스텀 인스턴스 기본값

```js
// 인스턴스를 생성할때 config 기본값 설정하기
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 인스턴스를 만든 후 기본값 변경하기
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Config 우선 순위

Config는 우선 순위에 따라 병합됩니다. [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) 라이브러리에서의 기본값, 인스턴스의 `defaults` 속성, 요청의 `config` 인자를 순서대로 찾습니다. 후자가 전자보다 우선순위가 높습니다. 다음은 예제입니다.

```js
// 라이브러리에서 제공하는 config 기본값을 사용하여 인스턴스 만들기
// 이 때 timeout 값은 라이브러리의 기본값인 '0'입니다.
const instance = axios.create();

// 라이브러리에 대한 timeout 값 재정의
// 이제 모든 요청은 시간 초과 전 2.5초 대기하는 인스턴스를 사용합니다.
instance.defaults.timeout = 2500;

// 시간이 오래 걸리는 요청에 대한 timeout 값 재정의
instance.get('/longRequest', {
  timeout: 5000
});
```
