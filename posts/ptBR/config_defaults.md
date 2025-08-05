---
title: 'Configurações Padrão'
prev_title: 'Esquema de respostas'
prev_link: '/ptBR/docs/res_schema'
next_title: 'Interceptadores'
next_link: '/ptBR/docs/interceptors'
---

## Configurações padrão

Você pode especificar configurações padrão que serão aplicadas a todas as requisições.

### Configurações globais do axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Padrões para a instância

```js
// Define as configurações padrão quando cria a instância
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Altera as configurações padrão após a instância ser criada
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Ordem de precedência

As configurações serão mescladas seguindo a ordem de precedência. A ordem é os padrões da biblioteca encontrados em [lib/defaults.js](https://github.com/axios/axios/blob/v1.x/lib/defaults.js#L28), depois a propriedade `defaults` da instância, e finalmente o argumento `config` da requisição. Os últimos terão precedência sobre os primeiros. Aqui está um exemplo.

```js
// Cria uma instância usando os padrões de configuração fornecidos pela biblioteca
// Neste ponto o valor do timeout é de `0` pois é o padrão da biblioteca
const instance = axios.create();

// Sobrescreve o tempo de espera padrão da biblioteca
// Agora todas as requisições que usarem está instância terão que esperar 2.5 segundos antes do tempo se esgotar
instance.defaults.timeout = 2500;

// Sobrescreve o tempo de espera para apenas esta requisição pois sabemos que ela é demorada
instance.get('/longRequest', {
  timeout: 5000
});
```
