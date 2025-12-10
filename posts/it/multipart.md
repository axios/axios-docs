---
title: "Corpo Multipart"
prev_title: "Corpo con URL-Encoding"
prev_link: "/docs/urlencoded"
next_title: "Note"
next_link: "/docs/notes"
---

## Inviare i dati come `multipart/form-data`

### Usando l'API FormData

#### Browser

```js
const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Blob([1, 2, 3]));
form.append("my_file", fileInput.files[0]);

axios.post("https://example.com", form);
```

Si può ottenere lo stesso risultato usando il serializzatore interno di Axios e il metodo abbreviato corrispondente:

```js
axios.postForm("https://httpbin.org/post", {
  my_field: "my value",
  my_buffer: new Blob([1, 2, 3]),
  my_file: fileInput.files, // FileList verrà scomposto in campi separati
});
```

I form HTML possono essere passati direttamente come payload della richiesta

#### Node.js

```js
import axios from "axios";

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Blob(["some content"]));

axios.post("https://example.com", form);
```

Siccome node.js non supporta al momento la creazione di `Blob` da un file, puoi comunque farlo utilizzando un pacchetto di terze parti.

```js
import { fileFromPath } from "formdata-node/file-from-path";

form.append("my_field", "my value");
form.append("my_file", await fileFromPath("/foo/bar.jpg"));

axios.post("https://example.com", form);
```

Per le versioni di Axios precedenti alla versione `v1.3.0`, devi importare il pacchetto `form-data`.

```js
const FormData = require("form-data");

const form = new FormData();
form.append("my_field", "my value");
form.append("my_buffer", new Buffer(10));
form.append("my_file", fs.createReadStream("/foo/bar.jpg"));

axios.post("https://example.com", form);
```

### 🆕 Serializzazione automatica

A partire dalla versione `v0.27.0`, Axios supporta la serializzazione automatica degli oggetti in oggetti di tipo FormData se l'header Content-Type della richiesta è impostato su `multipart/form-data`.

La seguente richiesta invia i dati nel formato FormData (Browser e Node.js):

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
  .then(({ data }) => console.log(data));
```

Il serializzatore FormData di Axios supporta alcune terminazioni speciali per eseguire le seguenti operazioni:

- `{}` - serializza il valore con JSON.stringify
- `[]` - scompatta un oggetto di tipo array (o simile) in più campi separati con la stessa chiave

> NOTA:
> L'operazione di scomponimento/espansione verrà usata di default sugli array e sugli oggetti FileList

Il serializzatore di FormData supporta opzioni aggiuntive attraverso la proprietà `config.formSerializer: object` per gestire casi rari:

- `visitor: Function` - funzione visitor definita dall'utente che verrà chiamata ricorsivamente per serializzare i dati dell'oggetto in un oggetto `FormData`, seguendo regole personalizzate.

- `dots: boolean = false` - usa la notazione a punti invece delle parentesi per serializzare array ed oggetti.

- `metaTokens: boolean = true` - aggiunge una terminazione speciale (es, `user{}: '{"name": "John"}'`) nella chiave del FormData.
  Il body-parser del back-end potrebbe potenzialmente usare questo tipo di informazione per fare automaticamente il parsing in JSON del valore.

- `indexes: null|false|true = false` - controlla in che modo verranno aggiunti gli indici alle chiavi generate per oggetti di tipo array `non annidati`

  - `null` - non aggiungere parentesi (`arr: 1`, `arr: 2`, `arr: 3`)
  - `false`(predefinito) - aggiungi parentesi vuote (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
  - `true` - aggiungi le parentesi con i relativi indici (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)

Mettiamo caso di avere un oggetto come questo:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [
    { name: "Peter", surname: "Griffin" },
    { name: "Thomas", surname: "Anderson" },
  ],
  "obj2{}": [{ x: 1 }],
};
```

Il serializzatore interno di Axios eseguirà il passaggio successivo:

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
      "myObj{}": { x: 1, s: "foo" },
      "files[]": document.querySelector("#fileInput").files,
    },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )
  .then(({ data }) => console.log(data));
```

Axios supporta anche i seguenti metodi rapidi: `postForm`, `putForm`, `patchForm`
che non sono altro che i corrispondenti metodi http con l'header content-type impostato già a `multipart/form-data`.

L'oggetto `FileList` può essere passato direttamente:

```js
await axios.postForm(
  "https://httpbin.org/post",
  document.querySelector("#fileInput").files
);
```

Tutti i file verranno inviati con gli stessi campi: `files[]`;
