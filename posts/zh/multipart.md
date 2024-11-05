---
title: 'Multipart 实体请求'
prev_title: '请求体编码'
prev_link: '/zh/docs/urlencoded'
next_title: '注意事项'
next_link: '/zh/docs/notes'
---

## 使用 `multipart/form-data` 类型发起 `POST` 请求 

### 使用 FormData API

#### 浏览器

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

Axios 会将传入数据序列化，因此使用 Axios 提供的 API 可以无需手动处理 FormData 的数据并实现一样的效果：

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList will be unwrapped as sepate fields
});
```

HTML 表单可以直接作为请求内容来进行传输。

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

由于 node.js 当前不支持从文件创建 `Blob`，因此您可以使用第三方软件包来实现该目的。

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

当 Axios 版本小于 `v1.3.0` 时您必须引入 `form-data` 包。

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 自动序列化

从 `v0.27.0` 版本开始，当请求头中的 Content-Type 是 `multipart/form-data` 时，Axios 支持自动地将普通对象序列化成一个 FormData 对象。

这个示例请求演示了如何将一个数据通过 `FormData` 格式进行提交（浏览器与 Node.js 环境）：

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

Axios FormData 序列化器支持一些特殊的结尾，以执行以下操作：

- `{}` - 通过 `JSON.stringify` 序列化数据
- `[]` - 将 array-like 的对象使用相同的键值来展开为单独的字段

> 提示：默认情况下，展开、扩展操作将在数组和 FileList 对象上使用。
>

FormData 序列化器支持通过 `config.formSerializer: object` 这个参数来传递一些额外的选项，以支持一些特殊的情况：

- `visitor: Function` - 用户定义的处理函数，将递归调用以按照自定义规则将数据对象序列化为`FormData`对象。
- `dots: boolean = false` - 使用点符号而不是括号来序列化数组和对象；
- `metaTokens: boolean = true` - 在 FormData 键值中添加特殊结尾（例如`user{}: '{"name": "John"}'`）。后端的 body-parser 可能会使用此元信息自动将值解析为 JSON。
- `indexes: null|false|true = false` - 控制如何添加索引到打平的 array-like 对象的展开键值中
    - `null` - 不添加中括号（`arr: 1`，`arr: 2`，`arr: 3`）
    - `false`（默认值）- 添加空中括号（`arr[]: 1`，`arr[]: 2`，`arr[]: 3`）
    - `true` - 添加带有索引的中括号（`arr[0]: 1`，`arr[1]: 2`，`arr[2]: 3`）

假设说我们有一个这样的示例对象：

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

接下来这些序列化的步骤将会由 Axios 内置的序列化器自动执行：

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

Axios支持以下别名方法：`postForm`，`putForm`，`patchForm`，这些方法只是对应的 HTTP 方法，其 content-type 头部默认设为`multipart/form-data`。

`FileList` 对象可以被直接传递：

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

所有文件将使用相同的字段名`files[]`发送。
