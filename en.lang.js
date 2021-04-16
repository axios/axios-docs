/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "English",
  prefix: "/",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "Promise based HTTP client for the browser and node.js",
    subhead: `Axios is a simple promise based HTTP client for the browser and node.js.
              Axios provides a simple to use library in a small package with a very
              extensible interface.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {},
  sidebar: [
    {
      type: "heading",
      text: "Getting Started",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "Introduction",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "Example",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "POST Requests",
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
      text: "The Axios Instance",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "Request Config",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "Response Schema",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "Config Defaults",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "Interceptors",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "Handling Errors",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "Cancellation",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URL-Encoding Bodies",
    },
    {
      type: "heading",
      text: "Other",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "Notes",
    },
  ],
};
