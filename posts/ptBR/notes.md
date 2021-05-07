---
title: 'Notas'
description: 'Mais algumas notas para encerrar'
prev_title: 'Corpos de codificação de URL'
prev_link: '/docs/ptBR/urlencoded'
---

## Semver

Até que o axios atinja a versão `1.0`, grandes mudanças serão lanças em uma versão menor. Como por exemplo `0.5.1` e `0.5.4` terão a mesma API, mas a versão `0.6.0` terá grandes mudanças.
<!--Until axios reaches a `1.0` release, breaking changes will be released with a new minor version. For example `0.5.1`, and `0.5.4` will have the same API, but `0.6.0` will have breaking changes.-->

## Promessas

axios depende da implementação nativa do ES6 para ser [suportad](http://caniuse.com/promises).
<!--axios depends on a native ES6 Promise implementation to be [supported](http://caniuse.com/promises).-->
Se o seu ambiente não suporta o ES6 Promises, você pode utilizar o [polyfill](https://github.com/jakearchibald/es6-promise).
<!--If your environment doesn't support ES6 Promises, you can [polyfill](https://github.com/jakearchibald/es6-promise).-->

## TypeScript
axios inclue [TypeScript](http://typescriptlang.org) definições 
<!--axios includes [TypeScript](http://typescriptlang.org) definitions.-->
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Recursos

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Guida de upgrade](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Guia de contribuição](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Código de contuda](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Créditos

axios é profundamente inspirado no [$http service](https://docs.angularjs.org/api/ng/service/$http) fornecido no [Angular](https://angularjs.org/). Por último, axios é um serviço independente do tipo `$ http` para uso fora do Angular.
axios is heavily inspired by the [$http service](https://docs.angularjs.org/api/ng/service/$http) provided in [Angular](https://angularjs.org/). Ultimately axios is an effort to provide a standalone `$http`-like service for use outside of Angular.

## Licensa

[MIT](https://github.com/axios/axios/blob/master/LICENSE)