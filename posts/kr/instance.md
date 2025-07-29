---
title: 'Axios 인스턴스'
prev_title: 'Axios API'
prev_link: '/kr/docs/api_intro'
next_title: '요청 Config'
next_link: '/kr/docs/req_config'
---

### 인스턴스 만들기

사용자 지정 config로 새로운 Axios 인스턴스를 만들수 있습니다.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 인스턴스 메소드

다음은 사용 가능한 인스턴스 메소드입니다. 지정된 config가 인스턴스 config와 결합됩니다.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### 인스턴스를 직접 config 객체로 호출하기

`instance.get()`이나 `instance.post()` 같은 편의 메서드 외에도, Axios 인스턴스를 config 객체로 직접 호출할 수 있습니다. 이는 `axios(config)`와 동일하게 동작하며, 기존 설정으로 요청을 다시 보내야 할 때 유용합니다.

```js
const instance = axios.create({ baseURL: '/api' });

// axios(config)와 동일하게 동작
instance({
  url: '/users',
  method: 'get'
});
```

이 방식은 인증 오류 등에서 재시도 로직을 깔끔하게 구현할 수 있습니다:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // 원래 요청을 다시 보냄
  }

  throw error;
});
```