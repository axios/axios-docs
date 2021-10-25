---
title: 'Phần thân URL-Encoding'
prev_title: 'Bãi bỏ Request'
prev_link: '/vi/docs/cancellation'
next_title: 'Ghi chú'
next_link: '/vi/docs/notes'
---

Theo mặc định, axios tuần tự hóa đối tượng Javascript thành `JSON`. Thay vào đó, để gửi dữ liệu theo định dạng `application/x-www-form-urlencoded`, bạn có thể sử dụng một trong các lựa chọn sau đây.

### Trình duyệt

Trong trình duyệt, bạn có thể sử dụng [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API như sau:

```js
const params = new URLSearchParams();
params.append('tham-số-1', 'giá-trị-1');
params.append('tham-số-2', 'giá-trị-2');
axios.post('/foo', params);
```
> Lưu ý rằng không phải trình duyệt nào cũng hỗ trợ `URLSearchParams` (xem [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams)), nhưng có một [polyfill](https://github.com/WebReflection/url-search-params) sẵn dùng đây (hãy đảm bảo là polyfill cho môi trường toàn cục)

Hoặc là bạn có thể biên mã dữ liệu bằng thư viện [`qs`](https://github.com/ljharb/qs):

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

Hoặc là theo cách khác nữa (ES6),

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

#### Query string

Trong node.js, bạn có thể sử dụng module [`querystring`](https://nodejs.org/api/querystring.html) như sau:

```js
const querystring = require('querystring');
axios.post('http://cái-gì-đó.com/', querystring.stringify({ foo: 'bar' }));
```

hoặc ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) từ module ['url'](https://nodejs.org/api/url.html) như sau:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://cái-gì-đó.com/', params.toString());
```

Bạn còn có thể sử dụng thư viện [`qs`](https://github.com/ljharb/qs).

**LƯU Ý:** Nếu bạn cần string-hóa các đối tượng lồng nhau thì tốt nhất hãy dùng thư viện `qs`, vì phương thức `querystring` có vấn đề đã ghi nhận đối với use case đó (https://github.com/nodejs/node-v0.x-archive/issues/1665).

#### Form data

Trong node.js, bạn có thể sử dụng thư viện [`form-data`](https://github.com/form-data/form-data) như sau:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('field_của_tôi', 'giá trị của tôi');
form.append('buffer_của_tôi', new Buffer(10));
form.append('file_của_tôi', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

Hoặc là sử dụng một bộ đón chặn:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```