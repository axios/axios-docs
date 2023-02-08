---
title: 'ترجمة المستندات'
---

لجعل Axios في متناول أكبر عدد ممكن من الأشخاص ، من المهم أن تكون هذه المستندات قابلة للقراءة بجميع اللغات. نحن نقدر دائمًا كل من يريد المساعدة في ترجمة المستندات. يقدم هذا الدليل إرشادات لإضافة ترجمة إلى هذه الوثائق.

## الهيكل

كل ترجمة تتكون من ملف التكوين، `{language-shortcut}.lang.js` (مثلاً، `en.lang.js` أو `de.lang.js`) وملفات التوثيق المترجمة في `posts/{language-shortcut}/*.md` (مثلاً، `posts/en` أو `posts/de`). `{language-shortcut}` يجب استبداله برمز [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) المكون من حرفين الخاص بلغتك.

## تكوين اللغة الخاصة بك

 - أنسخ `en.lang.js`.
 - قم بإعادة تسميته إلى `{language-shortcut}.lang.js`.
 - استبدل `display` باسم لغتك بلغتك. على سبيل المثال ، إذا كنت تترجم الألمانية ، فضع “Deutsch” بدلاً من “German”.
 - استبدل البادئة بـ `/{language-shortcut}/`.
 - ترجم القيم في حقلي `p` و` t`.
 - ترجم جميع الخصائص المسماة `text` في الشريط الجانبي. ** ملاحظة: ** منذ الإصدار الأخير من هذه الوثائق ، لم تعد الروابط الموجودة في الشريط الجانبي بحاجة إلى التحديث.

### تسجيل التكوين

بمجرد الانتهاء من تكوين لغتك وترجمة العبارات والروابط في ملف التكوين ، ستحتاج إلى تسجيلها في تكوين الجذر. للقيام بذلك ، افتح `inert.config.js` وأضف السطر التالي بالقرب من الجزء العلوي:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

بالطبع ، تذكر استبدال `{language-shortuct}` برمز [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) الصحيح (في اسم المتغير أيضًا!).

الآن ، ابحث عن ثابت `langs`. إذا كان هذا الثابت يقع فوق عبارة `require`، حرك عبارة `require` فوقها. إلى قائمة `langs` ، أضف الكائن التالي:

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // كائن التكوين الذي قمت باستيراده في وقت سابق
  }
  ...
];
```

الآن، يمكنك البدء في ترجمة الملفات. قم بنسخ المجلد `posts/en` في مجلد جديد `posts/{language-shortcut}` وترجمة جميع الملفات (لا تترجم أسماء الملفات ، بالطبع).

إذا واجهت أي مشاكل ، فلا تتردد في [إنشاء مشكلة وإرسالها](https://github.com/axios/axios-docs/issues/new/choose).