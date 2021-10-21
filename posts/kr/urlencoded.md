---
title: 'URL-인코딩 바디'
prev_title: '요청 취소'
prev_link: '/kr/docs/cancellation'
next_title: '참고'
next_link: '/kr/docs/notes'
---

보통 Axios는 JSON을 사용합니다. `application/x-www-form-urlencoded` 포맷으로 데이터를 전송하려면, 다음 옵션 중 하나를 사용할 수 있습니다.

### 브라우저

브라우저에서는 [`URLSearchParams`](https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams) API를 사용할 수 있습니다:

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> 모든 브라우저가 `URLSearchParams`을 지원하지 않지만([caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)을 확인하세요), [polyfill](https://github.com/WebReflection/url-search-params)을 사용할 수 있습니다(polyfill이 전역 환경에 있는지 확인하세요).

대안으로, [`qs`](https://github.com/ljharb/qs) 라이브러리를 사용하여 데이터를 인코딩 할 수 있습니다:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

또는 ES6도 있습니다.

```js
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

### Node.js

#### 쿼리 스트링

node.js에서는 [`querystring`](https://nodejs.org/api/querystring.html) 모듈을 사용할 수 있습니다:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

['url module'](https://nodejs.org/api/url.html)의 ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams)도 있습니다:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

또는 [`qs`](https://github.com/ljharb/qs) 라이브러리를 사용할 수 있습니다.

###### 참고

`querystring` 메소드의 해당 케이스(https://github.com/nodejs/node-v0.x-archive/issues/1665) 처럼 중첩된 객체를 문자열화하는 경우, `qs` 라이브러리가 적합합니다.

#### Form data

node.js에서 다음과 같이 [`form-data`](https://github.com/form-data/form-data) 라이브러리를 사용할 수 있습니다:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

인터셉터도 대안입니다:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```