---
title: 'Notes'
prev_title: 'URL-Ähnlich Kodierte Anfragenkörper'
prev_link: '/de/docs/urlencoded'
---

## Semver

Bis Axios eine Version `1.0` erreicht, können Breaking Changes auch in Minor-Versionen stattfinden. Zum Beispiel sind `0.5.1` und `0.5.4` kompatibel, aber `0.6.0` moglicherweise nicht mehr.

## Promises

Axios benötigt, dass die Promise-API [unterstützt wird](http://caniuse.com/promises).
Falls ihre Umgebung dieser Voraussetzung nicht nachkommt, können Sie diesen [Polyfill](https://github.com/jakearchibald/es6-promise) verwenden.

## TypeScript
Axios beinhaltet [TypeScript](http://typescriptlang.org)-Definitionen.
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## Ressourcen

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Upgrade Guide](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## Credits

Axios wurde stark vom [`$http` Service](https://docs.angularjs.org/api/ng/service/$http) in [Angular](https://angularjs.org/) inspiriert. Das ultimative Ziel von Axios ist eine außerhalb von Angular verwendbare Version des `$http` Service zu erstellen.

## License

[MIT](https://github.com/axios/axios/blob/master/LICENSE)
