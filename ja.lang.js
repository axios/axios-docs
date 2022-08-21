/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "日本語",
  prefix: "/ja/",
  dir: "ltr",
  lang: "ja",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "ブラウザと node.js のための Promise ベースの HTTP クライアント",
    subhead: `Axios はブラウザと node.js のためのシンプルな Promise ベースの HTTP クライアントです。
              Axios は非常に拡張性の高いインターフェイスを持つ小さなパッケージで、
              シンプルに使えるライブラリを提供します。`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": "はじめに",
    "View on GitHub": "GitHub で見る",
    "Languages": "言語",
    "Open Source": "オープンソース",
    "Contribute": "貢献する",
    "Source on GitHub": "GitHub 上のソース",
    "Issues": "Issue",
    "Pull Requests": "プルリクエスト",
    "Code of Conduct": "行動規範",
    "Fork on GitHub": "GitHub でフォークする",
    "Fork the Website": "Web サイトをフォークする",
    "Create an Issue": "Issue を作成する",
    "Next": "次へ",
    "Previous": "前へ",
    "Website Copy Right Footer": undefined,
    "View On Github": "GitHub で見る",
    "Axios Project Copy Right Footer": undefined,
    "License Label Footer": undefined
  },
  sidebar: [
    {
      type: "heading",
      text: "はじめに",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "イントロダクション",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "例",
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
      text: "リクエストの設定",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "レスポンスのスキーマ",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "設定の初期値",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "インターセプタ",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "例外処理",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "キャンセル",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URLエンコードのボディ",
    },
    {
      type: "heading",
      text: "その他",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "注記",
    },
    {
      type: "heading",
      text: "貢献者",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "行動規範",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "協力者のガイド",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "Axios への貢献"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "ドキュメントを翻訳する"
    }
  ],
};
