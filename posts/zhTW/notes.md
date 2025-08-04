---
title: '注意事項'
description: '一些額外補充的事項'
prev_title: 'URL 編碼主體'
prev_link: '/zhTW/docs/urlencoded'
---

## 語意化版本
在 axios 到達 `1.0` 版本之前，重大變更將會以新的次要版本發佈，例如 `0.5.1`, 和 `0.5.4` 將具有相同 API，但 `0.6.0` 將具有破壞性變更.

## Promises
axios 依賴原生的 ES6 Promises 實作因而[被支援](http://caniuse.com/promises)。
若你的環境不支援 ES6 Promises，可以使用 [polyfill](https://github.com/jakearchibald/es6-promise)。

## TypeScript
axios 包含 [TypeScript](http://typescriptlang.org) 類型定義。
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 其他資源

* [變更日誌](https://github.com/axios/axios/blob/main/CHANGELOG.md)
* [升級指南](https://github.com/axios/axios/blob/main/UPGRADE_GUIDE.md)
* [生態系](https://github.com/axios/axios/blob/main/ECOSYSTEM.md)
* [貢獻指南](https://github.com/axios/axios/blob/main/CONTRIBUTING.md)
* [行為準則](https://github.com/axios/axios/blob/main/CODE_OF_CONDUCT.md)

## Credits
axios 深受 [Angular](https://angularjs.org/) 所提供的 [$http](https://docs.angularjs.org/api/ng/service/$http) 函式庫啟發。axios 的目標是提供一個可獨立於 Angular 使用的類 `$http` 函式庫。

## 開放原始碼授權

[MIT](https://github.com/axios/axios/blob/main/LICENSE)