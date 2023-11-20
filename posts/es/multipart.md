---
title: "Cuerpos multiparte (Multipart)"
prev_title: "Cuerpos de solicitud codificados como URL"
prev_link: "/docs/urlencoded"
next_title: "Notas"
next_link: "/docs/notes"
---

## Enviando data como `multipart/form-data`

### Usando la API FormData

#### Navegador

```js
const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Blob([1, 2, 3]));
form.append("my_file", fileInput.files[0]);

axios.post("https://example.com", form);
```

Se puede conseguir el mismo resultado utilizando el serializador interno de Axios y su correspondiente método abreviado:

```js
axios.postForm("https://httpbin.org/post", {
  my_field: "my value",
  my_buffer: new Blob([1, 2, 3]),
  my_file: fileInput.files, // La lista de archivos se desplegará como campos separados
});
```

Los formularios HTML pueden ser incluidos en el payload de la petición

#### Node.js

```js
import axios from "axios";

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Blob(["some content"]));

axios.post("https://example.com", form);
```

Dado que node.js no soporta la creación de un `Blob` a partir de un archivo, puedes usar software de terceros para realizar esa tarea.

```js
import {fileFromPath} from "formdata-node/file-from-path";

form.append("my_field", "my value");
form.append("my_file", await fileFromPath("/foo/bar.jpg"));

axios.post("https://example.com", form);
```

Para versiones de Axios anteriores a `v1.3.0`, debes importar el paquete `form-data`

```js
const FormData = require("form-data");

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Buffer(10));
form.append("my_file", fs.createReadStream("/foo/bar.jpg"));

axios.post("https://example.com", form);
```

### 🆕 Serialización automática

A partir de la versión `v0.27.0`, Axios soporta la serialización automática de objetos
a un objecto FormData si establecemos la cabecera Content-Type de la petición a `multipart/form-data`.

La siguiente petición enviará data en formato FormData (Navegador & Node,js):

```js
import axios from "axios";

axios
  .post(
    "https://httpbin.org/post",
    {
      user: {
        name: "Dmitriy",
      },
      file: fs.createReadStream("/foo/bar.jpg"),
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  .then(({data}) => console.log(data));
```

El serializador de FormData de Axios admite algunos finales especiales para realizar las siguientes operaciones:

`{}` - serializa el valor con JSON.stringify
`[]` - desglosa el objeto similar a un array en campos separados con la misma llave (key)

> NOTA:
> La operación de desglose/expansión se utilizará de forma predeterminada en arrays y objetos FileList.

El serializador de FormData admite opciones adicionales a través de la propiedad `config.formSerializer: object`
para manejar casos inusuales:

- `visitor: Function` - función de visita definida por el usuario que se llamará recursivamente para serializar el objeto de datos
  a un objeto `FormData` siguiendo reglas personalizadas.

- `dots: boolean = false` - utiliza la notación de punto en lugar de corchetes para serializar arrays y objetos;

- `metaTokens: boolean = true` - agrega el final especial (por ejemplo, `user{}: '{"name": "John"}'`) en la llave (key) de FormData.
  El body-parser del backend podría potencialmente utilizar esta meta-información para analizar automáticamente el valor como JSON.

- `indexes: null|false|true = false` - controla cómo se agregarán índices a las llaves desglosadas (unwrapped keys) de objetos similares a arrays `flat`

  - `null` - no agregar corchetes (`arr: 1`, `arr: 2`, `arr: 3`)
  - `false` (predeterminado) - agregar corchetes vacíos (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
  - `true` - agregar corchetes con índices (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)

Digamos que tenemos un objeto como el siguiente:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [
    {name: "Peter", surname: "Griffin"},
    {name: "Thomas", surname: "Anderson"},
  ],
  "obj2{}": [{x: 1}],
};
```

El serializador de Axios ejecutará internamente los siguientes pasos:

```js
const formData = new FormData();
formData.append("x", "1");
formData.append("arr[]", "1");
formData.append("arr[]", "2");
formData.append("arr[]", "3");
formData.append("arr2[0]", "1");
formData.append("arr2[1][0]", "2");
formData.append("arr2[2]", "3");
formData.append("users[0][name]", "Peter");
formData.append("users[0][surname]", "Griffin");
formData.append("users[1][name]", "Thomas");
formData.append("users[1][surname]", "Anderson");
formData.append("obj2{}", '[{"x":1}]');
```

```js
import axios from "axios";

axios
  .post(
    "https://httpbin.org/post",
    {
      "myObj{}": {x: 1, s: "foo"},
      "files[]": document.querySelector("#fileInput").files,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  .then(({data}) => console.log(data));
```

Axios soporta los siguientes métodos abreviados: `postForm`, `putForm`, `patchForm`
que son los métodos HTTP correspondientes con la cabecera content-type predefinida como `multipart/form-data`.

El objeto `FileList` puede ser pasado directamente:

```js
await axios.postForm(
  "https://httpbin.org/post",
  document.querySelector("#fileInput").files
);
```

Todos los archivos se enviarán con campos del mismo nombre: `files[]`
