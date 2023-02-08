/**
 * Configuration for the english (original) translation
 */

module.exports = {
  // Language display name. MUST BE THE SAME AS IN [inert.config.js].custom.langs
  display: "عربي",
  prefix: "/ar/",
  dir: "rtl",
  lang: "ar",
  // `p` stands for `paragraph`. This will contain translations of full text blocks
  p: {
    headline: "وعد علي أساس عميل HTTP يستند إلى المتصفح و node.js",
    subhead: `Axios هو عميل HTTP بسيط يستند إلى الوعد للمتصفح و node.js.
    يوفر Axios مكتبة سهلة الاستخدام في حزمة صغيرة بواجهة قابلة للتوسيع للغاية.`,
  },
  // `t` stands fot `translation`. This will contain translations of single words or phrases
  t: {
    ابدأ: undefined,
    "عرض على GitHub": undefined,
    اللغات: undefined,
    "مفتوح المصدر": undefined,
    ساهم: undefined,
    "المصدر على GitHub": undefined,
    الشكاوي: undefined,
    "طلبات السحب": undefined,
    "القواعد السلوكية": undefined,
    "تفرع على GitHub": undefined,
    "تفرع الموقع": undefined,
    "انشاء شكوي": undefined,
    التالي: undefined,
    السابق: undefined,
    "تذييل حقوق النشر للموقع": undefined,
    "عرض على GitHub": undefined,
    "تذييل حقوق النشر لمشروع Axios": undefined,
    "تذييل تسمية الترخيص": undefined,
  },
  sidebar: [
    {
      type: "heading",
      text: "بدء",
    },
    {
      type: "link",
      href: "/docs/intro",
      text: "المقدمة",
    },
    {
      type: "link",
      href: "/docs/example",
      text: "مثال",
    },
    {
      type: "link",
      href: "/docs/post_example",
      text: "طلبات POST",
    },
    {
      type: "heading",
      text: "واجهة برمجة تطبيق Axios",
    },
    {
      type: "link",
      href: "/docs/api_intro",
      text: "واجهة برمجة تطبيق Axios",
    },
    {
      type: "link",
      href: "/docs/instance",
      text: "مثيل Axios",
    },
    {
      type: "link",
      href: "/docs/req_config",
      text: "تهيئة الطلب",
    },
    {
      type: "link",
      href: "/docs/res_schema",
      text: "مخطط الاستجابة",
    },
    {
      type: "link",
      href: "/docs/config_defaults",
      text: "التهيئات الافتراضية",
    },
    {
      type: "link",
      href: "/docs/interceptors",
      text: "المعترضون",
    },
    {
      type: "link",
      href: "/docs/handling_errors",
      text: "معالجة الأخطاء",
    },
    {
      type: "link",
      href: "/docs/cancellation",
      text: "إبطال",
    },
    {
      type: "link",
      href: "/docs/urlencoded",
      text: "هيئات تشفير الروابط",
    },
    {
      type: "heading",
      text: "آخر",
    },
    {
      type: "link",
      href: "/docs/notes",
      text: "ملاحظات",
    },
    {
      type: "heading",
      text: "المساهمون",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md",
      text: "القواعد السلوكية",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/COLLABORATOR_GUIDE.md",
      text: "دليل المساهم",
    },
    {
      type: "link",
      href: "https://github.com/axios/axios/blob/master/CONTRIBUTING.md",
      text: "المساهمة في Axios",
    },
    {
      type: "link",
      href: "/docs/translating",
      text: "ترجمة هذه المستندات",
    },
  ],
};
