---
title: '注記'
description: '最後にもういくつか注意点を'
prev_title: 'URLエンコードのボディ'
prev_link: '/ja/docs/urlencoded'
---

## SemVer

axios が `1.0` のリリースに到達するまでは、破壊的変更は新しいマイナーバージョンでリリースされます。例えば、 `0.5.1` と `0.5.4` は同じ API ですが、 `0.6.0` には破壊的変更があります。

## Promise

axios はネイティブの ES6 Promise の実装が [サポートされていること](http://caniuse.com/promises) に左右されます。もし ES6 Promise がサポートされていない環境である場合は [polyfill](https://github.com/jakearchibald/es6-promise) を使ってください。

## TypeScript
axios には [TypeScript](https://www.typescriptlang.org/ja/) の定義が含まれています。
```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## リソース

* [更新履歴](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [アップグレードのガイド](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [エコシステム](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [貢献のガイド](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [行動規範](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)

## クレジット

axios は [Angular](https://angularjs.org/) で提供されている [$http サービス](https://docs.angularjs.org/api/ng/service/$http) に大きく触発されています。最終的に axios は Angular の外で使えるスタンドアロンの $http のようなサービスを提供するための試みです。

## ライセンス

[MIT](https://github.com/axios/axios/blob/master/LICENSE)