---
title: 'Kết cấu Response'
prev_title: 'Cấu hình Request'
prev_link: '/vi/docs/req_config'
next_title: 'Cấu hình Mặc định'
next_link: '/vi/docs/config_defaults'
---

Response của một request thì chứa những thông tin sau.

```js
{
  // `data` là response do server trả về
  data: {},

  // `status` là mã trạng thái HTTP từ hồi đáp của server
  status: 200,

  // `statusText` là thông điệp trạng thái HTTP từ hồi đáp của server
  statusText: 'OK',

  // `headers` là những header HTTP do server trả về cùng
  // Tất cả tên header đều dùng chữ thường và có thể được truy cập bằng ký pháp dấu ngoặc vuông.
  // Ví dụ: `response.headers['content-type']`
  headers: {},

  // `config` là cấu hình được cung cấp tới axios cho request tương ứng
  config: {},

  // `request` là request mà đã gây nên response này
  // Trong node.js thì đây chính là instance ClientRequest cuối cùng (trong chuyển hướng)
  // còn trong trình duyệt thì đây là instance XMLHttpRequest cuối cùng
  request: {}
}
```

Khi sử dụng `then`, bạn sẽ truy xuất response như sau:

```js
axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
```

Khi sử dụng `catch`, hoặc khi truyền [callback từ chối](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) vào làm tham số thứ hai của `then`, thì sẽ lấy được response thông qua đối tượng `error` như có giải thích trong mục [Xử trí lỗi](/vi/docs/handling_errors).