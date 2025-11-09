---
शीर्षक: 'न्यूनतम उदाहरण'
विवरण: 'axios के उपयोग का एक छोटा सा उदाहरण'
prev_title: 'परिचय'
prev_link: '/docs/intro'
next_title: 'POST अनुरोध'
next_link: '/docs/post_example'
---

## नोट: CommonJS उपयोग
`require()` के साथ CommonJS आयातों का उपयोग करते समय TypeScript टाइपिंग (intellisense / स्वतः पूर्ण के लिए) प्राप्त करने के लिए, निम्नलिखित विधि का उपयोग करें:

```js
const axios = require('axios').default;

// axios.<method> अब स्वतः पूर्ण और पैरामीटर टाइपिंग प्रदान करेगा
```

# उदाहरण

`GET` अनुरोध निष्पादित करना

```js
const axios = require('axios');

// किसी दिए गए आईडी वाले उपयोगकर्ता के लिए अनुरोध करें
axios.get('/user?ID=12345')
.then(function (response) {
// सफलता को संभालें
console.log(response);
})
.catch(function (error) {
// त्रुटि को संभालें
console.log(error);
})
.finally(function () {
// हमेशा निष्पादित
});

// वैकल्पिक रूप से, उपरोक्त अनुरोध इस प्रकार भी किया जा सकता है
axios.get('/user', {
पैरामीटर: {
ID: 12345
}
})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
})
.finally(function () {
// हमेशा निष्पादित
});

// async/await का उपयोग करना चाहते हैं? अपने बाहरी फ़ंक्शन/विधि में `async` कीवर्ड जोड़ें।
async फ़ंक्शन getUser() {
try {
const response = await axios.get('/user?ID=12345');
console.log(response);
} catch (error) {
console.error(error);
}
}
```

> **नोट:** `async/await` ECMAScript 2017 का हिस्सा है और इंटरनेट एक्सप्लोरर और पुराने ब्राउज़र में समर्थित नहीं है, इसलिए सावधानी से उपयोग करें।