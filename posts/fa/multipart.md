---
title: 'بدنه‌های چندبخشی'
prev_title: 'بدنه‌های URL-Encoding'
prev_link: '/docs/urlencoded'
next_title: 'یادداشت‌ها'
next_link: '/docs/notes'
---

## ارسال داده به صورت `multipart/form-data`

### استفاده از API FormData

#### مرورگر

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

همان نتیجه را می‌توان با استفاده از سریالایزر داخلی Axios و روش کوتاه مربوطه به دست آورد:

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList به عنوان فیلدهای جداگانه باز می‌شود
});
```

فرم HTML می‌تواند مستقیماً به عنوان payload درخواست ارسال شود

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

از آنجا که node.js در حال حاضر از ایجاد یک `Blob` از یک فایل پشتیبانی نمی‌کند، می‌توانید از یک بسته شخص ثالث برای این منظور استفاده کنید.

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

برای Axios قدیمی‌تر از `v1.3.0` باید بسته `form-data` را وارد کنید.

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 سریالایز خودکار

از `v0.27.0`، Axios از سریالایز خودکار شیء به یک FormData
شیء پشتیبانی می‌کند اگر هدر Content-Type درخواست به `multipart/form-data` تنظیم شده باشد.

درخواست زیر داده‌ها را به فرمت FormData ارسال خواهد کرد (مرورگر و Node.js):

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

سریالایزر FormData Axios از برخی پسوندهای خاص برای انجام عملیات‌های زیر پشتیبانی می‌کند:

- `{}` - مقدار را با JSON.stringify سریالایز کنید
- `[]` - شیء شبیه به آرایه را به عنوان فیلدهای جداگانه با کلید یکسان باز کنید

> توجه: 
> عملیات باز کردن/گسترش به طور پیش‌فرض بر روی آرایه‌ها و اشیاء FileList استفاده خواهد شد

سریالایزر FormData از گزینه‌های اضافی از طریق ویژگی `config.formSerializer: object` برای مدیریت موارد نادر پشتیبانی می‌کند:

- `visitor: Function` - تابع بازدیدکننده تعریف شده توسط کاربر که به صورت بازگشتی برای سریالایز کردن شیء داده به یک شیء `FormData` با پیروی از قوانین سفارشی فراخوانی می‌شود.

- `dots: boolean = false` - استفاده از نشانه‌گذاری نقطه‌ای به جای براکت‌ها برای سریالایز کردن آرایه‌ها و اشیاء;

- `metaTokens: boolean = true` - افزودن پسوند خاص (مثلاً `user{}: '{"name": "John"}'`) در کلید FormData. 
تجزیه‌کننده بدنه در سمت سرور می‌تواند از این اطلاعات متا برای تجزیه خودکار مقدار به عنوان JSON استفاده کند.

- `indexes: null|false|true = false` - کنترل می‌کند که چگونه شاخص‌ها به کلیدهای باز شده اشیاء شبیه به آرایه اضافه شوند

    - `null` - براکت اضافه نکنید (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`(پیش‌فرض) - براکت‌های خالی اضافه کنید (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - براکت‌ها با شاخص‌ها اضافه کنید  (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)
    
فرض کنید شیء زیر را داریم:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

مراحل زیر توسط سریالایزر Axios به صورت داخلی اجرا خواهد شد:

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

Axios از روش‌های کوتاه زیر پشتیبانی می‌کند: `postForm`, `putForm`, `patchForm`
که فقط روش‌های HTTP مربوطه با هدر content-type تنظیم شده به `multipart/form-data` هستند.

شیء `FileList` می‌تواند مستقیماً ارسال شود:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

همه فایل‌ها با نام‌های فیلد یکسان ارسال خواهند شد: `files[]`;
