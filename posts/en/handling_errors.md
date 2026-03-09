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
- **request** - The request that was sent. It is an instance of `XMLHttpRequest` in the browser and an instance of `http.ClientRequest` in Node.js.  
- **response** - The server response, if one was received. Has the same structure as a [successful response](/docs/res_schema) (`data`, `status`, `statusText`, `headers`, `config`, `request`). The `response.data` field contains the actual error body returned by the server.

A complete `AxiosError` object (when the server responds with a non-2xx status) looks like this:

```js
{
  // `message` is a human-readable description of the error
  message: 'Request failed with status code 400',

  // `name` is always 'AxiosError' for errors thrown by axios
  name: 'AxiosError',

  // `code` is an axios error code (e.g. 'ERR_BAD_REQUEST', 'ERR_NETWORK', ...)
  code: 'ERR_BAD_REQUEST',

  // `status` is a shorthand for `error.response.status` (undefined if no response)
  status: 400,

  // `config` is the axios request config that was used to make the request
  config: { /* request config */ },

  // `request` is the outgoing request (XMLHttpRequest or http.ClientRequest)
  request: { /* outgoing request object */ },

  // `response` has the same structure as a successful axios response.
  // `response.data` contains the actual error body sent by the server.
  response: {
    status: 400,
    statusText: 'Bad Request',
    headers: { /* response headers */ },
    data: { /* the error body returned by the server */ },
    config: { /* request config */ },
    request: { /* outgoing request object */ },
  },
}
```

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
