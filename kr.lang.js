/**
 * Configuration for the english (original) translation
 */

 module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "한국어",
  prefix: "/kr/",
  dir: "ltr",
  lang: "kr",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "브라우저와 node.js를 위한 Promise 기반 HTTP 클라이언트 라이브러리",
    subhead: `Axios는 브라우저와 node.js를 위한 간단한 Promise 기반 HTTP 클라이언트입니다.
              Axios는 확장 가능한 인터페이스를 가진 작은 패키지로 사용하기 쉬운 라이브러리를 제공합니다.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": '시작하기',
    "View on GitHub": 'GitHub 보러가기',
    "Languages": '언어',
    "Open Source": '오픈소스',
    "Contribute": '기여하기',
    "Source on GitHub": 'GitHub 소스',
    "Fork on GitHub": 'GitHub 포크',
    "Fork the Website": '웹사이트 포크',
    "Create an Issue": undefined,
    "Next": '다음',
    "Previous": '이전',
    "Website Copy Right Footer": '웹사이트 저작권 푸터',
    "View On Github": 'Github 보러가기',
    "Axios Project Copy Right Footer": 'Axios 프로젝트 저작권 푸터',
    "License Label Footer": '라이센스 라벨 푸터'
  },
  sidebar: [
    {
      type: "heading",
      text: "시작하기",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "소개",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "예제",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "POST 요청",
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
      text: "Axios 인스턴스",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "요청 Config",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "응답 스키마",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "Config 기본값",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "인터셉터",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "에러 핸들링",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "요청 취소",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URL-인코딩 바디",
    },
    {
      type: "heading",
      text: "더보기",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "참고",
    },
    {
      type: "heading",
      text: "기여자",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "행동 지침",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "공동작업자 가이드",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "Axios 기여하기"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "해당 문서 번역하기"
    }
  ],
};
