---
title: 'Handling Errors'
prev_title: 'Interceptors'
prev_link: '/docs/interceptors'
next_title: 'Cancellation'
next_link: '/docs/cancellation'
---

The general structure of axios errors is as follows:  
- **message** - A quick summary of the error message and the status it failed with.  
- **name** - This defines where the error originated from. For axios, it will always be an 'AxiosError'.  
- **stack** - Provides the stack trace of the error.  
- **config** - An axios config object with specific instance configurations defined by the user from when the request was made.  
- **code** - Represents an axios identified error. The table below lists out specific definitions for internal axios error.  
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
      // Something happened in setting up the request that triggered an Error
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
