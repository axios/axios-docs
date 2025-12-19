---
title: 'आरंभ करें'
description: 'ब्राउज़र और node.js के लिए Promise-आधारित HTTP क्लाइंट'
next_title: 'न्यूनतम उदाहरण'
next_link: '/docs/example'
---

# Axios क्या है?
Axios [`node.js`](https://nodejs.org) और ब्राउज़र के लिए एक *[promise-आधारित](https://javascript.info/promise-basics)* HTTP क्लाइंट है। यह *[isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application)* है (= यह ब्राउज़र और node.js में समान कोडबेस के साथ चल सकता है)। सर्वर-साइड पर यह मूल node.js `http` मॉड्यूल का उपयोग करता है, जबकि क्लाइंट (ब्राउज़र) पर यह XMLHttpRequest का उपयोग करता है।

# विशेषताएँ

- ब्राउज़र से [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) बनाएँ
- node.js से [http](http://nodejs.org/api/http.html) अनुरोध बनाएँ
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API का समर्थन करता है
- अनुरोध और प्रतिक्रिया को इंटरसेप्ट करें
- अनुरोध और प्रतिक्रिया डेटा को रूपांतरित करें
- अनुरोध रद्द करें
- टाइमआउट
- नेस्टेड प्रविष्टियों के समर्थन के साथ क्वेरी पैरामीटर क्रमांकन
- स्वचालित अनुरोध बॉडी क्रमांकन:
- JSON (`application/json`)
- मल्टीपार्ट / फ़ॉर्मडेटा (`multipart/form-data`)
- URL एन्कोडेड फ़ॉर्म (`application/x-www-form-urlencoded`)
- HTML फ़ॉर्म को JSON के रूप में पोस्ट करना
- स्वचालित प्रतिक्रिया में JSON डेटा प्रबंधन
- ब्राउज़र और node.js के लिए अतिरिक्त जानकारी (गति दर, शेष समय) के साथ प्रगति कैप्चरिंग
- node.js के लिए बैंडविड्थ सीमाएँ निर्धारित करना
- विनिर्देश-अनुपालक FormData और Blob (`node.js` सहित) के साथ संगत
- [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) से सुरक्षा के लिए क्लाइंट-साइड समर्थन

# इंस्टॉल करना

npm का उपयोग:

```bash
$ npm install axios
```

bower का उपयोग:

```bash
$ bower install axios
```

yarn का उपयोग:

```bash
$ yarn add axios
```

pnpm का उपयोग:

```bash
$ pnpm add axios
```

jsDelivr CDN का उपयोग:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

unpkg CDN का उपयोग:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
आवश्यकता के साथ सीधे आयात के लिए पूर्व-निर्मित CommonJS मॉड्यूल (यदि आपका मॉड्यूल बंडलर उन्हें स्वचालित रूप से हल करने में विफल रहा है)

```js
const axios = require('axios/dist/browser/axios.cjs'); // ब्राउज़र
const axios = require('axios/dist/node/axios.cjs'); // नोड
```