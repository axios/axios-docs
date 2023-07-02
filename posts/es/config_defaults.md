---
title: 'Configuraciones por Defecto'
prev_title: 'Esquema de Respuesta'
prev_link: '/es/docs/res_schema'
next_title: 'Interceptores'
next_link: '/es/docs/interceptors'
---

## Configuraciones por Defecto

Puedes especificar configuraciones por defecto que serán aplicadas a cada petición.

### Valores globales predeterminados de axios

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Valores predeterminados de instancias personalizadas

```js
// Establecer configuraciones por defecto al crear la instancia
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Modificar valores por defecto después que una instancia ha sido creada
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Configurar orden de precedencia

La configuración será combinada en orden de precedencia. El orden es: valores predeterminados de la biblioteca que se encuentran en [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), luego la propiedad `defaults` de la instancia, y finalmente el argumento `config` de la petición. Este último tendrá prioridad sobre el primero. Aquí hay un ejemplo.

```js
// Crear una instancia utilizando la configuración por defecto proporcionada por la biblioteca
// En este punto el valor del tiempo de espera es `0`, ya que es el valor predeterminado de la biblioteca.
const instance = axios.create();

// Sobrescribir el tiempo de espera predeterminado para la biblioteca
// Ahora todas las peticiones que usen esta instancia esperaran 2.5 segundos antes de ser canceladas
instance.defaults.timeout = 2500;

// Anular el tiempo de espera para esta solicitud, ya que se sabe que tarda mucho tiempo
instance.get('/longRequest', {
  timeout: 5000
});
```
