---
title: '預設設定'
prev_title: 'Response Schema'
prev_link: '/docs/res_schema'
next_title: '攔截器'
next_link: '/docs/interceptors'
---

## 預設設定

您可以指定套用到所有請求的預設設定。

### 全域 axios 預設

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自訂實體預設

```js
// 在建立實體時設定預設
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 在建立實體後更改預設
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 設定優先順序

設定將以優先順序合併。首先為 [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) 中的函式庫預設，接著是實體的 `defaults` 屬性，最後是請求的 `config` 參數。下面有個範例。

```js
// 使用函式庫提供的預設設定建立實體
// 此時逾時設定值為 `0`，與函式庫的預設值相同。
const instance = axios.create();

// 覆寫函式庫的逾時預設值
// 現在所有使用此實體的請求都將在逾時前等待 2.5 秒。
instance.defaults.timeout = 2500;

// 已知此請求將耗費較長時間，故單獨覆寫此請求的逾時設定值。
instance.get('/longRequest', {
  timeout: 5000
});
```
