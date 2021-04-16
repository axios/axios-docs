/**
 * Configuration for the chinese translation
 */

module.exports = {
  display: "中文",
  prefix: "/zh/",
  p: {
    headline: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
    subhead: `Axios 使用简单,包尺寸小且提供了易于扩展的接口。`,
  },
  t: {
    "Get Started": "起步",
    "View on GitHub": "Github 查看",
    "Languages": "语言",
    "Open Source": "开源",
    "Contribute": "贡献",
  },
  sidebar: [
    {
      type: "heading",
      text: "起步",
    },
    {
      type: "link",
      href: "/zh/docs/intro",
      text: "介绍",
    },
    {
      type: "link",
      href: "/zh/docs/example",
      text: "用例",
    },
    {
      type: "link",
      href: "/zh/docs/post_example",
      text: "POST请求",
    },
    {
      type: "heading",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/zh/docs/api_intro",
      text: "Axios API",
    },
    {
      type: "link",
      href: "/zh/docs/instance",
      text: "Axios 实例",
    },
    {
      type: "link",
      href: "/zh/docs/req_config",
      text: "请求配置",
    },
    {
      type: "link",
      href: "/zh/docs/res_schema",
      text: "响应结构",
    },
    {
      type: "link",
      href: "/zh/docs/config_defaults",
      text: "默认配置",
    },
    {
      type: "link",
      href: "/zh/docs/interceptors",
      text: "拦截器",
    },
    {
      type: "link",
      href: "/zh/docs/handling_errors",
      text: "错误处理",
    },
    {
      type: "link",
      href: "/zh/docs/cancellation",
      text: "取消请求",
    },
    {
      type: "link",
      href: "/zh/docs/urlencoded",
      text: "请求体编码",
    },
    {
      type: "heading",
      text: "其他",
    },
    {
      type: "link",
      href: "/zh/docs/notes",
      text: "注意事项",
    },
  ],
};
