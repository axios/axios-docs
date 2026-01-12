---
title: 'تكوين الطلب'
prev_title: 'نموذج Axios'
prev_link: '/ar/docs/instance'
next_title: 'مخطط الاستجابة'
next_link: '/ar/docs/res_schema'
---


هذه هي خيارات التكوين المتاحة لإجراء الطلبات. فقط `url` مطلوب. ستكون الطلبات افتراضيًا `GET` إذا لم يتم تحديد `method`.

```js
{
  // `url` هو عنوان URL للخادم الذي سيتم استخدامه للطلب
  url: '/user',

  // `method` هو طريقة الطلب التي سيتم استخدامها عند إجراء الطلب
  method: 'get', // افتراضي

  // `baseURL` سيتم إضافته إلى `url` إلا إذا كان `url` مطلقًا.
  // يمكن أن يكون مناسبًا تعيين `baseURL` لنموذج من axios لتمرير عناوين URL نسبية
  // إلى طرق ذلك النموذج.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` يسمح بتغييرات على بيانات الطلب قبل إرسالها إلى الخادم
  // هذا قابل للتطبيق فقط لطرق الطلب 'PUT' و 'POST' و 'PATCH' و 'DELETE'
  // يجب أن ترجع الدالة الأخيرة في المصفوفة سلسلة أو مثيل Buffer أو ArrayBuffer أو
  // FormData أو Stream
  // يمكنك تعديل كائن الرؤوس.
  transformRequest: [function (data, headers) {
    // افعل ما تريد لتحويل البيانات

    return data;
  }],

  // `transformResponse` يسمح بتغييرات على بيانات الاستجابة قبل
  // تمريرها إلى then/catch
  transformResponse: [function (data) {
    // افعل ما تريد لتحويل البيانات

    return data;
  }],

  // `headers` هي الرؤوس المخصصة التي سيتم إرسالها
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` هي معاملات URL التي سيتم إرسالها مع الطلب
  // يجب أن تكون كائنًا عاديًا أو كائن URLSearchParams
  // ملاحظة: المعاملات التي هي null أو undefined لا يتم عرضها في URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` هو تكوين اختياري يسمح لك بتخصيص تسلسل `params`.
  paramsSerializer: {

    //دالة ترميز مخصصة ترسل أزواج المفتاح/القيمة بطريقة تكرارية.
    encode?: (param: string): string => { /* قم بعمليات مخصصة هنا وأعد السلسلة المحولة */ },

    // دالة تسلسل مخصصة للمعامل بأكمله. يسمح للمستخدم بتقليد سلوك ما قبل 1.x.
    serialize?: (params: Record<string, any>, options?: ParamsSerializerOptions ),

    //تكوين لتنسيق فهارس المصفوفة في المعاملات.
    indexes: false // ثلاث خيارات متاحة:
    // (1) indexes: null (يؤدي إلى عدم وجود أقواس)،
    // (2) (افتراضي) indexes: false (يؤدي إلى أقواس فارغة)،
    // (3) indexes: true (يؤدي إلى أقواس مع فهارس).
  },

  // `data` هي البيانات التي سيتم إرسالها كجسم الطلب
  // قابل للتطبيق فقط لطرق الطلب 'PUT' و 'POST' و 'DELETE' و 'PATCH'
  // عندما لا يتم تعيين `transformRequest`، يجب أن تكون من أحد الأنواع التالية:
  // - سلسلة، كائن عادي، ArrayBuffer، ArrayBufferView، URLSearchParams
  // - المتصفح فقط: FormData، File، Blob
  // - Node فقط: Stream، Buffer
  data: {
    firstName: 'Fred'
  },

  // بديل بناء جملة لإرسال البيانات إلى الجسم
  // طريقة post
  // يتم إرسال القيمة فقط، وليس المفتاح
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` يحدد عدد المللي ثانية قبل انتهاء مهلة الطلب.
  // إذا استغرق الطلب وقتًا أطول من `timeout`، سيتم إلغاء الطلب.
  timeout: 1000, // الافتراضي هو `0` (لا مهلة)

  // `withCredentials` يشير إلى ما إذا كان يجب إجراء طلبات Access-Control عبر المواقع
  // باستخدام بيانات الاعتماد
  withCredentials: false, // افتراضي

  // `adapter` يسمح بالتعامل المخصص مع الطلبات مما يجعل الاختبار أسهل.
  // أعد وعدًا وأمد باستجابة صالحة (انظر lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` يشير إلى أن يجب استخدام مصادقة HTTP Basic، ويوفر بيانات الاعتماد.
  // سيتم تعيين رأس `Authorization`، مما يتجاوز أي رؤوس مخصصة موجودة
  // `Authorization` التي قمت بتعيينها باستخدام `headers`.
  // يرجى ملاحظة أن مصادقة HTTP Basic فقط قابلة للتكوين من خلال هذا المعامل.
  // لرموز Bearer وما شابه، استخدم رؤوس `Authorization` المخصصة بدلاً من ذلك.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` يشير إلى نوع البيانات التي سيرد بها الخادم
  // الخيارات هي: 'arraybuffer'، 'document'، 'json'، 'text'، 'stream'
  // المتصفح فقط: 'blob'
  responseType: 'json', // افتراضي

  // `responseEncoding` يشير إلى الترميز المستخدم لفك تشفير الاستجابات (Node.js فقط)
  // ملاحظة: يتم تجاهله لـ `responseType` من 'stream' أو طلبات جانب العميل
  responseEncoding: 'utf8', // افتراضي

  // `xsrfCookieName` هو اسم ملف تعريف الارتباط المستخدم كقيمة لرمز xsrf
  xsrfCookieName: 'XSRF-TOKEN', // افتراضي

  // `xsrfHeaderName` هو اسم رأس http الذي يحمل قيمة رمز xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // افتراضي

  // `onUploadProgress` يسمح بالتعامل مع أحداث التقدم للتحميلات
  // المتصفح فقط
  onUploadProgress: function (progressEvent) {
    // افعل ما تريد مع حدث التقدم الأصلي
  },

  // `onDownloadProgress` يسمح بالتعامل مع أحداث التقدم للتنزيلات
  // المتصفح فقط
  onDownloadProgress: function (progressEvent) {
    // افعل ما تريد مع حدث التقدم الأصلي
  },

  // `maxContentLength` يحدد الحد الأقصى لحجم محتوى استجابة http بالبايتات المسموح به في node.js
  maxContentLength: 2000,

  // `maxBodyLength` (خيار Node فقط) يحدد الحد الأقصى لحجم محتوى طلب http بالبايتات المسموح به
  maxBodyLength: 2000,

  // `validateStatus` يحدد ما إذا كان يجب حل أو رفض الوعد لرمز حالة استجابة HTTP معين.
  // إذا أعاد `validateStatus` `true` (أو تم تعيينه إلى `null`
  // أو `undefined`)، سيتم حل الوعد؛ وإلا، سيتم رفض الوعد.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // افتراضي
  },

  // `maxRedirects` يحدد الحد الأقصى لعدد عمليات إعادة التوجيه التي يجب اتباعها في node.js.
  // إذا تم تعيينه إلى 0، لن يتم اتباع أي عمليات إعادة توجيه.
  maxRedirects: 5, // افتراضي

  // `socketPath` يحدد مقبس UNIX ليتم استخدامه في node.js.
  // على سبيل المثال '/var/run/docker.sock' لإرسال الطلبات إلى daemon docker.
  // يمكن تحديد إما `socketPath` أو `proxy` فقط.
  // إذا تم تحديد كليهما، يتم استخدام `socketPath`.
  socketPath: null, // افتراضي

  // `httpAgent` و `httpsAgent` يحددان وكيلًا مخصصًا ليتم استخدامه عند إجراء طلبات http
  // و https على التوالي، في node.js. هذا يسمح بإضافة خيارات مثل
  // `keepAlive` التي لا يتم تمكينها افتراضيًا قبل Node.js v19.0.0. بعد Node.js
  // v19.0.0، لم تعد بحاجة إلى تخصيص الوكيل لتمكين `keepAlive` لأن
  // `http.globalAgent` لديه `keepAlive` ممكّن افتراضيًا.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` يحدد اسم المضيف، المنفذ، وبروتوكول خادم الوكيل.
  // يمكنك أيضًا تعريف وكيلك باستخدام متغيرات البيئة التقليدية `http_proxy` و
  // `https_proxy`. إذا كنت تستخدم متغيرات البيئة
  // لتكوين الوكيل الخاص بك، يمكنك أيضًا تعريف متغير بيئة `no_proxy` كقائمة مفصولة بفواصل من النطاقات التي يجب عدم وكالتها.
  // استخدم `false` لتعطيل الوكلاء، متجاهلاً متغيرات البيئة.
  // `auth` يشير إلى أن يجب استخدام مصادقة HTTP Basic للاتصال بالوكيل، و
  // يوفر بيانات الاعتماد.
  // سيتم تعيين رأس `Proxy-Authorization`، مما يتجاوز أي رؤوس مخصصة موجودة
  // `Proxy-Authorization` التي قمت بتعيينها باستخدام `headers`.
  // إذا كان خادم الوكيل يستخدم HTTPS، فيجب عليك تعيين البروتوكول إلى `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` يحدد رمز إلغاء يمكن استخدامه لإلغاء الطلب
  // (انظر قسم الإلغاء أدناه للتفاصيل)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` يشير إلى ما إذا كان يجب فك ضغط جسم الاستجابة
  // تلقائيًا. إذا تم تعيينه إلى `true` سيتم أيضًا إزالة رأس 'content-encoding'
  // من كائنات الاستجابات لجميع الاستجابات المفككة ضغطها
  // - Node فقط (XHR لا يمكنه إيقاف فك الضغط)
  decompress: true // افتراضي

}
```
