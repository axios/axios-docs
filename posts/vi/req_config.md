---
title: 'Cấu hình Request'
prev_title: 'Axios Instance'
prev_link: '/vi/docs/instance'
next_title: 'Kết cấu Response'
next_link: '/vi/docs/res_schema'
---


Đây là các tùy chọn cấu hình sẵn có để tạo ra request. Chỉ có `url` là bắt buộc. Nếu `method` không được chỉ định thì request sẽ mặc định sử dụng `GET`.

```js
{
  // `url` là server URL sẽ được sử dụng cho request.
  url: '/user',

  // `method` là phương thức request được dùng khi tạo ra request.
  method: 'get', // mặc định

  // `baseURL` sẽ được thêm đằng trước `url` trừ phi `url` là đường dẫn tuyệt đối.
  // Để cho tiện, có thể thiết đặt `baseURL` cho instance của axios
  // rồi truyền 'URL tương đối' vào vào phương thức của instance đó.
  baseURL: 'https://tên-miền-nào-đó.com/api',

  // `transformRequest` cho phép thay đổi dữ liệu request trước khi nó được gửi tới server.
  // Chỉ có thể áp dụng được cho phương thức request 'PUT', 'POST', 'PATCH' và 'DELETE'.
  // Hàm cuối cùng trong mảng này phải trả về string hoặc trả về instance
  // của Buffer, ArrayBuffer, FormData hoặc Stream.
  // Bạn có thể chỉnh sửa đối tượng headers.
  transformRequest: [function (data, headers) {
    // Làm bất cứ điều gì mình muốn để biến đổi dữ liệu.
    return data;
  }],

  // `transformResponse` cho phép thay đổi dữ liệu response trước khi
  // nó được truyền vào then/catch.
  transformResponse: [function (data) {
    // Làm bất cứ điều gì mình muốn để biến đổi dữ liệu.
    return data;
  }],

  // `headers` là những header tự đặt để được gửi đi
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` là các tham số URL để được gửi cùng với request.
  // Phải là đối tượng thông thường hoặc đối tượng URLSearchParams.
  // LƯU Ý: tham số mà là null hoặc undefined thì không được kết xuất ra URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` là một trường để thiết lập tuần tự hóa của `params`.
  // Bạn có thể sử dụng trường serialize để sử dụng một hàm tuần tự hóa tùy chỉnh.
  // Bạn có thể sử dụng trường encode để sử dụng một hàm mã hóa tùy chỉnh.
  // Nếu bạn thiết lập một hàm vào `paramsSerializer` như trước đây, hàm mã hóa mặc định từ axios sẽ được gán vào trường encode.
  // (vd https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: {
    serialize: (params) => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    encode: (str) => {
      return encodeURIComponent(str)
    }
  },

  // `data` là dữ liệu làm phần thân request để được gửi đi.
  // Chỉ áp dụng được cho phương thức request 'PUT', 'POST', 'DELETE', và 'PATCH'.
  // Khi `transformRequest` không được đặt thì `data` phải là một trong các kiểu sau đây:
  // - string, đối tượng thông thường, ArrayBuffer, ArrayBufferView, URLSearchParams;
  // - riêng cho Trình duyệt: FormData, File, Blob;
  // - riêng cho Node.js: Stream, Buffer.
  data: {
    firstName: 'Lợi'
  },
  
  // Bạn cũng có thể viết trực tiếp string vào `data`
  // theo định dạng `application/x-www-form-urlencoded`.
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` để chỉ định số mili-giây trước khi request hết giờ.
  // Nếu thời gian request lâu hơn `timeout` thì request sẽ được ngưng giữa chừng.
  timeout: 1000, // mặc định là `0` (không bao giờ hết giờ)

  // `withCredentials` biểu thị liệu việc tạo ra request cross-site `Access-Control`
  // thì có cần sử dụng credential hay không.
  // Xem thêm https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
  // và https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
  withCredentials: false, // mặc định

  // `adapter` cho phép tự đặt quá trình xử trí request, giúp cho việc kiểm thử dễ dàng hơn.
  // Trả về một promise trong đó cung cấp một response hợp lệ (xem lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` biểu thị rằng cần sử dụng ủy quyền HTTP Basic, trong đó có cung cấp credential.
  // Cái này sẽ thiết đặt header `Authorization`, ghi đè bất kì
  // header `Authorization` tự đặt nào trước đó mà bạn có thiết đặt thông qua `headers`.
  // Xin lưu ý rằng chỉ có ủy quyền HTTP Basic mới có thể cấu hình được thông qua tham số này.
  // Đối với Bearer token và tương tự, thì thay vào đó hãy tự đặt header `Authorization`.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` biểu thị kiểu dữ liệu mà server sẽ hồi đáp, giá trị khả dĩ cho
  // tùy chọn này là: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // riêng cho trình duyệt: 'blob'.
  responseType: 'json', // mặc định

  // `responseEncoding` biểu thị biên mã dùng để giải mã response (riêng cho Node.js).
  // Lưu ý: sẽ bị bỏ qua nếu `responseType` là 'stream' hoặc request từ phía trình duyệt.
  responseEncoding: 'utf8', // mặc định

  // `xsrfCookieName` là tên (key) của cái cookie dùng làm giá trị cho xsrf token.
  xsrfCookieName: 'XSRF-TOKEN', // mặc định

  // `xsrfHeaderName` là tên (key) của cái http header mang giá trị xsrf token.
  xsrfHeaderName: 'X-XSRF-TOKEN', // mặc định

  // `onUploadProgress` cho phép xử trí sự kiện tiến độ của việc tải lên.
  // Riêng cho trình duyệt.
  onUploadProgress: function (progressEvent) {
    // Làm bất cứ điều gì mình muốn với sự kiện tiến độ native.
  },

  // `onDownloadProgress` cho phép xử trí sự kiện tiến độ của việc tải xuống.
  // Riêng cho trình duyệt.
  onDownloadProgress: function (progressEvent) {
    // Làm bất cứ điều gì mình muốn với sự kiện tiến độ native.
  },

  // `maxContentLength` định nghĩa kích thước lớn nhất cho phép của nội dung http response
  // theo đơn vị byte. Riêng cho Node.js.
  maxContentLength: 2000,

  // `maxBodyLength` định nghĩa kích thước lớn nhất cho phép của nội dụng http request
  // theo đơn vị byte. Riêng cho Node.js.
  maxBodyLength: 2000,

  // `validateStatus` là hàm để quyết định rằng liệu với mã trạng thái HTTP response
  // đã cho thì phân giải hay từ chối promise.
  // Nếu `validateStatus` trả về `true` (hoặc hàm được đặt thành `null` hay `undefined`)
  // thì promise sẽ được phân giải; nếu không thì promise sẽ được từ chối.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // mặc định
  },

  // `maxRedirects` định nghĩa số lần chuyển hướng tối đa để bám theo trong Node.js.
  // Nếu được đặt thành 0 thì sẽ không bám theo chuyển hướng nào cả.
  maxRedirects: 5, // mặc định

  // `socketPath` định nghĩa UNIX Socket để được dùng trong node.js.
  // vd '/var/run/docker.sock' để gửi request tới docker daemon.
  // Chỉ có thể chỉ định một trong hai tùy chọn `socketPath` và `proxy`.
  // Nếu cả hai đều được chỉ định thì chỉ mỗi `socketPath` là được sử dụng.
  socketPath: null, // mặc dịnh

  // `httpAgent` và `httpsAgent` định nghĩa tác thể tự đặt để được sử dụng khi thực hiện
  // request trên http và https tương ứng lần lượt, trong node.js. Điều này cho phép thêm
  // vào những tùy chọn như `keepAlive` vốn mặc định không được bật dùng.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` định nghĩa tên host, cổng, và giao thức của proxy server.
  // Bạn cũng có thể định nghĩa proxy của mình bằng cách dùng biến môi trường
  // quy ước `http_proxy` với `https_proxy`. Nếu bạn đang sử dụng biến môi trường
  // cho cấu hình proxy của mình, bạn cũng có thể định nghĩa một biến môi trường
  // `no_proxy` với nội dung là danh sách các tên miền phân cách bằng dấu phẩy mà
  // không cần được proxy.
  // Dùng `false` để tắt dùng proxy, bỏ qua biến môi trường.
  // `auth` biểu thị rằng cần dùng ủy quyền HTTP Basic để kết nối đến proxy, trong đó
  // có cung cấp crendential.
  // Điều này sẽ thiết đặt header `Proxy-Authorization`, ghi đè bất kì
  // header `Authorization` tự đặt nào trước đó mà bạn có thiết đặt thông qua `headers`.
  // Nếu proxy server sử dụng HTTPS thì bạn phải đặt giao thức thành `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` chỉ định token bãi bỏ có thể được dùng để bãi bỏ request.
  // (xem mục Bãi bỏ Request bên dưới để biết thêm chi tiết)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` biểu thị rằng liệu phần thân response có nên được giải nén tự động
  // hay không. Nếu thiết đặt thành `true` thì cũng sẽ gỡ header `content-encoding`
  // ra khỏi các đối tượng response của tất cả các response được giải nén.
  // - Riêng cho Node.js (vì XHR không thể tắt giải nén được)
  decompress: true // mặc định

}
```
