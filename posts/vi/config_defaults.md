---
title: 'Cấu hình Mặc định'
prev_title: 'Kết cấu Response'
prev_link: '/vi/docs/res_schema'
next_title: 'Bộ đón chặn'
next_link: '/vi/docs/interceptors'
---

## Cấu hình Mặc định

Bạn có thể chỉ định cấu hình mặc định sẽ được áp dụng cho mọi request.

### Mặc định cho toàn cục

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Mặc định cho instance tự đặt

```js
// Đặt cấu hình mặc định lúc tạo ra instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Sửa đổi cấu hình trị mặc định sau khi tạo ra instance
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Thứ tự ưu tiên của cấu hình

Cấu hình sẽ được hợp lại theo thứ tự ưu tiên. Thứ tự lần lượt là mặc định của thư viện được đặt trong [`lib/defaults/index.js`](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js#L40), tiếp đến là thuộc tính `defaults` của instance, rồi cuối cùng là đối số `config` cho request. Cái đi sau sẽ được ưu tiên hơn cái đi trước. Sau đây là một ví dụ.

```js
// Tạo ra một instance dùng cấu hình mặc định do thư viện cung cấp
// Tại thời điểm này giá trị cấu hình timeout là `0` giống như trong mặc định của thư viện
const instance = axios.create();

// Override giá trị timeout mặc định của thư viện
// Giờ tất cả request mà dùng instance này thì sẽ chờ 2,5 giây trước khi tính hết thời gian
instance.defaults.timeout = 2500;

// Override giá trị timeout cho riêng request này vì ta biết trước là nó tốn thời gian dài
instance.get('/request-lâu', {
  timeout: 5000
});
```
