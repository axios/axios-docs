---
title: 'Axios इंस्टेंस'
prev_title: 'Axios API'
prev_link: '/docs/api_intro'
next_title: 'रिक्वेस्ट कॉन्फ़िगरेशन'
next_link: '/docs/req_config'
---

### इंस्टेंस बनाना

आप कस्टम कॉन्फ़िगरेशन के साथ axios का एक नया इंस्टेंस बना सकते हैं।

##### axios.create([config])

```js
const instance = axios.create({
baseURL: 'https://some-domain.com/api/',
timeout: 1000,
headers: {'X-Custom-Header': 'foobar'}
});
```

### इंस्टेंस विधियाँ

उपलब्ध इंस्टेंस विधियाँ नीचे सूचीबद्ध हैं। निर्दिष्ट कॉन्फ़िगरेशन को इंस्टेंस कॉन्फ़िगरेशन के साथ मर्ज कर दिया जाएगा।

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### कॉन्फ़िगरेशन ऑब्जेक्ट के साथ इंस्टेंस को कॉल करना

`instance.get()` या `instance.post()` जैसी सुविधाजनक विधियों का उपयोग करने के अलावा, आप कॉन्फ़िगरेशन ऑब्जेक्ट के साथ सीधे Axios इंस्टेंस को भी कॉल कर सकते हैं। यह कार्यात्मक रूप से `axios(config)` के समतुल्य है, और मूल कॉन्फ़िगरेशन का उपयोग करके किसी अनुरोध का पुनः प्रयास करते समय विशेष रूप से उपयोगी है।

```js
const instance = axios.create({ baseURL: '/api' });

// axios(config) की तरह ही कार्य करता है
instance({
url: '/users',
method: 'get'
});
```

यह दृष्टिकोण प्रमाणीकरण त्रुटियों को संभालते समय स्वच्छ पुनः प्रयास तर्क को सक्षम करता है:

```js
instance.interceptors.response.use(undefined, async (error) => {
if (error.response?.status === 401) {
await refreshToken();
return instance(error.config); // मूल अनुरोध का पुनः प्रयास करें
}

throw error;
});
```