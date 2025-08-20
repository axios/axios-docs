---
title: '預設配置'
prev_title: '回應架構'
prev_link: '/zhTW/docs/res_schema'
next_title: '攔截器'
next_link: '/zhTW/docs/interceptors'
---

## 設置預設設定

可以設置預設配置，該配置將套用至每個請求。

### 全域預設配置

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 自訂實體預設配置

```js
// 建立實體時指派預設配置
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 修改實體建立時所指派的預設配置
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### 配置先後順序

配置將會以設置的先後順序來進行合併，最先的是函式庫預設值，可以在 [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js) 中找到，接著是實體的 `defaults` 屬性，最後是請求的 `config` 配置，後者將會覆蓋前者，如下例：

```js
// 建立一個實體並套用預設配置
// 在此時，timeout 配置為 `0` 正如函式庫所預設
const instance = axios.create();

// 複寫函式庫所預設的 timeout 時長
// 此後，所有透過該實體的請求，都將會在請求逾時前等待 2.5 秒
instance.defaults.timeout = 2500;

// 若知曉請求將花費更多時間，在此次請求中複寫 timeout 時長 
instance.get('/longRequest', {
  timeout: 5000
});
```
