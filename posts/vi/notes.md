---
title: 'Ghi chú'
description: 'Đôi dòng ghi chú nữa cho trọn vẹn'
prev_title: 'Phần thân URL-Encoding'
prev_link: '/vi/docs/urlencoded'
---

## Semver

Chừng nào chưa tới bản phát hành `1.0`, mỗi phiên bản thứ yếu mới mà được phát hành ra thì sẽ có thể có [breaking change](https://en.wiktionary.org/wiki/breaking_change). Ví dụ bản `0.5.1` và bản `0.5.4` thì sẽ có cùng API với nhau, nhưng bản `0.6.0` thì sẽ có thể có breaking change.

## Promise

axios nhờ vào [Promise](http://caniuse.com/promises) trong ES6 thì mới chạy được.
Nếu môi trường của bạn không hỗ trợ ES6 Promise, bạn có thể [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios có kèm theo định nghĩa kiểu dữ liệu [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Tài nguyên

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Hướng dẫn nâng cấp](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Hệ sinh thái](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Hướng dẫn đóng góp](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Quy tắc ứng xử](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios lấy cảm hứng sâu sắc từ dịch vụ [$http](https://docs.angularjs.org/api/ng/service/$http) được cung cấp trong [Angular](https://angularjs.org/). Suy cho cùng thì axios là một nỗ lực để cung cấp một dịch vụ standalone kiểu như `$http` cho như cầu sử dụng bên ngoài Angular.

## Giấy phép

[MIT](https://github.com/axios/axios/blob/master/LICENSE)