---
title: "Note"
description: "Ultime note prima di concludere"
prev_title: "Corpo con URL-Encoding"
prev_link: "/docs/urlencoded"
---

## Versioni

Finché axios non raggiungerà la versione `1.0`, le modifiche sostanziali saranno rilasciate sotto una nuova versione minore. Ad esempio, le versioni `0.5.1` e `0.5.4` avranno la stessa API, mentre la versione `0.6.0` presenterà modifiche sostanziali.

## Promise

Per essere [supportato](http://caniuse.com/promises), axios dipende dall'implementazione nativa delle Promise dello standard ES6.
Se il tuo ambiente non supporta le Promise di ES6, puoi utilizzare il [polyfill](https://github.com/jakearchibald/es6-promise).

## TypeScript

axios include le definizioni [TypeScript](http://typescriptlang.org).

```typescript
import axios from "axios";
axios.get("/user?ID=12345");
```

## Risorse

- [Changelog](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
- [Come Aggiornare](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
- [Ecosistema](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
- [Come Contribuire](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
- [Codice di Condotta](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## Ringraziamenti

Axios è fortemente ispirata dal [servizio $http](https://docs.angularjs.org/api/ng/service/$http) presente in [Angular](https://angularjs.org/).
In definitiva, Axios è uno sforzo volto a fornire un servizio autonomo simile a `$http` da utilizzare al di fuori di Angular.

## Licenza

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)
