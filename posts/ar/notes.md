---
title: 'ملاحظات'
description: 'بعض الملاحظات الإضافية لإكمالها'
prev_title: 'أجسام URL-Encoded'
prev_link: '/ar/docs/urlencoded'
---

## Semver

حتى يصل axios إلى إصدار `1.0`، سيتم إصدار التغييرات المكسورة مع إصدار ثانوي جديد. على سبيل المثال `0.5.1` و `0.5.4` سيكون لهما نفس API، لكن `0.6.0` سيكون له تغييرات مكسورة.

## الوعود

يعتمد axios على تنفيذ ES6 Promise أصلي ليكون [مدعومًا](http://caniuse.com/promises).
إذا كان بيئتك لا تدعم ES6 Promises، يمكنك [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
يشمل axios تعريفات [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## الموارد

* [سجل التغييرات](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [دليل الترقية](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
* [النظام البيئي](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [دليل المساهمة](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [مدونة قواعد السلوك](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## الإسناد

يستوحى axios بشكل كبير من خدمة [$http](https://docs.angularjs.org/api/ng/service/$http) المقدمة في [Angular](https://angularjs.org/). في النهاية axios هو جهد لتوفير خدمة مستقلة تشبه `$http` للاستخدام خارج Angular.

## الترخيص

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)