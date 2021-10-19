---
title: '참고'
description: '도움이 될 몇가지 참고'
prev_title: 'URL-인코딩 바디'
prev_link: '/kr/docs/urlencoded'
---

## Semver

Axios가 `1.0` 배포 할때까지, 마이너 버전에서 주요 변경사항이 발생할 수도 있습니다. 예를들어 `0.5.1`와 `0.5.4`는 동일한 API를 가지고 있지만, `0.6.0`에서는 호환되지 않을 수 있습니다.

## Promises

Axios를 사용하려면 Promise API가 [지원](http://caniuse.com/promises)되어야 합니다. 
만약 ES6 Promises를 지원하지 않는 환경에서는 [polyfill](https://github.com/jakearchibald/es6-promise)을 사용할 수 있습니다.


## TypeScript
axios는 [TypeScript](http://typescriptlang.org) 정의가 포함되어 있습니다.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## 리소스

* [변경 로그](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [업그레이드 가이드](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [에코시스템](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [기여 가이드](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [행동 지침](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## 크레딧

Axios는 [Angular](https://angularjs.org/)의 [$http 서비스](https://docs.angularjs.org/api/ng/service/$http)에서 큰 영감을 받았습니다. Axios의 궁극적인 목표는 Angular 외부에서 사용할 수 있는 독립된 `$http`를 제공하는 것 입니다.


## 라이센스

[MIT](https://github.com/axios/axios/blob/master/LICENSE)