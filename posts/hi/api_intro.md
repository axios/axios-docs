---
title: 'Axios API'
description: 'Axios API संदर्भ'
prev_title: 'पोस्ट अनुरोध'
prev_link: '/docs/post_example'
next_title: 'एक्सियोस इंस्टेंस'
next_link: '/docs/instance'
---

संबंधित कॉन्फ़िगरेशन को `axios` में पास करके अनुरोध किए जा सकते हैं।

##### axios(config)

```js
// एक पोस्ट अनुरोध भेजें
axios({
method: 'post',
url: '/user/12345',
data: {
firstName: 'Fred',
lastName: 'Flintstone'
}
});
```

```js
// node.js में दूरस्थ छवि के लिए GET अनुरोध
axios({
method: 'get',
url: 'http://bit.ly/2mTM3nY',
responseType: 'stream'
})
.then(function (response) {
response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

#### axios(url[, config])

```js
// एक GET अनुरोध भेजें (डिफ़ॉल्ट विधि)
axios('/user/12345');
```

### अनुरोध विधि उपनाम

सुविधा के लिए सभी समर्थित अनुरोध विधियों के लिए उपनाम प्रदान किए गए हैं।

##### axios.request(config)
##### axios.get(url[, config])
##### axios.delete(url[, config])
##### axios.head(url[, config])
##### axios.options(url[, config])
##### axios.post(url[, data[, config]])
##### axios.put(url[, data[, config]])
##### axios.patch(url[, data[, config]])
##### axios.postForm(url[, data[, config]])
##### axios.putForm(url[, data[, config]])
##### axios.patchForm(url[, data[, config]]) उपनाम विधियों `url`, `method`, और `data` का उपयोग करते समय गुणों को कॉन्फ़िगरेशन में निर्दिष्ट करने की आवश्यकता नहीं होती है।
