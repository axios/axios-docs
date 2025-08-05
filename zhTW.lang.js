/**
 * Configuration for the traditional chinese translation
 */

module.exports = {
    // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
    display: "繁體中文",
    prefix: "/zhTW/",
    dir: "ltr",
    lang: "zhTW",
    // `p` stands for `paragraph`. This will contain translations of full text blocks
    p: {
      headline: "Axios 是一個基於 Promise 的 HTTP 客戶端函式庫，可用於瀏覽器及 node.js",
      subhead: `Axios 是一個極為輕量的 HTTP 客戶端函式庫，基於 Promise 開發，且提供了易於擴展的介面。`
    },
    // `t` stands fot `translation`. This will contain translations of single words or phrases
    t: {
      "Get Started": "快速開始",
      "View on GitHub": "至 Github 上查看",
      "Languages": "語言",
      "Open Source": "開放原始碼",
      "Contribute": "貢獻專案",
      "Source on GitHub": undefined,
      "Issues": undefined,
      "Pull Requests": undefined,
      "Code of Conduct": undefined,
      "Fork on GitHub": undefined,
      "Fork the Website": undefined,
      "Create an Issue": undefined,
      "Next": "下一頁",
      "Previous": "上一頁",
      "Website Copy Right Footer": undefined,
      "View On Github": "至 Github 上查看",
      "Axios Project Copy Right Footer": undefined,
      "License Label Footer": undefined
    },
    sidebar: [
      {
        type: "heading",
        text: "快速開始",
      },
      {
        type: "link",
        href: "/docs/intro",
        text: "簡介",
      },
      {
        type: "link",
        href: "/docs/example",
        text: "使用範例",
      },
      {
        type: "link",
        href: "/docs/post_example",
        text: "POST 請求",
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
        text: "Axios 實體",
      },
      {
        type: "link",
        href: "/docs/req_config",
        text: "請求配置",
      },
      {
        type: "link",
        href: "/docs/res_schema",
        text: "回應架構",
      },
      {
        type: "link",
        href: "/docs/config_defaults",
        text: "預設配置",
      },
      {
        type: "link",
        href: "/docs/interceptors",
        text: "攔截器",
      },
      {
        type: "link",
        href: "/docs/handling_errors",
        text: "錯誤處理",
      },
      {
        type: "link",
        href: "/docs/cancellation",
        text: "取消請求",
      },
      {
        type: "link",
        href: "/docs/urlencoded",
        text: "🆕 URL-Encoding 編碼主體",
      },
      {
        type: "link",
        href: "/docs/multipart",
        text: "🆕 Multipart 主體",
      },
      {
        type: "heading",
        text: "其他",
      },
      {
        type: "link",
        href: "/docs/notes",
        text: "注意事項",
      },
      {
        type: "heading",
        text: "致貢獻者",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md",
        text: "行為準則",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/v1.x/COLLABORATOR_GUIDE.md",
        text: "協作指南",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md",
        text: "貢獻 Axios"
      },
      {
        type: "link",
        href: "/docs/translating",
        text: "協助翻譯文件"
      }
    ],
  };
  