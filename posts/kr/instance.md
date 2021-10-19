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