---
title: 'Axios API'
description: 'Axios API参考'
prev_title: 'POST 请求'
prev_link: '/docs/zh/post_example'
next_title: 'Axios 实例'
next_link: '/docs/zh/instance'
---

可以向 `axios` 传递相关配置来创建请求

##### axios(config)

```js
// 发起一个post请求
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
// 在 node.js 用GET请求获取远程图片
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
// 发起一个 GET 请求 (默认请求方式)
axios('/user/12345');
```

### 请求方式别名

为了方便起见，已经为所有支持的请求方法提供了别名。

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

###### 注意
在使用别名方法时， `url`、`method`、`data` 这些属性都不必在配置中指定。
