---
title: 'Contenido tipo Multipart'
prev_title: 'Contenido tipo URL-Encoding'
prev_link: 'urlencoded'
next_title: 'Notas'
next_link: 'notes'
---

## Publicando datos como `multipart/form-data`

### Usando la API FormData 

#### Navegador

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

El mismo resultado puede ser logrado usando el serializador interno de Axios y el método atajo correspondiente:

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList sera desempaquetado como campos separados
});
```

Form HTML puede ser pasado directamente como el payload de la petición

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

Dado que node.js no soporta actualmente la creación de un `Blob` desde un archivo, puedes usar un paquete de un tercero para este proposito.

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

Para versiones de Axios mayores que `v1.3.0`, debes importar el paquete `form-data`.

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 Serialización Automática

Comenzando desde la versión `v0.27.0`, Axios soporta la serialización automática de objetos a un objeto FormData si la cabecera Content-Type de la petición está en `multipart/form-data`.

La siguiente solicitud enviará los datos como FormData (Navegador & Node.js):

```js
import axios from 'axios';

axios.post('https://httpbin.org/post', {
  user: {
    name: 'Dmitriy'
  },
  file: fs.createReadStream('/foo/bar.jpg')
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data})=> console.log(data));
```

El serializador FormData de Axios soporta algunos casos especiales para ejecutar las siguiente operaciones:

- `{}` - serializa el valor con JSON.stringify
- `[]` - desempaqueta el objeto array como campos separados con la misma llave o key 

> NOTA: 
> La operación desempaquetar/expandir será usada por defecto en arrays y objetos FileList

El serializador FormData soporta opciones adicionales a través de la propiedad `config.formSerializer: object` para manipular casos especiales:

- `visitor: Function` - visitor es la función definida por el usuario que será llamada recursivamente para serializar el objeto data al objeto `FormData` siguiendo reglas personalizadas.

- `dots: boolean = false` - usa notación de puntos en vez de corchetes para serializar arrays y objetos;

- `metaTokens: boolean = true` - añade las terminaciones especiales (e.g `user{}: '{"name": "John"}'`) en la llave FormData. 
El body-parser del back-end podría usar potencialmente esta meta-información para convertir automáticamente el valor a JSON.

- `indexes: null|false|true = false` - controla como los índices serán agregados a las llaves (keys) desempaquetadas de array de objetos `flat` 

    - `null` - no añadir corchetes (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`(por defecto) - añade corchete vacios (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - añade corchetes con índices  (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)
    
Digamos que tenemos un objeto como este:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

Los siguientes pasos serán ejecutados por el serializador de Axios internamente:

```js
const formData= new FormData();
formData.append('x', '1');
formData.append('arr[]', '1');
formData.append('arr[]', '2');
formData.append('arr[]', '3');
formData.append('arr2[0]', '1');
formData.append('arr2[1][0]', '2');
formData.append('arr2[2]', '3');
formData.append('users[0][name]', 'Peter');
formData.append('users[0][surname]', 'Griffin');
formData.append('users[1][name]', 'Thomas');
formData.append('users[1][surname]', 'Anderson');
formData.append('obj2{}', '[{"x":1}]');
```

```js
import axios from 'axios';

axios.post('https://httpbin.org/post', {
  'myObj{}': {x: 1, s: "foo"},
  'files[]': document.querySelector('#fileInput').files 
}, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}).then(({data})=> console.log(data));
```

Axios soporta los siguientes métodos de atajo: `postForm`, `putForm`, `patchForm`
los cuales solo son los métodos http correspondientes con la cabecera content-type preestablecida a `multipart/form-data`.

Los objetos `FileList` pueden ser pasados directamente:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

Todos los archivos seran enviados con los mismos nombres de campo: `files[]`;
