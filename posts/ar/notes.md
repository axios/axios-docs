---
title: 'ملاحظات'
description: 'بضع ملاحظات أخرى لتقريبها'
prev_title: 'هيئات تشفير عناوين URL'
prev_link: '/docs/urlencoded'
---

## مُواصفات الإدارة الدلالية لنُسخ البرمجيات (semver)

حتى يصل axios إلى إصدار `1.0`، سيتم إصدار التغييرات المعطلة بإصدار ثانوي جديد. على سبيل المثال ، سيكون لـ `0.5.1` و `0.5.4` نفس واجهة برمجة التطبيقات ، ولكن سيكون لـ `0.6.0` تغييرات فاصلة.


## الوعود

يعتمد axios على تنفيذ وعد ES6 الأصلي ليتم [دعمه](http://caniuse.com/promises).
إذا كانت بيئتك لا تدعم وعود ES6 ، فيمكنك تعويضها بـ [polyfill](https://github.com/jakearchibald/es6-promise).

## لغة TypeScript
يشمل axios تعريفات [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## موارد

* [سجل التغيير](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [دليل التحديث](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [النظام الإيكولوجي](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [دليل المساهمة](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [القواعد السلوكية](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## الاعتمادات

إن axios مستوحى بشكل كبير من [خدمة $http](https://docs.angularjs.org/api/ng/service/$http) المتوفرة في [Angular](https://angularjs.org/). في نهاية المطاف ، تعتبر Axios محاولة لتقديم خدمة مستقلة تشبه خدمة `$http` للاستخدام خارج Angular.

## الترخيص

[رخصة MIT](https://github.com/axios/axios/blob/master/LICENSE)