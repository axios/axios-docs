---
title: 'URL 編碼主體'
prev_title: '取消請求'
prev_link: '/zhTW/docs/cancellation'
next_title: 'Multipart 主體'
next_link: '/zhTW/docs/multipart'
---

Axios 預設將把 JavaScript 物件傳換為 `JSON`。若要改以 `application/x-www-form-urlencoded` 格式傳送資料，可以透過以下方式達成：

### 瀏覽器

在瀏覽器中，可以使用 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) API 如下：

```js
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```
> 須注意並非所有瀏覽器皆支援 `URLSearchParams` (詳 [caniuse.com](http://www.caniuse.com/#feat=urlsearchparams))，你也可以使用
> [polyfill](https://github.com/WebReflection/url-search-params) (要確保作用於全域作用域)。

除此之外，你也可以使用 [`qs`](https://github.com/ljharb/qs) 函式庫

```js
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```

或使用 ES6 語法

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

在 node.js 中，可以使用 [`querystring`](https://nodejs.org/api/querystring.html) 模組如下：

```js
const querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
```

或使用 ['url 模組'](https://nodejs.org/api/url.html) 中的 ['URLSearchParams'](https://nodejs.org/api/url.html#url_class_urlsearchparams) 類別，如下例：

```js
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('http://something.com/', params.toString());
```

也可以使用 [`qs`](https://github.com/ljharb/qs) 函式庫
> 注意：如果需要將巢狀物件字串化，推薦使用 `qs`，因應 `querystring` 方法在此使用案例中有已知問題(https://github.com/nodejs/node-v0.x-archive/issues/1665)。

### 🆕 自動序列化

若標頭屬性 `Content-Type` 設置為 `application/x-www-form-urlencoded`，axios 會把物件自動地序列化為 urlencoded 格式
此功能支援瀏覽器及 `node.js`：

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

伺服器將會收到以下格式：
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

若你使用的伺服器框架調用的請求解析器支援巢狀物件解析 (例如：`express.js` 中的 `body-parser`) ，
你將會自動接收到如同發送方同樣的物件。

Echo server 範例 (`express.js`)：

```js
  var app = express();
  
  app.use(bodyParser.urlencoded({ extended: true })); // support url-encoded bodies
  
  app.post('/', function (req, res, next) {
     res.send(JSON.stringify(req.body));
  });

  server = app.listen(3000);
```
