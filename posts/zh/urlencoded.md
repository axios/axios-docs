---
title: '请求体编码'
prev_title: '取消请求'
prev_link: '/zh/docs/cancellation'
next_title: 'Multipart 实体请求'
next_link: '/zh/docs/multipart'
---

默认情况下，axios将 JavaScript 对象序列化为 `JSON` 。 要以`application/x-www-form-urlencoded`格式发送数据，您可以使用以下选项之一。

### 浏览器

在浏览器中，可以使用[`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API，如下所示：

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

> 请注意，不是所有的浏览器(参见 [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))都支持 `URLSearchParams` ，但是可以使用[polyfill](https://github.com/WebReflection/url-search-params) (确保 polyfill 全局环境)

或者, 您可以使用[`qs`](https://github.com/ljharb/qs) 库编码数据:

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

或者用另一种方式 (ES6),

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

在 node.js 中， 可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模块，如下所示:

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

或者从['url module'](https://nodejs.org/api/url.html)中使用['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams)，如下所示:

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

您也可以使用 [`qs`](https://github.com/ljharb/qs) 库。

###### 注意
如果需要对嵌套对象进行字符串化处理，则最好使用 `qs` 库，因为 querystring 方法在该用例中存在已知问题(https://github.com/nodejs/node-v0.x-archive/issues/1665)。

#### Form data

在 node.js, 您可以使用 [`form-data`](https://github.com/form-data/form-data) 库，如下所示:

```js
const FormData = require('form-data');
 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form, { headers: form.getHeaders() })
```

或者, 使用一个拦截器:

```js
axios.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    Object.assign(config.headers, config.data.getHeaders());
  }
  return config;
});
```

### 🆕 自动序列化

当请求头中的 `content-type` 是  `application/x-www-form-urlencoded` 时，Axios 将自动地将普通对象序列化成 urlencoded 的格式。

在浏览器和 `node.js` 环境中都适用：

```js
const data = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
};

await axios.post('https://postman-echo.com/post', data,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
);
```

服务器接收到的数据就像是这样：

```js
  {
    x: '1',
    'arr[]': [ '1', '2', '3' ],
    'arr2[0]': '1',
    'arr2[1][0]': '2',
    'arr2[2]': '3',
    'arr3[]': [ '1', '2', '3' ],
    'users[0][name]': 'Peter',
    'users[0][surname]': 'griffin',
    'users[1][name]': 'Thomas',
    'users[1][surname]': 'Anderson'
  }
````

如果您的服务器框架的请求体解析器（例如`express.js`的`body-parser`）支持嵌套对象解码，则其接收到的数据将与您提交的数据一样。

以下是一个`express.js`的服务器示例，它将会把接收到的数据作为响应返回：

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
