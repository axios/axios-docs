---
शीर्षक: 'रद्दीकरण'
prev_title: 'त्रुटियों का प्रबंधन'
prev_link: '/docs/handling_errors'
next_title: 'URL-एन्कोडिंग निकाय'
next_link: '/docs/urlencoded'
---

## अनुरोध रद्द करना

axios कॉल में `timeout` गुण सेट करने से **प्रतिक्रिया** से संबंधित टाइमआउट प्रबंधित होते हैं।

कुछ मामलों में (जैसे नेटवर्क कनेक्शन अनुपलब्ध हो जाता है) axios कॉल को **कनेक्शन** को जल्दी रद्द करने से लाभ होगा। रद्दीकरण के बिना, axios कॉल तब तक रुकी रह सकती है जब तक कि पैरेंट कोड/स्टैक का समय समाप्त न हो जाए (सर्वर-साइड एप्लिकेशन में कुछ मिनट लग सकते हैं)।

एक्सियोस कॉल को समाप्त करने के लिए आप निम्नलिखित विधियों का उपयोग कर सकते हैं:
- `signal`
- `cancelToken` (अप्रचलित)

`timeout` और रद्दीकरण विधि (जैसे `signal`) को मिलाकर **प्रतिक्रिया** से संबंधित समयबाह्य और **कनेक्शन** से संबंधित समयबाह्य को कवर किया जाना चाहिए।

### `signal`: AbortController

`v0.22.0` से शुरू होकर, एक्सियोस फ़ेच API तरीके से अनुरोधों को रद्द करने के लिए [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) का समर्थन करता है:

```js
const controller = new AbortController();

axios.get('/foo/bar', {
signal: controller.signal
}).then(function(response) {
//...
});
// अनुरोध रद्द करें
controller.abort()
```

नवीनतम [`AbortSignal.timeout()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout) API [nodejs 17.3+] का उपयोग करके टाइमआउट वाला उदाहरण:
```js
axios.get('/foo/bar', {
signal: AbortSignal.timeout(5000) //5 सेकंड के बाद अनुरोध रद्द करता है
}).then(function(response) {
//...
});
```

टाइमआउट सहायक फ़ंक्शन वाला उदाहरण:
```js
function newAbortSignal(timeoutMs) {
const abortController = new AbortController();
setTimeout(() => abortController.abort(), timeoutMs || 0);

return abortController.signal;
}

axios.get('/foo/bar', {
signal: newAbortSignal(5000) //5 सेकंड के बाद अनुरोध निरस्त करता है
}).then(function(response) {
//...
});
```

### CancelToken `deprecated`

आप *CancelToken* का उपयोग करके भी अनुरोध रद्द कर सकते हैं।

> Axios कैंसल टोकन API, वापस लिए गए [कैंसलेबल प्रॉमिस प्रस्ताव](https://github.com/tc39/proposal-cancelable-promises) पर आधारित है।

> यह API `v0.22.0` से बंद है और इसे नए प्रोजेक्ट में इस्तेमाल नहीं किया जाना चाहिए।

आप `CancelToken.source` फ़ैक्टरी का उपयोग करके एक कैंसल टोकन बना सकते हैं, जैसा कि नीचे दिखाया गया है:

```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
cancelToken: source.token
}).catch(function (thrown) {
if (axios.isCancel(thrown)) {
console.log('अनुरोध रद्द', thrown.message);
} else {
// त्रुटि संभालें
}
});

axios.post('/user/12345', {
name: 'नया नाम'
}, {
cancelToken: source.token
})

// अनुरोध रद्द करें (संदेश पैरामीटर वैकल्पिक है)
source.cancel('उपयोगकर्ता द्वारा कार्रवाई रद्द कर दी गई।');
```

आप `CancelToken` कंस्ट्रक्टर में एक निष्पादक फ़ंक्शन पास करके एक रद्द टोकन भी बना सकते हैं:

```js
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
cancelToken: new CancelToken(function executor(c) {
// एक निष्पादक फ़ंक्शन एक पैरामीटर के रूप में एक रद्द फ़ंक्शन प्राप्त करता है
cancel = c;
})
});

// अनुरोध रद्द करें
cancel();
```

> नोट: आप एक ही रद्द टोकन/सिग्नल से कई अनुरोध रद्द कर सकते हैं।

संक्रमण अवधि के दौरान, आप एक ही अनुरोध के लिए भी, दोनों रद्दीकरण API का उपयोग कर सकते हैं:

```js
const controller = new AbortController();

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
cancelToken: source.token,
signal: controller.signal
}).catch(function (thrown) {
if (axios.isCancel(thrown)) {
console.log('अनुरोध रद्द', thrown.message);
} else {
// त्रुटि हैंडल करें
}
});

axios.post('/user/12345', {
name: 'नया नाम'
}, {
cancelToken: source.token
})

// अनुरोध रद्द करें (संदेश पैरामीटर वैकल्पिक है)
source.cancel('उपयोगकर्ता द्वारा कार्रवाई रद्द कर दी गई।');
// या
controller.abort(); // संदेश पैरामीटर समर्थित नहीं है
```