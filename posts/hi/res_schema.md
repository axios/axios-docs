---
शीर्षक: 'प्रतिक्रिया स्कीमा'
prev_title: 'अनुरोध कॉन्फ़िगरेशन'
prev_link: '/docs/req_config'
next_title: 'कॉन्फ़िगरेशन डिफ़ॉल्ट'
next_link: '/docs/config_defaults'
---

अनुरोध के प्रतिसाद में निम्नलिखित जानकारी होती है।

```js
{
// `data` सर्वर द्वारा प्रदान की गई प्रतिक्रिया है
data: {},

// `status` सर्वर प्रतिक्रिया से HTTP स्थिति कोड है
status: 200,

// `statusText` सर्वर प्रतिक्रिया से HTTP स्थिति संदेश है
// HTTP/2 से स्थिति पाठ रिक्त या असमर्थित है।
// (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
statusText: 'OK',

// `headers` वे HTTP हेडर जिनके साथ सर्वर ने प्रतिक्रिया दी
// सभी हेडर नाम लोअर केस में हैं और ब्रैकेट नोटेशन का उपयोग करके एक्सेस किए जा सकते हैं।
// उदाहरण: `response.headers['content-type']`
शीर्षक: {},

// `config` वह कॉन्फ़िगरेशन है जो अनुरोध के लिए `axios` को प्रदान किया गया था
कॉन्फ़िगरेशन: {},

// `request` वह अनुरोध है जिसने यह प्रतिक्रिया उत्पन्न की
// यह node.js (रीडायरेक्ट में) में अंतिम ClientRequest इंस्टेंस है
// और ब्राउज़र में एक XMLHttpRequest इंस्टेंस है
अनुरोध: {}
}
```

`then` का उपयोग करते समय, आपको निम्न प्रकार से प्रतिक्रिया प्राप्त होगी:

```js
axios.get('/user/12345')
.then(function (response) {
console.log(response.data);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers);
console.log(response.config);
});
```

`catch` का उपयोग करते समय, या `then` के दूसरे पैरामीटर के रूप में [अस्वीकृति कॉलबैक](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) पास करते समय, प्रतिक्रिया `error` ऑब्जेक्ट के माध्यम से उपलब्ध होगी, जैसा कि [त्रुटियों को संभालना](/docs/handling_errors) अनुभाग में बताया गया है।