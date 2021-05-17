---
title: '注意事项'
description: '一些注意事项'
prev_title: 'URL-Encoding Bodies'
prev_link: '/zh/docs/urlencoded'
---

## 语义化
在axios达到 `1.0` 版本之前，破坏性更改将以新的次要版本发布。 例如 `0.5.1` 和 `0.5.4` 将具有相同的 API，但 `0.6.0` 将具有重大变化。

## Promises

axios 依赖原生的ES6 Promise实现而被支持[被支持](http://caniuse.com/promises)。
如果你的环境不支持 ES6 Promise，你可以使用[polyfill](https://github.com/jakearchibald/es6-promise)。

## TypeScript
axios 包含 [TypeScript](http://typescriptlang.org) 类型定义。
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 资源

* [变更日志](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [升级指南](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [生态系统](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [贡献指南](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [行为准则](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios 深受[Angular](https://angularjs.org/)提供的[$http service](https://docs.angularjs.org/api/ng/service/$http)的启发。
最终，axios提供了一个独立的类似于 `$http` 的服务，以便在Angular之外使用。

## 许可证

[MIT](https://github.com/axios/axios/blob/master/LICENSE)