/**
 * Configuration for the Japanese (ja) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "日本語",
  prefix: "/ja/",
  dir: "ltr",
  lang: "ja",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "ブラウザと Node.js のための Promise ベースの HTTP クライアント",
    subhead: `Axios は、ブラウザと Node.js のための、シンプルなプロミスベースの HTTP クライアントです。
              Axios は、非常に拡張性の高いインターフェイスを持つ小さなパッケージで、
              シンプルに使えるライブラリを提供します。`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": 'Axios 入門',
    "View on GitHub": 'GitHub で表示',
    "Languages": '言語',
    "Open Source": 'オープンソース',
    "Contribute": 'コントリビュート (貢献)',
    "Source on GitHub": 'GitHub 上のソース',
    "Issues": 'イシュー',
    "Pull Requests": 'プルリクエスト',
    "Code of Conduct": '行動規範',
    "Fork on GitHub": 'GitHub でのフォーク',
    "Fork the Website": 'Web サイトをフォークする',
    "Create an Issue": 'イシューを作成する',
    "Next": '次へ',
    "Previous": '前へ',
    "Website Copy Right Footer": 'Web サイトの著作権フッター',
    "View On Github": 'GitHub で表示',
    "Axios Project Copy Right Footer": 'Axios プロジェクトの著作権フッター',
    "License Label Footer": 'ライセンスラベル フッター'
  },
  sidebar: [
    {
      type: "heading",
      text: "はじめに",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "はじめに",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "使用例",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "POST リクエスト",
    },
    {
      type: "heading",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "Axios インスタンス",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "リクエスト設定",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "レスポンス スキーマ",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "デフォルト設定",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "インターセプター",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "エラー処理",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "キャンセル",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "🆕 URL-エンコードボディ",
    },
    {
      type: "link",
      href: "/docs/multipart",
      text: "🆕 マルチパートボディ",
    },
    {
      type: "heading",
      text: "その他",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "特記事項",
    },
    {
      type: "heading",
      text: "コントリビューター",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "行動規範",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "コントリビューター ガイド",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "Axios に貢献する"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "このドキュメントを翻訳する"
    }
  ],
};
