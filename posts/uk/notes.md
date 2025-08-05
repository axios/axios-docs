---
title: 'Замітки'
description: 'Ще пару приміток, щоб завершити'
prev_title: 'URL-кодування тіла'
prev_link: '/uk/docs/urlencoded'
---

## Semver

Поки axios не досягне версії `1.0`, останні зміни будуть випущені з новою другою версією. Наприклад, `0.5.1` та `0.5.4` матимуть однаковий API, але `0.6.0` матиме останні зміни.

## Promises

axios залежить від рідної реалізації ES6 Promise, що [підтримується браузером](http://caniuse.com/promises).
Якщо ваше середовище не підтримує Promise ES6, ви можете використати [поліфіл](https://github.com/jakearchibald/es6-promise).

## TypeScript

axios містить визначення [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Resources

* [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [Посібник з оновлення](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
* [Екосистема](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [Посібник для співавторів](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## Credits

axios надихається [$http service](https://docs.angularjs.org/api/ng/service/$http), яка надається в [Angular](https://angularjs.org/). Зрештою axios-це спроба надати окрему послугу, подібну до $http, для використання за межами Angular.

## Ліцензія

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)