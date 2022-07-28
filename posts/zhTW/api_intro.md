---
title: 'Axios API'
description: 'Axios API 參考說明'
prev_title: 'POST 請求'
prev_link: '/docs/post_example'
next_title: 'Axios 實體'
next_link: '/docs/instance'
---

將相關設定傳遞給 `axios` 以送出請求。

##### axios(config)

```js
// 傳送 POST 請求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: '小明',
    lastName: '王'
  }
});
```

```js
// 在 Node.js 中傳送 GET 請求以取得遠端圖片
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// 傳送 GET 請求 (預設方法)
axios('/user/12345');
```

### 請求方法別名

為了方便，所有支援的請求方法皆有提供別名。

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### 提醒

使用別名方法時，`url`、`method`，和 `data` 不需在設定中指定。