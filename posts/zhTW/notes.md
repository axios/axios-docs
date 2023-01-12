---
title: '注意事項'
description: '可不可以多看一下下就好'
prev_title: 'URL-Encoding Bodies'
prev_link: '/zhTW/docs/urlencoded'
---

## Semver

在 Axios 達到 `1.0` 大版本釋出前，小版本之間會有影響相容性的重大變更。例如 `0.5.1` 及 `0.5.4` 版會有相同的 API，但 `0.6.0` 版則不。

## Promise

Axios 需使用原生的 ES6 Promise，[此頁](http://caniuse.com/promises)統整了各瀏覽器實作的支援狀況。
如果您的環境不支援 ES6 Promise，可以使用[替代方法](https://github.com/jakearchibald/es6-promise)。

## TypeScript
Axios 包含了 [TypeScript](http://typescriptlang.org) 的型別定義。
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 其他資源

* [版本紀錄](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [升級指引](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [貢獻指引](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [行為準則](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## 致謝

Axios 很大程度地受到了 [Angular](https://angularjs.org/) 中 [$http service](https://docs.angularjs.org/api/ng/service/$http) 的啟發，Axios 的終極目標是提供一個在 Angular 以外能單獨使用，且類似於 `$http` 的服務。

## 授權條款

[MIT](https://github.com/axios/axios/blob/master/LICENSE)