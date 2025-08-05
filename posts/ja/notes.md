---
title: '特記事項'
description: '最後にもういくつかの注意点をあげておきます'
prev_title: 'URL-エンコードボディ'
prev_link: '/ja/docs/urlencoded'
---

## Semver

Axios が `1.0` のリリースに到達するまでは、新しいマイナーバージョンで破壊的な変更がリリースされます。例えば、`0.5.1` と `0.5.4` は同じ API ですが、`0.6.0` は破壊的な変更があります。

## Promises

Axios は、ネイティブの ES6 Promise の実装に依存し、[サポート](http://caniuse.com/promises) されています。
ES6 Promise をサポートしていない環境では、[ポリフィル](https://github.com/jakearchibald/es6-promise) を利用できます。

## TypeScript

Axios には、[TypeScript](http://typescriptlang.org/) の定義が含まれています。

```typescript
import axios from 'axios';
axios.get('/user?ID=12345');
```

## リソース

* [変更履歴](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [アップグレード ガイド](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
* [エコシステム](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [コントリビューター ガイド](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [行動規範](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## クレジット

Axios は、[Angular](https://angularjs.org/) で提供される [$http サービス](https://docs.angularjs.org/api/ng/service/$http) に大きく影響を受けています。 最終的に Axios は、Angular の外で使えるスタンドアロンの `$http` のようなサービスを提供するための取り組みです。

## ライセンス

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)
