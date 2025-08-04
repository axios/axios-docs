---
title: 'Notlar'
description: 'Tamamlamak için birkaç not daha'
prev_title: 'URL-Encoding Gövdeleri'
prev_link: '/tr/docs/urlencoded'
---

## Semver

Axios, bir '1.0' sürümüne ulaşana kadar, yeni bir küçük (minor) sürümle en önemli değişiklikler yayınlanacak. Örneğin, `0.5.1` ve `0.5.4` aynı API'ye sahip olacak, ancak `0.6.0`, kesintili değişikliklere sahip olacak.

## Promise

axios, [desteklenecek](http://caniuse.com/promises) yerel bir ES6 Promise implementasyonudur.
Ortamınız ES6 Promiselerini desteklemiyorsa [çoklu dolgulama (polyfill)](https://github.com/jakearchibald/es6-promise) yapabilirsiniz.

## TypeScript
axios [TypeScript](http://typescriptlang.org) tanımları içerir.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Kaynaklar

* [Changelog](https://github.com/axios/axios/blob/main/CHANGELOG.md)
* [Upgrade Guide](https://github.com/axios/axios/blob/main/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/main/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/main/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/main/CODE_OF_CONDUCT.md)

## Teşekkürler

axios, [Angular](https://angularjs.org/)'ın içerisinde bulunan [$http hizmetinden](https://docs.angularjs.org/api/ng/service/$http) büyük ölçüde ilham almıştır. Sonuç olarak, axios, Angular dışında kullanım için bağımsız bir `$http` benzeri bir hizmet sağlama çabasıdır.

## Lisans

[MIT](https://github.com/axios/axios/blob/main/LICENSE)
