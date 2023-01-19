/**
 * Configuration for Traditional Chinese translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "正體中文",
  prefix: "/zhTW/",
  dir: "ltr",
  lang: "zhTW",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "Axios 是一款簡易的 HTTP 客戶端函式庫，可在瀏覽器及 Node.js 環境中使用。",
    subhead: `Axios 尺寸小巧，且提供了擴充彈性強大的介面。`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": "開始使用",
    "View on GitHub": "GitHub",
    "Languages": "語言",
    "Open Source": "開放原始碼",
    "Contribute": "貢獻協作",
    "Source on GitHub": "GitHub 儲存庫",
    "Issues": "Issue",
    "Pull Requests": "Pull Request",
    "Code of Conduct": "行為準則",
    "Fork on GitHub": "在 GitHub 上 fork 本專案",
    "Fork the Website": "在 GitHub 上 fork 本網站",
    "Create an Issue": "反應問題",
    "Next": "下一頁",
    "Previous": "上一頁",
    "Website Copy Right Footer": "本網站：© 2020 至今 John Jakob \"Jake\" Sarjeant，版權所有。已獲准許使用。",
    "View On Github": "在 GitHub 上檢視網站原始碼",
    "Axios Project Copy Right Footer": "Axios 專案：© 2014 至今 Matt Zabriskie，版權所有。",
    "License Label Footer": "本專案遵循"
  },
  sidebar: [
    {
      type: "heading",
      text: "開始使用",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "介紹",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "使用示例",
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
      text: "Axios 實例",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "請求選項",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "回應結構",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "選項預設值",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "Interceptor",
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
      text: "URL-Encoding Bodies",
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
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "行為準則",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "協作指引",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "貢獻 Axios"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "翻譯本文件"
    }
  ],
};
