---
title: 'Axios API'
description: 'Bản tham khảo Axios API'
prev_title: 'POST Request'
prev_link: '/vi/docs/post_example'
next_title: 'Axios Instance'
next_link: '/vi/docs/instance'
---

Có thể truyền cấu hình có liên quan vào `axios` để tạo ra request.

##### axios(config)

```js
// Gửi một POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    lastName: 'Lý'
    firstName: 'Thường Kiệt',
  }
});
```

```js
// Truy xuất ảnh từ xa bằng GET request trong node.js
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
// Gửi một GET request (chức năng mặc định)
axios('/user/12345');
```

### Alias cho phương thức request

Để cho tiện, thư viện đã cung cấp sẵn alias cho tất cả phương thức request được hỗ trợ.

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])

**LƯU Ý:** Khi sử dụng các phương thức alias, các thuộc tính `url`, `method`, và `data` đều không cần phải được chỉ định trong cấu hình.