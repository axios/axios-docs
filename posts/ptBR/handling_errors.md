---
title: 'Manipulando Erros'
prev_title: 'Interceptadores'
prev_link: '/docs/ptBR/interceptors'
next_title: 'Cancelamento'
next_link: '/docs/ptBR/cancellation'
---

```js
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // A requisição foi feita e o servidor respondeu com um código de status
      // que sai o do alcance de 2xx
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // A requisição foi feita mas nenhuma resposta foi recebida
      // The request was made but no response was received
      // `error.request` é uma instância do XMLHttpRequest no navegador e uma instância de
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest no node.js
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Alguma coisa acontenceu ao configurar a requisição que acionou este erro.
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
```

Usando a configuração opcional `validadeStatus`, você pode definir o(s) código(s) HTTP que devem lançar um erro
<!--Using the `validateStatus` config option, you can define HTTP code(s) that should throw an error.-->

```js
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Resolve somente se o código de status for menor que 500
    // Resolve only if the status code is less than 500
  }
})
```

Usando o `toJSON` você pode receber um objeto com mais informações sobre o erro HTTP.
<!--Using `toJSON` you get an object with more information about the HTTP error.-->

```js
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
```