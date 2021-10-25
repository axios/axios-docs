/**
 * Configuration for the Vietnamese translation
 */

 module.exports = {
    fontSans: "Cabin",
    title: "Tài liệu Axios",
    // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
    display: "Tiếng Việt",
    prefix: "/vi/",
    // `p` stands for `paragraph`. This will contain translations of full text blocks
    p: {
      headline: "Thư viện HTTP client dựa trên Promise dành cho trình duyệt và node.js",
      subhead: `Axios là một thư viện HTTP client dựa trên Promise dành cho trình duyệt và node.js.
                Axios có cách sử dụng rất đơn giản, cùng với gói kích thước nhỏ và giao diện lập trình dễ dàng mở rộng.`,
    },
    // `t` stands fot `translation`. This will contain translations of single words or phrases
    t: {
      "Get Started": "Bắt đầu",
      "View on GitHub": "Xem trên GitHub",
      "Languages": "Ngôn ngữ",
      "Open Source": "Mã nguồn mở",
      "Contribute": "Đóng góp",
      "Source on GitHub": "Mã nguồn trên Github",
      "Fork on GitHub": "Fork trên Github",
      "Fork the Website": "Fork website này",
      "Create an Issue": "Tạo issue",
      "Issues": "Danh sách issue",
      "Pull Requests": "Danh sách pull request",
      "Code of Conduct": "Quy tắc ứng xử",
      "Next": "Tiếp theo",
      "Previous": "Trước đó",
    },
    sidebar: [
      {
        type: "heading",
        text: "Bắt đầu",
      },
      {
        type: "link",
        href: "/docs/intro",
        text: "Giới thiệu",
      },
      {
        type: "link",
        href: "/docs/example",
        text: "Ví dụ",
      },
      {
        type: "link",
        href: "/docs/post_example",
        text: "POST Request",
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
        text: "Axios Instance",
      },
      {
        type: "link",
        href: "/docs/req_config",
        text: "Cấu hình Request",
      },
      {
        type: "link",
        href: "/docs/res_schema",
        text: "Kết cấu Response",
      },
      {
        type: "link",
        href: "/docs/config_defaults",
        text: "Cấu hình Mặc định",
      },
      {
        type: "link",
        href: "/docs/interceptors",
        text: "Bộ đón chặn",
      },
      {
        type: "link",
        href: "/docs/handling_errors",
        text: "Xử trí lỗi",
      },
      {
        type: "link",
        href: "/docs/cancellation",
        text: "Bãi bỏ request",
      },
      {
        type: "link",
        href: "/docs/urlencoded",
        text: "Phần thân URL-Encoding",
      },
      {
        type: "heading",
        text: "Cái khác",
      },
      {
        type: "link",
        href: "/docs/notes",
        text: "Ghi chú",
      },
      {
        type: "heading",
        text: "Đóng góp",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
        text: "Quy tắc ứng xử",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
        text: "Hướng dẫn người đóng góp",
      },
      {
        type: "link",
        href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
        text: "Đóng góp cho Axios"
      },
      {
        type: "link",
        href: "/docs/translating",
        text: "Phiên dịch tài liệu này"
      }
    ],
  };
  