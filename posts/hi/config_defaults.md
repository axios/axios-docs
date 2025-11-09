---
शीर्षक: 'कॉन्फ़िगरेशन डिफ़ॉल्ट'
prev_title: 'प्रतिक्रिया स्कीमा'
prev_link: '/docs/res_schema'
next_title: 'इंटरसेप्टर'
next_link: '/docs/interceptors'
---

## कॉन्फ़िगरेशन डिफ़ॉल्ट

आप कॉन्फ़िगरेशन डिफ़ॉल्ट निर्दिष्ट कर सकते हैं जो प्रत्येक अनुरोध पर लागू होंगे।

### वैश्विक axios डिफ़ॉल्ट

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### कस्टम इंस्टेंस डिफ़ॉल्ट

```js
// इंस्टेंस बनाते समय कॉन्फ़िगरेशन डिफ़ॉल्ट सेट करें
const instance = axios.create({
baseURL: 'https://api.example.com'
});

/ इंस्टेंस बनने के बाद डिफ़ॉल्ट बदलें
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### कॉन्फ़िगरेशन वरीयता क्रम

कॉन्फ़िगरेशन को वरीयता क्रम के साथ मर्ज किया जाएगा। यह क्रम [lib/defaults/index.js](https://github.com/axios/axios/blob/v1.x/lib/defaults/index.js) में पाए जाने वाले लाइब्रेरी डिफ़ॉल्ट के अनुसार होगा, फिर इंस्टेंस की `defaults` प्रॉपर्टी, और अंत में अनुरोध के लिए `config` तर्क। बाद वाले को पहले वाले पर वरीयता दी जाएगी। यहाँ एक उदाहरण दिया गया है।

```js
// लाइब्रेरी द्वारा प्रदान किए गए कॉन्फ़िगरेशन डिफ़ॉल्ट का उपयोग करके एक इंस्टेंस बनाएँ
// इस समय टाइमआउट कॉन्फ़िगरेशन मान `0` है, जैसा कि लाइब्रेरी के लिए डिफ़ॉल्ट है
const instance = axios.create();

/ लाइब्रेरी के लिए टाइमआउट डिफ़ॉल्ट को ओवरराइड करें
// अब इस इंस्टेंस का उपयोग करने वाले सभी अनुरोध टाइमआउट से पहले 2.5 सेकंड प्रतीक्षा करेंगे
instance.defaults.timeout = 2500;

/ इस अनुरोध के लिए टाइमआउट ओवरराइड करें क्योंकि यह ज्ञात है कि इसमें लंबा समय लगता है
instance.get('/longRequest', {
timeout: 5000
});
```