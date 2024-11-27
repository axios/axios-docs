---
title: 'マルチパートボディ'
prev_title: 'URL-エンコードボディ'
prev_link: '/ja/docs/urlencoded'
next_title: '特記事項'
next_link: '/ja/docs/notes'
---

## `multipart/form-data` としてデータを POST する

### FormData API の使用

#### ブラウザ

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

Axios 内部シリアライザーと対応するショートハンドメソッドを使用して、同じ結果を得ることができます:

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList は別々のフィールドとしてアンラップされます。
});
```

HTML フォームをリクエストペイロードとして直接渡すことができます

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

Node.js は現在、ファイルからの `Blob` の作成をサポートしていないので、この目的のためにサードパーティのパッケージを使用することができます。

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

Axios `v1.3.0` より古いバージョンでは、`form-data` パッケージをインポートする必要があります。

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 自動シリアライゼーション

`v0.27.0` 以降、Axios はリクエストの Content-Type ヘッダに `multipart/form-data` が設定されている場合、
FormData オブジェクトへの自動シリアライズをサポートします。

以下のリクエストでは、FormData 形式でデータを送信します（ブラウザと Node.js）:

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

Axios FormData シリアライザーは、以下の操作を行うための特別な語尾をいくつかサポートしています:

- `{}` - JSON.stringify で値をシリアライズします
- `[]` - 配列のようなオブジェクトを、同じキーを持つ別のフィールドとして展開します

> 注:
> unwrap/expand 操作は、デフォルトで配列と FileList オブジェクトに使用されます。

FormData シリアライザーは、`config.formSerializer: object` プロパティにより、稀なケースを処理するための追加オプションをサポートしています:

- `visitor: Function` - ユーザー定義の visitor 関数で、カスタムルールに従ってデータオブジェクトを
`FormData` オブジェクトにシリアライズするために再帰的に呼び出されるものです。

- `dots: boolean = false` - 配列やオブジェクトのシリアライズには、括弧の代わりにドット記法を使用します;

- `metaTokens: boolean = true` - FormData キーに特殊な語尾 (例: `user{}: '{"name": "John"}'`) を追加します。
バックエンドの body-parser は、このメタ情報を使用して、値を JSON として自動的に解析する可能性があります。

- `indexes: null|false|true = false` - `flat` な配列のようなオブジェクトの、ラップされていないキーにどのようにインデックスを追加するかを制御します

    - `null` - 大括弧を付けない (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`(デフォルト) - 空の大括弧を追加する (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - 括弧を付けて索引を付ける (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)

このようなオブジェクトがあるとします:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

以下の手順は、Axios シリアライザーが内部で実行するものです:

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

Axios は以下のショートカットメソッドをサポートしています: `postForm`, `putForm`, `patchForm` は、
対応する http メソッドに content-type ヘッダを `multipart/form-data` に設定したものです。

`FileList` オブジェクトを直接渡すことができます:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

すべてのファイルは、同じフィールド名: `files[]` で送信されます;
