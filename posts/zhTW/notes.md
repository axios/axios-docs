---
title: '備註'
description: '幾項補充說明'
prev_title: 'URL-Encoding Bodies'
prev_link: '/docs/urlencoded'
---

## 語意化版本

在 axios 發布 `1.0` 版本前，重大變更將發布於新的次版本。例如 `0.5.1` 和 `0.5.4` 的 API 相同，但 `0.6.0` 將會有重大變更。

## Promises

axios 依賴原生的 ES6 [Promise](http://caniuse.com/promises) 實作。
如果您的環境不支援 ES6 Promises，您可以使用 [polyfill](https://github.com/jakearchibald/es6-promise)。

## TypeScript

axios 包含 [TypeScript](http://typescriptlang.org) 定義。

```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 資源

* [更新日誌](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [升級指南](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [生態系](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [貢獻指南](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [行為準則](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## 銘謝

axios 很大程度上受到 [Angular](https://angularjs.org/) 提供的 [$http 服務](https://docs.angularjs.org/api/ng/service/$http)啟發。axios 是為了提供一個在 Angular 外也能使用，類似於 `$http` 的獨立服務。

## 授權條款

[MIT](https://github.com/axios/axios/blob/master/LICENSE)