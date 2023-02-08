---
title: 'الإعدادات الافتراضية للتكوين'
prev_title: 'مخطط الاستجابة'
prev_link: '/docs/res_schema'
next_title: 'اعتراضات'
next_link: '/docs/interceptors'
---

## الإعدادات الافتراضية للتكوين

يمكنك تحديد افتراضيات التكوين التي سيتم تطبيقها على كل طلب.

### افتراضات Axios العامة

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### الافتراضيات المخصصة لمثيلات Axios

```js
// تعيين الإعدادات الافتراضية للتكوين عند إنشاء مثيل
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// تغيير الإعدادات الافتراضية بعد إنشاء المثيل
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### ترتيب الأسبقية في التكوين

سيتم دمج التكوين بترتيب الأسبقية. الترتيب هو مكتبة افتراضية وجدت في ملف [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28) ثم خاصية `defaults` للمثيل ، وأخيراً وسيطة `config` للطلب. هذا الأخير سيكون له الأسبقية على السابق. هنا مثال.

```js
// قم بإنشاء مثيل باستخدام إعدادات التكوين الافتراضية التي توفرها المكتبة
// في هذه المرحلة ، تكون قيمة تهيئة المهلة هي `0` كما هي القيمة الافتراضية للمكتبة
const instance = axios.create();

// تجاوز المهلة الافتراضية للمكتبة
// الآن ستنتظر جميع الطلبات التي تستخدم هذا المثيل 2.5 ثانية قبل انتهاء المهلة
instance.defaults.timeout = 2500;

// تجاوز المهلة لهذا الطلب لأنه من المعروف أنه يستغرق وقتًا طويلاً
instance.get('/longRequest', {
  timeout: 5000
});
```
