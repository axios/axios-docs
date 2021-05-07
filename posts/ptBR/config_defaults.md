---
title: 'Configurações padrões'
prev_title: 'Esquema de respostas'
prev_link: '/docs/ptBR/res_schema'
next_title: 'Interceptadores'
next_link: '/docs/ptBR/interceptors'
---

## Configurações padrões

Você pode especificar uma configuração padrão que irá se aplicar para todas as requisições.
<!--You can specify config defaults that will be applied to every request.-->

### Configurações globais do axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Padrões de instância personalizados

```js
// Define a configuração padrão quando cria uma instância
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Altera a configuração padrão após a instância ser criada
// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Config order of precedence

As configurações serão mescladas pela ordem de precedente. A ordem é os padrões da biblioteca encontrados em  [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), depos das propriedas `defaults` da instancia, e finalmente `config` argumentos para a requisição. O último terá precedência sobre o primeiro. Aqui está um exemplo.
<!--Config will be merged with an order of precedence. The order is library defaults found in [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), then `defaults` property of the instance, and finally `config` argument for the request. The latter will take precedence over the former. Here's an example.-->

```js
// Cria uma instancia usando os padrões de configurações fornecidas pela biblioteca
// Create an instance using the config defaults provided by the library
// Neste ponto o valor do timeout é de `0` pos é o padrão da biblioteca
// At this point the timeout config value is `0` as is the default for the library
const instance = axios.create();

// Sobrescreve o valor de timeout da biblioteca
// Override timeout default for the library
// Agora todas as requisições que usarem está instancia irá espera 2.5 secundos antes do tempo se esgotar
// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

// Sobrescreve o timeout para apenas está requisição por levar um tempo maior
// Override timeout for this request as it's known to take a long time
instance.get('/longRequest', {
  timeout: 5000
});
```
