---
title: 'Notas'
description: 'Mais algumas notas para encerrar'
prev_title: 'Corpos de codificação de URL'
prev_link: '/ptBR/docs/urlencoded'
---

## Semver

Até que o axios atinja a versão `1.0`, grandes mudanças serão lanças em uma versão menor. Como por exemplo `0.5.1` e `0.5.4` terão a mesma API, mas a versão `0.6.0` terá grandes mudanças.

## Promessas

O axios depende da implementação nativa do ES6 para ser [suportado](http://caniuse.com/promises).
Se o seu ambiente não suporta o ES6 Promises, você pode utilizar o [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
O axios incluem definições para o [TypeScript](http://typescriptlang.org)
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Recursos

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Guia de upgrade](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Ecossistema](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Guia de contribuição](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Código de contuda](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Créditos

Axios é profundamente inspirado no [$http service](https://docs.angularjs.org/api/ng/service/$http) fornecido no [Angular](https://angularjs.org/). Por último, axios é um serviço independente de tipo `$ http` para uso fora do Angular.

## Licensa

[MIT](https://github.com/axios/axios/blob/master/LICENSE)
