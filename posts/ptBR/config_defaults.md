---
title: 'Configurações padrões'
prev_title: 'Esquema de respostas'
prev_link: '/docs/ptBR/res_schema'
next_title: 'Interceptadores'
next_link: '/docs/ptBR/interceptors'
---

## Configurações padrões

Você pode especificar configurações padrões que será aplicar em todas as requisições.

### Configurações globais do axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Padrões de instância personalizados

```js
// Define as configurações padrões quando cria a instância
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Altera as configurações padrões após a instância ser criada
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Ordem de precedência

As configurações serão mescladas pela ordem de precedente. A ordem é o padrão da biblioteca encontrados em [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), depos as propriedades `defaults` da instância, e finalmente `config` argumentos para a requisição. O último terá precedência sobre o primeiro. Aqui está um exemplo.

```js
// Cria uma instancia usando os padrões de configurações fornecidas pela biblioteca
// Neste ponto o valor do timeout é de `0` pois é o padrão da biblioteca
const instance = axios.create();

// Sobrescreve o valor do tempo de espera da biblioteca
// Agora todas as requisições que usarem está instancia terá que esperar 2.5 secundos antes do tempo se esgotar
instance.defaults.timeout = 2500;

// Sobrescreve o tempo de espera para apenas está requisição por levar um tempo maior
instance.get('/longRequest', {
  timeout: 5000
});
```
