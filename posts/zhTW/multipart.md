---
title: 'Multipart 主體'
prev_title: 'URL-Encoding 主體'
prev_link: '/zhTW/docs/urlencoded'
next_title: '注意事項'
next_link: '/zhTW/docs/notes'
---

## 使用 `multipart/form-data` 傳送資料

### 使用 FormData API

#### 瀏覽器

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

也可以透過 axios 內部的序列化機制和對應的縮寫方法，達成相同的效果，如下例：

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList 將會作為單獨的欄位展開
});
```

HTML 表單可以作為請求負載(payload)直接傳遞請求

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

目前 node.js 尚不支援讀取檔案為 `Blob`，但你可以透過第三方套件達成此目的

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

針對 `v1.3.0` 之前的版本，必須引入 `form-data` 套件。

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 自動序列化

自 `v0.27.0` 開始，若請求標頭 `Content-Type` 之屬性設置為 `multipart/form-data`，Axios 將會自動序列化物件為 FormData 物件。
下述請求將會以 FormData 格式提交資料：

```js
import axios from 'axios';

axios.post('https://httpbin.org/post', {
  user: {
    name: 'Dmitriy'
  },
  file: fs.createReadStream('/foo/bar.jpg')
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data})=> console.log(data));
```

Axios FormData 序列化器支援特殊結尾符號，如下所示：
- `{}` - 使用 JSON.stringify 序列化數值
- `[]` - 展開陣列類型的物件轉換為具有同欄位名稱的獨立欄位

> 注意：
> 展開/收合 預設將套用在陣列和檔案列表物件

FormData 序列化器額外支援透過設定 `config.formSerializer: object` 屬性，用以處理罕見情況。

- `visitor: Function` - 透過以下自訂規則，自定義函數 visitor 將會被遞迴的呼叫以此來序列化資料物件為 `FormData` 物件

- `dots: boolean = false` - 序列化陣列及物件時，使用點表示法而不是括號表示法

- `metaTokens: boolean = true` - 在 FormData 的鍵值添加特殊結尾符號（如：`user{}: '{"name": "John"}'`）
後端的 body-parser 能夠透過此元資料來自動序列化資料為 JSON。

- `indexes: null|false|true = false` - 控制索引如何被添加至展開的陣列類的物件

    - `null` - 不會添加方括號 (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`（預設） - 添加空方括號 (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - 添加具有索引的方括號  (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)
    
假設我們有一個如下的物件：

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

下列的操作皆會觸發 Axios 內部的自動序列化機制：

```js
const formData= new FormData();
formData.append('x', '1');
formData.append('arr[]', '1');
formData.append('arr[]', '2');
formData.append('arr[]', '3');
formData.append('arr2[0]', '1');
formData.append('arr2[1][0]', '2');
formData.append('arr2[2]', '3');
formData.append('users[0][name]', 'Peter');
formData.append('users[0][surname]', 'Griffin');
formData.append('users[1][name]', 'Thomas');
formData.append('users[1][surname]', 'Anderson');
formData.append('obj2{}', '[{"x":1}]');
```

```js
import axios from 'axios';

axios.post('https://httpbin.org/post', {
  'myObj{}': {x: 1, s: "foo"},
  'files[]': document.querySelector('#fileInput').files 
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data})=> console.log(data));
```

Axios 支援下列縮寫方法：`postForm`、`putForm`、`patchForm`，這些縮寫方法只是將對應 HTTP 方法的標頭屬性 content-type 預設為 `multipart/form-data`

可以直接傳遞 `FileList` 物件：

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

所有將被傳送的檔案將會有相同的欄位名稱：`files[]`。
