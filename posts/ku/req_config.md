---
title: "ڕێکخستنی داواکاری"
prev_title: "نموونەیەکی ئەکسیۆس"
prev_link: "/ku/docs/instance"
next_title: "شێوازی وەڵام"
next_link: "/ku/docs/res_schema"
---

ئەمانە ئەو بژاردانەن کە بەردەستن بۆ ئەنجامدانی داواکارییەک. تەنها `url`ـەکە داواکراوە. داواکارییەکان بە بنەڕەت `GET` بەکاردەهێنن ئەگەر `method` دیاری نەکرابوو.

```js
{
  // ـەی ڕاژەیە کە بۆ داواکارییەکە بەکاردێURL ئەو
  url: '/user',

  // میثۆدی داواکارییەکەیە بەکاردێ لەکاتی ئەنجامدانی داواکارییەکە
  method: 'get', // default

  // ـەوە مەگەر`url` ئەلکێنرێ بە
  // .خۆی ڕەها بێ `url`
  // دابنێ بۆ نموونەکەی ئەکسیۆس بۆ ئەوەی لینکی ناڕەها بنێریت `baseURL` بۆ ئاسانی بەکارهێنان
  // .بۆ میثۆدەکانی ئەو نموونەیە
  baseURL: 'https://some-domain.com/api',

  // ڕێگەدەدات بە دەستکاریکردنی داتای داواکارییەکە پێش ئەوەی بنێردرێت بۆ ڕاژە
  // 'DELETE' و 'PUT', 'POST', 'PATCH' ئەمە بەرکارە تەنها بۆ ئەو داواکارییانەی کە میثۆدەکانیان یەکێکە لە
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // ـێکstring کۆتا فەنکشن لە ڕیزەکە دەبێ
  // Stream یان Buffer, ArrayBuffer, FormData یان نموونەیەک بگەڕێنێتەوە لە
  // .بکەیت headers object لەوانەیە بتەوێت دەستکاری
  transformRequest: [function (data, headers) {
    // هەرچیت دەوێت بیکە بۆ گۆڕینی داتاکە

    return data;
  }],

  // then/catch ڕێگەدەدات بە دەسکاریکردنی داتای وەڵامەکە پێش ئەوەی بنێردرێت بۆ
  transformResponse: [function (data) {
    // هەرچیت دەوێت بیکە بۆ گۆڕینی داتاکە

    return data;
  }],

  // هێدەری ڕاژەخوازکراون پێش ئەوەی بنێردرێت `headers`
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // ـن کە بنێردرێن لەگەڵ داواکارییەکەURL پاڕامیتەر `params`
  // بێت URLSearchParams ئەبێت ئۆبجێکتی ئاسایی یان ئۆبجێکتی
  // ـن دەرناکەون لە undefined یان null ئەو پاڕامیتەرانەی کە
  // ـەکەدا URL لە ناو
  params: {
    ID: 12345
  },

  // `paramsSerializer` بەشێکە بۆ دانانی سریالکەرەوەی `params`.
  // دەتوانی بەشە serialize بەکاربهێنی بۆ بەکارھێنانی فەرمی سریالکەرەوەی خۆی.
  // دەتوانی بەشە encode بەکاربهێنی بۆ بەکارھێنانی فەرمی کۆدکردنی خۆی.
  // ئەگەر پێشتر وەکوو پێشتر فەرمی بۆ `paramsSerializer` دانیت، فەرمی بنەڕەتی کۆدکردنی axios بەپێی encode بەشەکە دەکرێتەوە.
  // (https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/ نموونە)
  paramsSerializer: {
    serialize: (params) => {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
    },
    encode: (str) => {
      return encodeURIComponent(str)
    }
  },

  // بریتییە لەو داتاییە کە دەنێردرێت وەکو لاشەی داواکارییەکە `data`
  // 'DELETE' و 'PUT', 'POST', 'PATCH' ئەمە بەرکارە تەنها بۆ ئەو داواکارییانەی کە میثۆدەکانیان یەکێکە لە
  // دانەنراوە، دەبێت یەکێک بێت لەم جۆرانەی خوارەوە `transformRequest` کاتێک هیچ
  // - string، plain object، ArrayBuffer، ArrayBufferView، URLSearchParams
  // - تەنها لە وێبگەڕ: FormData، File، Blob
  // - تەنها لە نۆد: Stream، Buffer
  data: {
    firstName: 'Fred'
  },

  // ڕێزمان جێگرەوە بۆ ناردنی داتا لە لاشەکەدا
  // post میثۆد
  // تەنها نرخەکان دەنێردرێن، نەک کلیلەکان
  data: 'Country=Brasil&City=Belo Horizonte',

  // ژمارەی ئەو ملی چرکەکانە پێش ئەوەی کاتی داواکارییەکە تەواو ببێت `timeout`
  // داواکارییەکە لەباردەبردرێت، `timeout` ئەگەرهاتوو داواکارییەکە زیاتری خایاند لە
  timeout: 1000, // بە بنەڕەت `0`ـە (واتا تەواوبوون نییە)

  // بنێردرێت یاخود نا cross-site Access-Control دەریدەخات ئاخۆ داواکارییە `withCredentials`
  // ـەکان credentials بە هاوکاروانی
  withCredentials: false, // بنەڕەت

  // .ڕێگەدەدات بە چارەسەرکردنی داواکارییە کڕیاڕخوازکراوەکان کا تاقیکردنەوە ئاسانتر دەکات `adapter`
  // ـێک بە وەڵامی بڕواپێکراوەوە بەردەست دەخات سەیری promise
  // (lib/adapters/README.md بڕوانە)
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // جۆری ئەو داتایە دیاری دەکات کە لەلایەن ڕاژەوە وەڵامی پێدەدرێتەوە `responseType`
  // 'arraybuffer', 'document', 'json', 'text', 'stream' :بژاردەکان بریتیت لە
  // 'blob' :تەنها لە وێبگەڕ
  responseType: 'json', // بنەڕەت

  // شێوازی کۆدکردن دەردەخات کە بەکاردێ بۆ ناکۆردکردنمی وەڵامەکان`responseEncoding`
  // 'stream' لە جۆری `responseType` تێبینی: پشتگوێ دەخرێت بۆ
  // یان داواکارییەکانی لای ڕاژەخواز
  responseEncoding: 'utf8', // بنەڕەت

  // xsrf token ناوی ئەو شەکرۆکەیەیە کە بکاربێ وەک نرخی `xsrfCookieName`
  xsrfCookieName: 'XSRF-TOKEN', // بنەڕەت

  // ـەxsrf token کە هەڵگری نرخی http header بریتییە لە ناوی `xsrfHeaderName`
  xsrfHeaderName: 'X-XSRF-TOKEN', // بنەڕەت

  // ڕێگەدەدات بە چارەسەرکردنی چالاکی بەرەوپێشچوونەکان لە کاتی بەرزکردنەوە `onUploadProgress`
  // تەنها لە وێبگەڕ بەردەستە
  onUploadProgress: function (progressEvent) {
    // هەرچیت دەوێت بیکە لەگەڵ چالاکی بەرەوپێشچوونە ڕەسەنەکە
  },

  // ڕێگەدەدات بە چارەسەرکردنی چالاکی بەرەوپێشچوونەکان لە کاتی داگرتن `onDownloadProgress`
  // تەنها لە وێبگەڕ بەردەستە
  onDownloadProgress: function (progressEvent) {
    // هەرچیت دەوێت بیکە لەگەڵ چالاکی بەرەوپێشچوونە ڕەسەنەکە
  },

  // دەستنیشانی گەورەترین قەبارەی ناوەڕۆکی وەڵامەکە دەکات بە بایت کە ڕێگەپێدراوە لە نۆددا `maxContentLength`
  maxContentLength: 2000,

  // دەستنیشانی گەورەترین قەبارەی ناوەڕۆکی داواکارییەکە دەکات بە بایت کە ڕێگە پێدراوە `maxBodyLength` (تەنها بژاردەی نۆد)
  maxBodyLength: 2000,

  // ببێت بۆ resolve یان reject ـەکەpromise دەستنیشانی دەکات کە ئایا `validateStatus`
  // .ئەو کۆدی دۆخەی وەڵامەکە هەیەتی
  // بگەڕێنێتەوە یان `true` ئەگەرهاتوو `validateStatus`
  // ئەبێت resolve ـەکەpromise ئەوە (`undefined` یان `null` یان ئەگەر بکرێن بە)
  // ئەبێت reject ـەکەpromise ئەگەرنا
  validateStatus: function (status) {
    return status >= 200 && status < 300; // بنەڕەت
  },

  // دەستنیشانی زۆرترین ژمارەی ئاڕاستەکردنەوەکان دەکات بۆ ئەوەی دوای بکەوێت لە نۆددا redirects
  // ئەگەر بکرێت بە `0`، ناڕوات بەدوای هیچ ئاڕاستەکردنەوەیەکدا
  maxRedirects: 5, // بنەڕەت

  // ـێک بۆ ئەوەی بەکاربێت لە نۆدداUNIX Socket دەستنیشانی `socketPath`
  // docker daemon بۆ ئەوەی داواکارییەکان بنێرێ بۆ '/var/run/docker.sock' :بۆ نموونە
  // ئەکرێ دیاری بکرێت `socketPath` یان `proxy` تەنها یەکێک لە
  // بەکاردێت `socketPath` ئەگەر هەردووکیان دیاری بکرێن، ئەوە
  socketPath: null, // بنەڕەت

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // ـی پڕۆکسی ڕاژەکە دەکاتprotocol و hostname, port دەستنیشانی `proxy`
  // نەریتی و `http_proxy` هەروەها ئەتوانی پڕۆکسیەکەت دەستنیشان بکەیت بە
  // ئەگەر گۆڕاوە ژینگەییەکان بەکارئەهێنیت .`https_proxy` گۆڕاوی ژینگەیی
  // `no_proxy` بۆ ڕێکخستنی پڕۆکسیەکەت، ئەتوانی هەروەها دەستنیشانی گۆڕاوی ژینگەیی
  // بکەیت وەک لیستێک لە دۆمەینەکان کە بە کۆما جیاکراوەتەوە کە نابێ پڕۆکسی بکرێن
  // بەکاربهێنە بۆ لەکارخستنی پڕۆکسییەکان، کە گۆڕاوە ژینگەییەکان پشتگوێ دەخات `false`
  // دەبێت بەکاربێت بۆ پەیوەستبوون بە پڕۆکسییەوە، و HTTP Basic دەستنیشانی دەکا کە `auth`
  // .ـەکان دابین دەکاتcredential
  // دادەنێت `Proxy-Authorization` ئەمە هێدەری
  // `headers` دەگرێتەوە کە دیاریت کردووە بەبەکارهێنانی `Proxy-Authorization` جێگای هەر هێدەرێکی ڕاژەخوازکراوی
  // `https` بەکاربهێنێت ئەوە دەبێت پڕۆتۆکۆڵەکە بکەیت بە HTTPS ئەگەر ڕاژەی پڕۆکسیەکەت
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // تۆکنێکی هەڵوەشاندنەوە دەستنیشان دەکات کە بەکاردێ بۆ هەڵوەشاندنەوەی داواکارییەکە `cancelToken`
  // (سەیری بەشی هەڵوەشاندنەوە بکە لە خوارەوە بۆ ووردەکارییەکان)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // بکرێت یان نا decompress دەستنیشانی دەکات ئاخۆ پێویستە خۆکارانە لاشەی وەڵامەکە `decompress`
  // ـیش لادەبات`content-encoding` ئەوە هێدەری `true` ئەگەر بکرێت بە
  // کراوەکان decompress لە ئۆبجێکتی وەڵامەکانی هەموو وەڵامە
  // (بکوژێنێتەوە decompression ناتوانێ XHR) تەنها بەردەستە لە نۆد
  decompress: true // default

}
```
