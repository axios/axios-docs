---
title: 'Notes'
description: 'Quelques notes pour terminer'
prev_title: 'URL-Encoding Bodies'
prev_link: '/fr/docs/urlencoded'
---

## Semver

En attendant qu’Axios arrive à sa version `1.0`, les changements non-rétrocompatibles sont indiqués par une version mineure. Par exemple les versions `0.5.1` et `0.5.4` auront la même API, mais `0.6.0` introduira des changements non-rétrocompatibles.

## Promesses

Axios a besoin d’une implémentation native des promesses ES6 pour être [supporté](http://caniuse.com/promises).
Si votre environnement ne supporte pas les promesses ES6, vous pouvez utiliser un [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript
Axios inclut des définitions de types [TypeScript](http://typescriptlang.org).
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Ressources

* [Changelog](https://github.com/axios/axios/blob/main/CHANGELOG.md)
* [Guide de mise à niveau](https://github.com/axios/axios/blob/main/UPGRADE_GUIDE.md)
* [Écosystème](https://github.com/axios/axios/blob/main/ECOSYSTEM.md)
* [Contribuer à Axios](https://github.com/axios/axios/blob/main/CONTRIBUTING.md)
* [Code de conduite](https://github.com/axios/axios/blob/main/CODE_OF_CONDUCT.md)

## Crédits

Axios est fortement inspiré du [service `$http`](https://docs.angularjs.org/api/ng/service/$http) d’[AngularJS](https://angularjs.org/). Axios est en quelque sorte né de la volonté de proposer un service similaire à `$http` en dehors d’AngularJS.

## Licence

Axios est sous [licence MIT](https://github.com/axios/axios/blob/main/LICENSE).