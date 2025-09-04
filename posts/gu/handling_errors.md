---
title: 'Handling Errors'
prev_title: 'Interceptors'
prev_link: '/gu/docs/interceptors'
next_title: 'Cancellation'
next_link: '/gu/docs/cancellation'
---

અક્ષીઓસ ભૂલો નું માળખું આવી રીતે:
- **message** - ભૂલ સંદેશ અને તે નિષ્ફળ થયેલ સ્થિતિનો ટૂંકો સારાંશ.  
- **name** - આ ભૂલ ક્યાંથી ઉદ્ભવી તે વ્યાખ્યાયિત કરે છે. axios માટે, તે હંમેશા 'AxiosError' હશે..  
- **stack** - ભૂલનો સ્ટેક ટ્રેસ પૂરો પાડે છે.  
- **config** - વિનંતી કરવામાં આવી ત્યારથી વપરાશકર્તા દ્વારા વ્યાખ્યાયિત ચોક્કસ ઇન્સ્ટન્સ ગોઠવણીઓ સાથેનો એક axios રૂપરેખા ઑબ્જેક્ટ.  
- **code** - એક એક્સિઓસ ઓળખાયેલ ભૂલ દર્શાવે છે. નીચે આપેલ કોષ્ટક આંતરિક એક્સિઓસ ભૂલ માટે ચોક્કસ વ્યાખ્યાઓ દર્શાવે છે.  
- **status** - HTTP response status code. See [here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for common HTTP response status code meanings.  

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // વિનંતી સેટ કરતી વખતે ભૂલ આવી
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Using the `validateStatus` config option, you can define HTTP code(s) that should throw an error.

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Resolve only if the status code is less than 500
  }
})
```

Using `toJSON` you get an object with more information about the HTTP error.

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```