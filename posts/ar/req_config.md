---
title: 'تكوين طلب'
prev_title: 'مثيل Axios'
prev_link: '/docs/instance'
next_title: 'مخطط الاستجابة'
next_link: '/docs/res_schema'
---


هذه هي خيارات التكوين المتاحة لعمل الطلبات. فقط الـ`url` مطلوب. `GET` سوف تكون الطريقة افتراضية ، إذا `method` كانت غير محدد.

```js
{
  // `url` هو عنوان الرابط الخاص بالخادم الذي سيُستخدم للطلب
  url: '/user',

  // `method` هي طريقة الطلب المستخدمة عند تقديم الطلب
  method: 'get', // الإفتراضي

  // `baseURL` سيتم إلحاقه مسبقًا بـ "url" ما لم يكن "url" مطلقًا.
  // يمكن أن يكون من الملائم تعيين "baseURL" لمثيل من Axios لتمرير عناوين URL النسبية
  // لطرق ذلك المثال.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` يسمح بتغيير بيانات الطلب قبل إرسالها إلى الخادم
  // هذا ينطبق فقط على طرق الطلب 'PUT', 'POST', 'PATCH' و 'DELETE'
  // يجب أن تُرجع الدالة الأخيرة في المصفوفة سلسلة نصية أو مثيلاً لـ Buffer, ArrayBuffer,
  // FormData او Stream
  // يمكنك تعديل كائن الرؤوس.
  transformRequest: [function (data, headers) {
    // افعل ما تريد لتحويل البيانات

    return data;
  }],

  // `transformResponse` يسمح بإجراء تغييرات على بيانات الاستجابة قبل ذلك
  // يتم تمريره إلى then/catch
  transformResponse: [function (data) {
    // افعل ما تريد لتحويل البيانات

    return data;
  }],

  // `headers` هي رؤوس مخصصة ليتم إرسالها
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` هي معلمات الرابط التي سيتم إرسالها مع الطلب
  // يجب أن يكون كائنًا عاديًا أو كائن URLSearchParams
  // ملاحظة: لا يتم عرض المعلمات الفارغة أو غير المحددة في عنوان الرابط.
  params: {
    ID: 12345
  },

  // `paramsSerializer` هي وظيفة اختيارية مسؤولة عن تسلسل `params`
  // (مثال: https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` هي البيانات التي سيتم إرسالها باعتبارها نص الطلب
  // ينطبق فقط على طرق الطلب 'PUT', 'POST', 'DELETE', و 'PATCH'
  // عند عدم تعيين `transformRequest`, يجب أن يكون من أحد الأنواع التالية:
  // - نص, كائن عادي, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - المتصفح فقط: FormData, File, Blob
  // - Node فقط: Stream, Buffer
  data: {
    firstName: 'Fred'
  },
  
  // بديل لغوي لإرسال البيانات إلى الجسم
  // طريقة POST
  // يتم إرسال القيمة فقط ، وليس المفتاح
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` يحدد عدد المللي ثانية قبل انتهاء مهلة الطلب.
  // إذا استغرق الطلب وقتًا أطول من `timeout` ، فسيتم إلغاء الطلب.
  timeout: 1000, // `0` الافتراضي هو (بدون مهلة)

  // `withCredentials` يشير إلى ما إذا كانت طلبات التحكم في الوصول عبر المواقع أم لا
  // يجب أن يتم باستخدام بيانات الاعتماد
  withCredentials: false, // الإفتراضي

  // `adapter` يسمح بمعالجة مخصصة للطلبات مما يجعل الاختبار أسهل.
  // يعيد وعد ويقدم استجابة صحيحة (أقرأ lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` يشير إلى وجوب استخدام مصادقة HTTP الأساسية ، ويوفر بيانات الاعتماد.
  // سيؤدي هذا إلى تعيين رأس "Authorization" ، واستبدال أي عنوان موجود
  // رؤوس "Authorization" المخصصة التي عيّنتها باستخدام "headers".
  // يرجى ملاحظة أن مصادقة HTTP الأساسية فقط هي التي يمكن تكوينها من خلال هذا المعامل.
  // بالنسبة إلى الرموز المميزة Bearer وما شابه ، استخدم رؤوس "Authorization" المخصصة بدلاً من ذلك.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` يشير إلى نوع البيانات التي سيستجيب لها الخادم بالخيارات: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   المتصفح فقط: 'blob'
  responseType: 'json', // الإفتراضي

  // `responseEncoding` يشير إلى الترميز لاستخدامه في فك الاستجابات (Node.js فقط)
  // ملاحظة: تم تجاهل "responseType" لطلبات "stream" أو من جانب العميل
  responseEncoding: 'utf8', // الإفتراضي

  // `xsrfCookieName` هو اسم ملف تعريف الارتباط المراد استخدامه كقيمة لرمز xsrf
  xsrfCookieName: 'XSRF-TOKEN', // الإفتراضي

  // `xsrfHeaderName` رأس http هو الأسم الذي يحمل قيمة الرمز المميز xsrf
  xsrfHeaderName: 'X-XSRF-TOKEN', // الإفتراضي

  // `onUploadProgress` يسمح بمعالجة أحداث التقدم لعمليات التحميل
  // المتصفح فقط
  onUploadProgress: function (progressEvent) {
    // افعل ما تشاء مع حدث التقدم المحلي
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // المتصفح فقط
  onDownloadProgress: function (progressEvent) {
    // افعل ما تشاء مع حدث التقدم المحلي
  },

  // `maxContentLength` يحدد الحد الأقصى لحجم محتوى استجابة http بالبايت المسموح به في node.js
  maxContentLength: 2000,

  // `maxBodyLength` (خيار Node فقط) يحدد الحجم الأقصى لمحتوى طلب http بالبايت المسموح به
  maxBodyLength: 2000,

  // `validateStatus` يحدد ما إذا كان سيتم حل أو رفض الوعد الخاص برمز حالة استجابة HTTP. 
  // إذا عرضت "validateStatus" "true" (أو تم ضبطها على "null" أو "undefined") ، فسيتم حل الوعد ؛ وإلا رفض الوعد.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // الإفتراضي
  },

  // `maxRedirects` يحدد الحد الأقصى لعدد عمليات إعادة التوجيه التي يجب اتباعها في node.js.
  // إذا تم التعيين على 0 ، فلن يتم اتباع أي عمليات إعادة توجيه.
  maxRedirects: 5, // الإفتراضي

  // `socketPath` يحدد مقبس UNIX لاستخدامه في node.js.
  // على سبيل المثال '/var/run/docker.sock' لإرسال الطلبات إلى Docker daemon.
  // يمكن تحديد `socketPath` أو `proxy` فقط.
  // إذا تم تحديد كليهما ، فسيتم استخدام `socketPath`.
  socketPath: null, // الإفتراضي

  // يعرّف `httpAgent` و` httpsAgent` وكيلاً مخصصًا لاستخدامه عند تنفيذ طلبات http و https ، على التوالي ، في node.js.
  // يسمح هذا بإضافة خيارات مثل `keepAlive` التي لم يتم تمكينها افتراضيًا.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // يعرّف `proxy` اسم المضيف والمنفذ والبروتوكول للخادم الوكيل.
  // يمكنك أيضًا تحديد `proxy` الخاص بك باستخدام متغيرات البيئة التقليدية `http_proxy` و` https_proxy`.
  //إذا كنت تستخدم متغيرات البيئة لتكوين الـ`proxy` الخاص بك، يمكنك أيضًا تحديد متغير بيئة `no_proxy` كقائمة نطاقات مفصولة بفواصل لا ينبغي توكيلها.
  // استخدم `false` لتعطيل الخوادم الوكيلة ، مع تجاهل متغيرات البيئة.
  // `auth` يشير إلى أنه يجب استخدام مصادقة HTTP الأساسية للاتصال بـ`proxy` ، وتوفر بيانات الاعتماد.
  // سيؤدي هذا إلى تعيين رأس `Proxy-Authorization` ، والكتابة فوق أي رؤوس مخصصة `Proxy-Authorization` حالية قمت بتعيينها باستخدام `headers`.
  // إذا كان الخادم الوكيل يستخدم HTTPS ، فيجب عليك تعيين البروتوكول على `https`.
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
  // (راجع قسم الإلغاء أدناه للحصول على التفاصيل)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` يشير إلى ما إذا كان ينبغي فك ضغط جسم الاستجابة تلقائيًا أم لا.
  // إذا تم التعيين على `true` ، فسيتم أيضًا إزالة رأس "content-encoding" من كائنات الردود لجميع الاستجابات التي تم فك ضغطها
  // - Node فقط (لا يمكن لـ XHR إيقاف إلغاء الضغط)
  decompress: true // الإفتراضي

}
```
