---
title: 'Bãi bỏ Request'
prev_title: 'Xử trí lỗi'
prev_link: '/vi/docs/handling_errors'
next_title: 'Phần thân URL-Encoding'
next_link: '/vi/docs/urlencoded'
---

Bạn có thể bãi bỏ request bằng cách sử dụng *token bãi bỏ*

> API token bãi bỏ trong axios là dựa trên [đề xuất cancelable promise](https://github.com/tc39/proposal-cancelable-promises) đã bị thu hồi.

Bạn có thể tạo ra một token bãi bỏ bằng cách sử dụng phương thức factory `CancelToken.source` như sau:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request đã được bãi bỏ', thrown.message);
  } else {
    // xử trí lỗi
  }
});

axios.post('/user/12345', {
  name: 'tên mới'
}, {
  cancelToken: source.token
})

// bãi bỏ request (tham số message là tùy chọn)
source.cancel('Thao tác đã được người dùng bãi bỏ.');
```

Bạn còn có thể tạo ra một token bãi bỏ bằng cách truyền một hàm thực thi vào constructor `CancelToken`:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // Hàm thực thi nhận vào một tham số là hàm bãi bỏ, lưu nó lại
    cancel = c;
  })
});

// bãi bỏ request
cancel();
```

> Lưu ý: bạn có thể dùng chung một token bãi bỏ để bãi bỏ nhiều request.
