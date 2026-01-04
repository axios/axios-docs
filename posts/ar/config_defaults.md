---
title: 'الإعدادات الافتراضية'
prev_title: 'مخطط الاستجابة'
prev_link: '/ar/docs/res_schema'
next_title: 'المتدخلات'
next_link: '/ar/docs/interceptors'
---

## الإعدادات الافتراضية

يمكنك تحديد الإعدادات الافتراضية التي سيتم تطبيقها على كل طلب.

### الإعدادات الافتراضية العامة لـ axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### الإعدادات الافتراضية للنموذج المخصص

```js
// تعيين الإعدادات الافتراضية عند إنشاء النموذج
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// تعديل الافتراضيات بعد إنشاء النموذج
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### ترتيب أولوية التكوين

سيتم دمج التكوين بترتيب أولوية. الترتيب هو الافتراضيات المكتبة الموجودة في [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js)، ثم خاصية `defaults` للنموذج، وأخيرًا حجة `config` للطلب. الأخير له الأولوية على الأول. إليك مثال.

```js
// إنشاء نموذج باستخدام الإعدادات الافتراضية المقدمة من المكتبة
// في هذه النقطة قيمة تكوين المهلة هي `0` كما هو افتراضي للمكتبة
const instance = axios.create();

// تجاوز المهلة الافتراضية للمكتبة
// الآن جميع الطلبات باستخدام هذا النموذج ستنتظر 2.5 ثانية قبل انتهاء المهلة
instance.defaults.timeout = 2500;

// تجاوز المهلة لهذا الطلب لأنه معروف أنه يستغرق وقتًا طويلًا
instance.get('/longRequest', {
  timeout: 5000
});
```
