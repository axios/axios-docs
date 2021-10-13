/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "Türkçe",
  prefix: "/tr/",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "Tarayıcı ve node.js için Promise tabanlı HTTP istemcisi",
    subhead: `Axios tarayıcı ve node.js için basit, promise tabanlı bir HTTP istemcisidir.
              Axios küçük bir pakette kullanımı basit ve genişletilebilir arayüze sahip
              bir kütüphane sağlar.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    "Get Started": "Başlangıç",
    "View on GitHub": "GitHub'da görüntüleyin",
    "Languages": "Diller",
    "Open Source": "Açık Kaynak",
    "Contribute": "Katkıda bulunun",
    "Source on GitHub": "GitHub'daki kaynak kodu",
    "Fork on GitHub": "GitHub'da forklayın",
    "Fork the Website": "Bu Websiteyi Forklayın",
    "Create an Issue": "Hata bildirin",
    "Next": "Sonraki",
    "Previous": "Önceki",
  },
  sidebar: [
    {
      type: "heading",
      text: "Başlangıç",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "Giriş",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "Örnek",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "POST istekleri",
    },
    {
      type: "heading",
      text: "Axios API'si",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "Axios API'si",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "Axios Objesi",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "İstek Konfigürasyonu",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "Yanıt Şeması",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "Konfigürasyon Varsayılanları",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "Yol kesiciler",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "Hataları Ele Alma",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "İptal etme",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "URL-Encoding Gövdeleri",
    },
    {
      type: "heading",
      text: "Diğer",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "Notlar",
    },
    {
      type: "heading",
      text: "Katkıda bulunanlar için",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "Davranış Kuralları",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "Katkıda Bulunma Kılavuzu",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "Axios'a Katkıda Bulunma"
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "Bu dokümentasyonu çevirmek"
    }
  ],
};
