---
title: 'Axios API'
description: 'Axios API 參照'
prev_title: 'POST 請求'
prev_link: '/zhTW/docs/post_example'
next_title: 'Axios 實體'
next_link: '/zhTW/docs/instance'
---

透過傳遞配置參數給 `axios` 來建立請求

##### axios(config)

```js
// 建立一個 POST 請求
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
// 在 node.js 中建立 GET 請求取得遠端圖片
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
// 建立一個 GET 請求（預設請求方法）
axios('/user/12345');
```

### 請求方法別名

為了方便使用，所有支援的請求方法都提供了別名

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### 注意
使用別名方法時， `url`、`method`、`data` 皆不須提供配置參數。
