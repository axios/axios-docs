---
title: 'Axios API'
description: 'Axios API 參考文件'
prev_title: 'POST 請求'
prev_link: '/zhTW/docs/post_example'
next_title: 'Axios 實例'
next_link: '/zhTW/docs/instance'
---

您可以在送出請求時，提供 `axios` 相關的選項。

##### axios(config)

```js
// 送出 POST 請求
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```js
// 在 Node.js 中以 GET 請求取得遠端站臺的圖片
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
// 送出 GET 請求（預設 HTTP 方法）
axios('/user/12345');
```

### Request method aliases

為了方便使用，Axios 提供了所有支援的請求方法函式。

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### NOTE
使用請求方法函式時，您無需在選項中提供 `url`、`method` 及 `data` 屬性。
