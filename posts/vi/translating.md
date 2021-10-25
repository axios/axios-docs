---
title: 'Phiên dịch tài liệu này'
---

Nhằm tạo điều kiện cho nhiều người biết dùng Axios hết mức có thể, tài liệu này nên được viết ở nhiều ngôn ngữ khác nhau để ai ai cũng đều có thể đọc được. Chúng tôi bày tỏ lòng biết ơn chân thành với những người mong muốn giúp đỡ phiên dịch tài liệu này. Hướng dẫn dưới đây sẽ chỉ dẫn cách thêm bản dịch cho tài liệu này.

## Cấu trúc

Mọi bản dịch đều gồm có một file cấu hình `{mã-ngôn-ngữ}.lang.js` (ví dụ `en.lang.js` hay `de.lang.js`) và các file tài liệu đã được phiên dịch trong `posts/{mã-ngôn-ngữ}/*.md` (ví dụ `posts/en` hay `posts/de`). `{mã-ngôn-ngữ}` cần được thay thế bằng mã 2 chữ cái [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) cho ngôn ngữ của bạn.

## Cấu hình cho ngôn ngữ của mình

 - Sao chép `en.lang.js`.
 - Đổi tên nó thành `{mã-ngôn-ngữ}.lang.js`.
 - Thay đổi giá trị của `display` thành tên của ngôn ngữ của bạn, bằng ngôn ngữ của bạn. Ví dụ, nếu bạn đang phiên dịch ra tiếng Nhật thì viết là “日本語” chứ không viết “Japanese”.
 - Thêm tiền tố `/{mã-ngôn-ngữ}/` cho các URL trong các file `*.md`.
 - Phiên dịch giá trị trong các trường `p` và `t`.
 - Phiên dịch tất cả thuộc tính có nhãn `text` trong sidebar. **Lưu ý:** Kể từ phiên bản mới nhất của tài liệu này, các liên kết trong sidebar không còn cần được cập nhật nữa.

### Đăng ký cho cấu hình

Sau khi bạn đã làm xong việc cấu hình và phiên dịch các từ ngữ và liên kết trong file cấu hình rồi, bạn sẽ cần phải đăng kí nó trong file cấu hình chung. Để làm vậy, mở `inert.config.js` rồi thêm dòng sau đây gần trên cùng:

```js
const {mã-ngôn-ngữ}Config = require('./{mã-ngôn-ngữ}.config.js');
```

Đương nhiên là nhớ thay `{mã-ngôn-ngữ}` bằng đúng mã [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1), thay luôn cho cả tên biến nữa).

Giờ bạn kiếm hằng `langs`. Nếu hằng này nằm ở bên trên phát biểu `require` kia của bạn, thì di chuyển phát biểu `require` đấy lên bên trên nó. Rồi thêm đối tượng như sau vào danh sách trong hằng `langs`:

```js
const langs = [
  ...
  {
    name: 'Cái tên nào đấy đặc trưng xác định ngôn ngữ của bạn, ví dụ "Tiếng Việt" hay "日本語"',
    prefix: "Cũng là cái tiền tố như trong file cấu hình",
    config: {mã-ngôn-ngữ}Config // là đối tượng cấu hình mà bạn vừa mới import lúc nãy
  }
  ...
];
```

Bây giờ bạn có thể bắt đầu phiên dịch file rồi. Sao chép thư mục `posts/en` vào một thư mục mới `posts/{mã-ngôn-ngữ}` và phiên dịch tất cả file (tất nhiên đừng dịch tên file).

Nếu bạn gặp phải bất kì trục trặc gì, cứ thoải mái [tạo và đưa ra vấn đề](https://github.com/axios/axios-docs/issues/new/choose).