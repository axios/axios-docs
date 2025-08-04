---
title: 'Примечания'
description: 'Еще пара примечаний в завершение'
prev_title: 'URL-Encoding Bodies'
prev_link: '/ru/docs/urlencoded'
---

## Semver

Пока axios не достигнет версии `1.0`, критические изменения будут выпущены вместе с новой минорной версией. Например, `0.5.1`, and `0.5.4` будут иметь то же самое API, но `0.6.0` будет иметь критические изменения.

## Promises

axios зависит от родной реализации ES6 Promise, [поддерживаемой браузером](http://caniuse.com/promises).
Если ваша среда не поддерживает ES6 Promise, вы можете использовать [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
axios включает [TypeScript](http://typescriptlang.org) типизацию.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Ресурсы

* [Список изменений](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Руководство по обновлению](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Экосистема](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Пособие для соавторов](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

axios вдохновлен [$http service](https://docs.angularjs.org/api/ng/service/$http), представленный в [Angular](https://angularjs.org/). В конечном счете, axios — это попытка предоставить автономный $http-подобный сервис для использования вне Angular.

## Лицензия

[MIT](https://github.com/axios/axios/blob/master/LICENSE)