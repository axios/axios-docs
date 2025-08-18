---
title: 'Axiosのスポンサーシップ'
---

私たちのプロジェクトへのご支援をご検討いただきありがとうございます。いただいたご寄付は、 Axios の保守および開発に活用させていただきます。

主要スポンサーの皆様への特典として、選択されたサポートティアに応じて、
私たちのウェブサイトや [Readme.md](https://github.com/axios/axios) にロゴと簡単な情報を掲載する機会をご提供しています。
[OpenCollective.com](https://opencollective.com/axios/contribute)を通じてご寄付いただいた場合、
このプロセスは完全に自動化されており、24時間以内にロゴが追加されます。

ロゴは以下の場所に掲載できます：
- メインページのカルーセル
- ドキュメントの各ページのカルーセル
- リポジトリの [Readme.md](https://github.com/axios/axios) の上部

カルーセルでの掲載位置は以下に依存します：
- スポンサーになってからの新しさ（新規スポンサーは一時的に上位に表示されます）
- 選択されたサポートティア
- 寄付の総額
- 寄付の継続性

[GitHub](https://github.com/sponsors/axios) を通じてご寄付いただいた場合、サポートティアに応じてロゴを掲載したい場合は、
後ほど私たちに連絡いただく必要があります。

### ティア

ティアリストは [Open Collective](https://opencollective.com/axios/contribute) をご覧ください

|                                             |   Bronze   |   Silver    |    Gold     |     Platinum     |
|---------------------------------------------|:----------:|:-----------:|:-----------:|:----------------:|
| メインページ                                   | 小ロゴ      | 中ロゴ       | 大ロゴ       | 特大ロゴ          |
| ドキュメントページ                              |            |             | 中ロゴ       | 大ロゴ           |
| [Readme.md](https://github.com/axios/axios) |            |             | 小ロゴ       | 中ロゴ           |
| スポンサーの GitHub リポジトリからのデータマージ      |            |      +      |      +      |        +         |
| ツールチップのリンクブロック*                     |            |             |      +      |        +         |
| ツールチップの埋め込み Youtube ビデオ*              |            |             |      +      |        +         |
| Readme.md の最大説明文字数                      |            |             |     100     |       150        |

> 注意：
> 追加のリンクブロックとビデオは `sponsors.json` を通じてのみ設定できます

### バッカーティア

カスタムティアを作成することができます。その場合、寄付額でカバーされる既存の最高ティアの特典を受けることができます。
既存ティアを超える追加寄付額は、カルーセルでのスポンサーの並び順を決める際に考慮されます。

### スポンサーロゴ

ロゴは私たちのサーバーにダウンロードされ、最適化されます。空白の余白はトリミングされ、比率を保持したままリサイズされます。
ロゴの幅が高さよりも大幅に大きい場合、テキストキャプションは非表示になり、
ロゴが利用可能なスペース全体を占有します。最大ロゴ高さはすべてのティアで同じです。

### 説明

説明文が提供されていない場合は、スポンサーのサイトのメタタグから自動的に解析を試みます。

### GitHub

Open Collective のプロフィールで GitHub アカウントを設定している場合、
`axios-sponsor` という特別なリポジトリを作成し、ルートに `sponsor.json` を置くことで、スポンサーのプロフィールデータを管理できます。

このファイルのデータは Open Collective のプロフィールとマージされ、広告用の追加情報を提供することができます。

`sponsor.json` の構造は以下の通りです（各フィールドは任意です）：

```json
    {
      "displayName": "Umbrella Corporation",
      "targetLink": "https://umbrellacorp.com/",
      "alt": "Umbrella Corporation",
      "image": "https://fake.com/logo.png",
      "image_dark": "https://fake.com/logo_dark.png",
      "description": "The Umbrella Corporation is a pharmaceutical company",
      "website": "https://google.com/",
      "github": "https://github.com/fakeGitHib",
      "icon": "https://fake.com/icon.png",
      "video": "https://www.youtube.com/embed/isosE4Bowh0",
      "twitter": "https://x.com/profile",
      "showCaption": true,
      "crown": false,
      "hide": false,
      "links": {
        "link1": "https://google.com/",
        "link2": "https://google.com/"
      }
    }
```
24時間ごとにバックエンドがこのデータを取得し、ウェブサイトのスポンサーリストを更新します。
