---
title: 'Multipart Bodies'
prev_title: 'URL-Encoding Bodies'
prev_link: '/gu/docs/urlencoded'
next_title: 'Notes'
next_link: '/gu/docs/notes'
---

## Posting data as `multipart/form-data`

### Using FormData API

#### Browser

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)

```
આંતરિક Axios serializer અને અનુરૂપ શોર્ટહેન્ડ પદ્ધતિનો ઉપયોગ કરીને સમાન પરિણામ પ્રાપ્ત કરી શકાય છે:

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList will be unwrapped as separate fields
});
```

HTML form can be passed directly as a request payload. 

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

node.js હાલમાં ફાઇલમાંથી `Blob` બનાવવાનું સમર્થન કરતું નથી, તેથી તમે આ હેતુ માટે બીજા પેકેજનો ઉપયોગ કરી શકો છો.

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

`v1.3.0` કરતા જૂના Axios માટે તમારે `form-data` પેકેજ આયાત કરવું આવશ્યક છે.


```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 Automatic serialization

`v0.27.0` થી શરૂ કરીને, જો વિનંતી સામગ્રી-પ્રકાર હેડર `multipart/form-data` પર સેટ કરેલ હોય, તો Axios ફોર્મડેટા ઑબ્જેક્ટમાં સ્વચાલિત object serialization સપોર્ટ કરે છે.

નીચેની વિનંતી ફોર્મડેટા ફોર્મેટ (બ્રાઉઝર અને નોડ.જેએસ) માં ડેટા સબમિટ કરશે:

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

Axios FormData serializer supports some special endings to perform the following operations:

- `{}` - serialize the value with JSON.stringify
- `[]` - unwrap the array-like object as separate fields with the same key 

> નોંધ: 
> unwrap/expand operation will be used by default on arrays and FileList objects

FormData serializer supports additional options via `config.formSerializer: object` property to handle rare cases:

- `visitor: Function` - user-defined visitor function that will be called recursively to serialize the data object
to a `FormData` object by following custom rules.

- `dots: boolean = false` - use dot notation instead of brackets to serialize arrays and objects;

- `metaTokens: boolean = true` - add the special ending (e.g `user{}: '{"name": "John"}'`) in the FormData key. 
The back-end body-parser could potentially use this meta-information to automatically parse the value as JSON.

- `indexes: null|false|true = false` - controls how indexes will be added to unwrapped keys of `flat` array-like objects

    - `null` - don't add brackets (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`(default) - add empty brackets (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - add brackets with indexes  (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)

Let's say we have an object like this one:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

Axios serializer દ્વારા આંતરિક રીતે નીચેના પગલાં લેવામાં આવશે:

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

Axios નીચેની શોર્ટકટ પદ્ધતિઓને સપોર્ટ કરે છે: 
`postForm`, `putForm`, `patchForm`
which are just the corresponding http methods with the content-type header preset to `multipart/form-data`.

`FileList` object can be passed directly:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

બધી ફાઇલો સમાન ફીલ્ડ નામો સાથે મોકલવામાં આવશે.: `files[]`;