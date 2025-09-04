---
title: 'The Axios Instance'
prev_title: 'Axios API'
prev_link: '/gu/docs/api_intro'
next_title: 'Request Config'
next_link: '/gu/docs/req_config'
---

### Creating an instance

You can create a new instance of axios with a custom config.

##### axios.create([config])

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### Instance પદ્ધતિઓ 

ઉપલબ્ધ પદ્ધતિ instance methods માટે નીચે દર્શાવેલ છે. The specified config will be merged with the instance config.

##### axios#request(config)
##### axios#get(url[, config])
##### axios#delete(url[, config])
##### axios#head(url[, config])
##### axios#options(url[, config])
##### axios#post(url[, data[, config]])
##### axios#put(url[, data[, config]])
##### axios#patch(url[, data[, config]])
##### axios#getUri([config])

### Calling the instance with a config object

`instance.get()` અથવા `instance.post()` જેવી સુવિધાજનક પદ્ધતિઓનો ઉપયોગ કરવા ઉપરાંત, તમે instance object સાથે સીધા Axios ઇન્સ્ટન્સને પણ કૉલ કરી શકો છો. આ કાર્યાત્મક રીતે `axios(config)` ની સમકક્ષ છે, અને મૂળ રૂપરેખાંકનનો ઉપયોગ કરીને વિનંતીનો ફરીથી પ્રયાસ કરતી વખતે ખાસ કરીને ઉપયોગી છે.

```js
const instance = axios.create({ baseURL: '/api' });

// Works just like axios(config)
instance({
  url: '/users',
  method: 'get'
});
```

This approach enables clean retry logic when handling authentication errors:

```js
instance.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status === 401) {
    await refreshToken();
    return instance(error.config); // Retry original request
  }

  throw error;
});
```