---
title: '選項預設值'
prev_title: '回應結構'
prev_link: '/zhTW/docs/res_schema'
next_title: 'Interceptor'
next_link: '/zhTW/docs/interceptors'
---

## 選項預設值

您可以指定選項的預設值，如此一來每則發出每則請求時都會套用。

### 全域 axios 預設值

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自訂 axios 實例預設值

```js
// 在建立 axios 實例時指定其選項預設值
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// axios 實例建立後仍可變更其選項預設值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 選項的疊加

選項的內容會依疊加的順序改變。舉例而言，每次請求時的 `config` 參數會有最高的優先性，其次為該 Axios 實例的 `default` 屬性，最後才是 [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) 中的預設值。參考以下範例：

```js
// 建立一個照搬 Axios 函式庫選項預設值的實例
// 此時逾時限制的值與函式庫預設的相同，都是 `0`
const instance = axios.create();

// 覆寫 Axios 函式庫預設的逾時限制
// 從此之後所有透過 `instance` 發出的請求，其逾時限制都是 2.5 秒
instance.defaults.timeout = 2500;

// 因為預期會耗時更久，所以覆寫此次請求的逾時限制
instance.get('/longRequest', {
  timeout: 5000
});
```
