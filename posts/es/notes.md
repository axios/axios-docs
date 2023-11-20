---
title: "Notas"
description: "Un par mas de notas de clarificación"
prev_title: "Cuerpos de solicitud codificados como URL"
prev_link: "/es/docs/urlencoded"
---

## Semver

Hasta que axios alcance una version `1.0`, los cambios significativos serán liberados con una nueva versión menor. Por ejemplo `0.5.1`, y `0.5.4` tendrán la misma API, pero `0.6.0` tendrá cambios mayores.

## Promesas

Axios depende de una implementación nativa de las Promesas de ES6 [verificar soporte](http://caniuse.com/promises).
Si tu entorno no soporta las Promesas de ES6, puedes usar [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript

axios incluye definiciones [TypeScript](http://typescriptlang.org).

```typescript
import axios from "axios";
axios.get("/user?ID=12345");
```

## Recursos

- [Cambios](https://github.com/axios/axios/blob/master/CHANGELOG.md)
- [Guía de Actualización](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
- [Ecosistema](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
- [Guía de Contribución](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
- [Códido de Conducta](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Créditos

Axios está fuertemente inspirado por el [servicio $http](https://docs.angularjs.org/api/ng/service/$http) provisto en [Angular](https://angularjs.org/). En definitiva, axios es un esfuerzo para proveer una versión independiente del servicio `$http` fuera de Angular.

## Licencia

[MIT](https://github.com/axios/axios/blob/master/LICENSE)
