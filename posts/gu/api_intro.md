---
title: "એક્ષીયોસ એપીઆઇ"
description: 'એક્ષીયોસ એપીઆઇ માર્ગદર્શિકા'
prev_title: 'પોસ્ટ વિનંતી'
prev_link: 'gu/docs/post_example'
next_title: 'એક્ષીયોસ instance'
next_link: '/gu/docs/instance'
---

સંબંધિત રૂપરેખાને `axios` માં પાસ કરીને વિનંતીઓ કરી શકાય છે

##### axios(config)

```js
// પોસ્ટ વિનંતી મોકલો 
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
//remote ઇમેજ માટે ગૅટ વિનંતી મોકલો 
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
```

##### axios(url[, config])

```js
// ગૅટ વિનંતી મોકલો (default method)
axios('/user/12345');
```

### Request method aliases

સુવિધા માટે, બધી સપોર્ટેડ વિનંતી પદ્ધતિઓ માટે ઉપનામો આપવામાં આવ્યા છે.

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
##### axios.patchForm(url[, data[, config]])

> નૉૅધ: When using the alias methods `url`, `method`, and `data` properties don't need to be specified in config.
