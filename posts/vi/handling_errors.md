---
title: 'Xử trí lỗi'
prev_title: 'Bộ đón chặn'
prev_link: '/vi/docs/interceptors'
next_title: 'Bãi bỏ Request'
next_link: '/vi/docs/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // Request đã được tạo ra và server đã hồi đáp với một mã trạng thái
      // nằm ra ngoài tầm 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Request đã được tạo ra nhưng không nhận được hồi đáp nào
      // Trong trình duyệt, `error.request` là instance của XMLHttpRequest
      // còn trong node.js thì nó là instance của http.ClientRequest
      console.log(error.request);
    } else {
      // Điều gì đó đã xảy ra trong bước thiết lập request rồi gây nên lỗi
      console.log('Lỗi', error.message);
    }
    console.log(error.config);
  });
```

Sử dụng tùy chọn cấu hình `validateStatus`, bạn có thể định nghĩa mã HTTP nào nên được tính là lỗi để ném ra.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Chỉ phân giải nếu như mã trạng thái thấp hơn 500
  }
})
```

Sử dụng phương thức `toJSON` để lấy đối tượng có thêm nhiều thông tin hơn về lỗi HTTP.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```