---
title: 'નોંધ'
description: 'A couple more notes to round it off'
prev_title: 'URL-Encoding Bodies'
prev_link: '/gu/docs/urlencoded'
---

## Semver

Until axios reaches a `1.0` release, breaking changes will be released with a new minor version. For example `0.5.1`, and `0.5.4` will have the same API, but `0.6.0` will have breaking changes.

## Promises

axios depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).
If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios includes [TypeScript](http://typescriptlang.org) definitions.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Resources

* [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [Upgrade Guide](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## Credits

axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [Angular](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of Angular.

## License

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)