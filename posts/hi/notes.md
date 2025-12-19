---
title: 'नोट्स'
description: 'इसे पूर्ण करने के लिए कुछ और नोट्स'
prev_title: 'URL-एन्कोडिंग बॉडीज़'
prev_link: '/docs/urlencoded'
---

## Semver

जब तक axios `1.0` रिलीज़ तक नहीं पहुँच जाता, तब तक ब्रेकिंग परिवर्तन एक नए माइनर संस्करण के साथ जारी किए जाएँगे। उदाहरण के लिए, `0.5.1` और `0.5.4` में एक ही API होगा, लेकिन `0.6.0` में ब्रेकिंग परिवर्तन होंगे।

## Promises

axios [समर्थित](http://caniuse.com/promises) होने के लिए एक मूल ES6 प्रॉमिस कार्यान्वयन पर निर्भर करता है।

यदि आपका परिवेश ES6 प्रॉमिस का समर्थन नहीं करता है, तो आप [पॉलीफ़िल](https://github.com/jakearchibald/es6-promise) कर सकते हैं।

## टाइपस्क्रिप्ट
axios में [टाइपस्क्रिप्ट](http://typescriptlang.org) परिभाषाएँ शामिल हैं।
```टाइपस्क्रिप्ट
'axios' से axios आयात करें;
axios.get('/user?ID=12345');
```

## संसाधन

* [चेंजलॉग](https://github.com/axios/axios/blob/v1.x/CHANGELOG.md)
* [अपग्रेड गाइड](https://github.com/axios/axios/blob/v1.x/UPGRADE_GUIDE.md)
* [इकोसिस्टम](https://github.com/axios/axios/blob/v1.x/ECOSYSTEM.md)
* [योगदान गाइड](https://github.com/axios/axios/blob/v1.x/CONTRIBUTING.md)
* [आचार संहिता](https://github.com/axios/axios/blob/v1.x/CODE_OF_CONDUCT.md)

## श्रेय

axios [$http [Angular](https://angularjs.org/) में प्रदान की गई सेवा](https://docs.angularjs.org/api/ng/service/$http)। अंततः, Axios, Angular के बाहर उपयोग के लिए एक स्टैंडअलोन `$http` जैसी सेवा प्रदान करने का एक प्रयास है।

## लाइसेंस

[MIT](https://github.com/axios/axios/blob/v1.x/LICENSE)