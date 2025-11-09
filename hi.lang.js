/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "हिंदी",
  prefix: "/hi/",
  dir: "ltr",
  lang: "hi",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  //
  p: {
    headline: "ब्राउज़र और node.js के लिए Promise आधारित HTTP क्लाइंट",
    subhead: `Axios ब्राउज़र और node.js के लिए एक सरल प्रॉमिस-आधारित HTTP क्लाइंट है। Axios एक छोटे पैकेज में एक बहुत ही एक्सटेंसिबल इंटरफ़ेस के साथ उपयोग में आसान लाइब्रेरी प्रदान करता है।`,
    sponsors: `<p>हमारे प्रोजेक्ट का समर्थन करने के लिए धन्यवाद।</p>
               <p>अगर आपके द्वारा चुना गया स्तर यह लाभ प्रदान करता है, तो आपको 24 घंटों के भीतर स्वचालित रूप से इस सूची में जोड़ दिया जाएगा।</p>
               <div class="social"><a class="link" href="/docs/sponsor">और पढ़ें...</a></div>
              `,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": 'शुरु करें',
    "View on GitHub": 'GitHub पर देखें',
    "Languages": 'भाषाऐं',
    "Open Source": 'Open Source',
    "Contribute": 'योगदान करें',
    "Source on GitHub": 'GitHub पर स्रोत',
    "Issues": 'समस्याऐं',
    "Pull Requests": 'undefined',
    "Code of Conduct": 'Code of Conduct',
    "Fork on GitHub": "GitHub में फोर्क करें",
    "Fork the Website": "Website फोर्क करें",
    "Create an Issue": "समस्या बनाऐं",
    "Next": 'अगला',
    "Previous": "पिछला",
    "Website Copy Right Footer": 'Website कॉपीराईट फुटर',
    "View On Github": 'GitHub पर देखें',
    "Axios Project Copy Right Footer": 'Axios प्रोजेक्ट कॉपीराईट फुटर',
    "License Label Footer": 'लाईसेंस लेबल फुटर',
    "Sponsors": 'प्रायोजक',
    "Become a sponsor": 'प्रायोजक',
    "Gold Sponsors": 'गॊल्ड प्रायोजक',
  },
  sidebar: [
    {
      type: "heading",
      text: "शुरु करें",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "भूमिका",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "उदाहरण",
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
      text: "Axios API भूमिका",
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
      text: "त्रुटियों से निपटना",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "रद्द करना",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "🆕 URL-एन्कोडिंग",
    },
    {
      type: "link",
      href: "/docs/multipart",
      text: "🆕 मल्टीपार्ट बॉडीज़",
    },
    {
      type: "heading",
      text: "अन्य",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "नोट्स",
    },
    {
      type: "heading",
      text: "सहयोजक",
    },
    {
      type: "link",
      href: "/docs/sponsor",
      text: "Axios के प्रायोजक",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md",
      text: "आचार संहिता",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/COLLABORATOR_GUIDE.md",
      text: "सहयोगी मार्गदर्शिका",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md",
      text: "Axios में योगदान",
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "इन दस्तावेज़ों का अनुवाद",
    },
  ],
};
