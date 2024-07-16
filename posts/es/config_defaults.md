---
title: 'Configuraciones por Defecto'
prev_title: 'Esquema de Respuesta'
prev_link: 'res_schema'
next_title: 'Interceptores'
next_link: 'interceptors'
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

La configuración será combinada en orden de precedencia. El orden es: valores predeterminados de la librería que se encuentran en [lib/defaults.js](https://github.com/axios/axios/blob/master/lib/defaults.js#L28), luego la propiedad `defaults` de la instancia, y finalmente el argumento `config` de la petición. Este último tendrá prioridad sobre el primero. Aquí hay un ejemplo.

```js
// Crear una instancia usando la configuración por defecto proveída por la librería
// En este punto el valor del tiempo de espera es `0`, ya que es el valor predeterminado de la librería.
const instance = axios.create();

// Sobrescribir el tiempo de espera predeterminado para la librería
// Ahora todas las peticiones que usen esta instancia esperaran 2.5 segundos antes de ser canceladas
instance.defaults.timeout = 2500;

// Sobrescribir el tiempo máximo de espera cuando se sabe que la petición tomara mucho tiempo
instance.get('/longRequest', {
  timeout: 5000
});
```
