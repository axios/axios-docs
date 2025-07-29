---
title: 'Multipart'
prev_title: 'Codificação de URL'
prev_link: '/ptBR/docs/urlencoded'
next_title: 'Notas'
next_link: '/ptBR/docs/notes'
---

## Postando dados no formato `multipart/form-data`

### Usando a API FormData

#### Navegador

```js 
const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob([1,2,3]));
form.append('my_file', fileInput.files[0]);

axios.post('https://example.com', form)
```

O mesmo resultado pode ser alcançado usando o serializador interno do Axios, em conjunto com método correnpondente:

```js
axios.postForm('https://httpbin.org/post', {
  my_field: 'my value',
  my_buffer: new Blob([1,2,3]),
  my_file:  fileInput.files // FileList será separada em diferentes campos
});
```

Formulários HTML podem ser passados diretamente para a requisição

#### Node.js

```js 
import axios from 'axios';

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Blob(['some content']));

axios.post('https://example.com', form)
```

Já que node.js não suporta a criação de um `Blob` a partir de um arquivo, você pode usar bibliotecas externas pra esse propósito.

```js
import {fileFromPath} from 'formdata-node/file-from-path'

form.append('my_field', 'my value');
form.append('my_file', await fileFromPath('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

Pra versões anteriores à `v1.3.0`, você deve importar o pacote `form-data`.

```js 
const FormData = require('form-data');

const form = new FormData();
form.append('my_field', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));

axios.post('https://example.com', form)
```

### 🆕 Serialização automática

A partir da versão `v0.27.0`, Axios suporta a serialização automática de objetos para o formato FormData
se o cabeçalho `content-type` da requisição estiver definido como `multipart/form-data`.

A seguinte requisição irá submeter os dados como FormData (navegador e node.js):

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

O serializador de FormData suporta algumas terminações especiais para realizar as seguintes operações:

- `{}` - serializa o valor com JSON.stringify
- `[]` - separa os itens de uma lista/array em campos diferentes com a mesma key 

> NOTA:
> essas operações serão realizadas por padrão em listas/arrays e objetos FileList

O serializador de FormData suporta opções adicionais por meio da propriedade `config.formSerializer: object` para lidar com casos especiais:

- `visitor: Function` - função que será chamada recursivamente para serializar o objeto com os dados
para o formato `FormData` seguindo regras personalizadas.

- `dots: boolean = false` - usa *dot notation* ao invés de colchetes para serializar listas/arrays e objetos;

- `metaTokens: boolean = true` - adiciona a terminação especial (`user{}: '{"name": "John"}'`, por exemplo) à key do `FormData`
O *parser* do servidor pode utilizar essa meta-informação para transformar os dados para JSON automaticamente.

- `indexes: null|false|true = false` - controla como os índices serão adicionados às keys de listas/arrays

    - `null` - não adiciona colchetes (`arr: 1`, `arr: 2`, `arr: 3`) 
    - `false`(padrão) - adiciona colchetes vazios (`arr[]: 1`, `arr[]: 2`, `arr[]: 3`)
    - `true` - adiciona colchetes com índices (`arr[0]: 1`, `arr[1]: 2`, `arr[2]: 3`)
    
Caso tenhamos um objeto como esse:

```js
const obj = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
  'obj2{}': [{x:1}]
};
```

As seguintes etapas serão executadas internamente pelo serializador do Axios:

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

Axios suporta os seguintes métodos "atalho": `postForm`, `putForm`, `patchForm`
os quais consistem simplesmente no método http correspondente, com o header `content-type` predefinido para `multipart/form-data`.

Um objeto `FileList` pode ser passado diretamente:

```js
await axios.postForm('https://httpbin.org/post', document.querySelector('#fileInput').files)
```

Todos os arquivos serão enviados com o mesmo nome de campo: `files[]`;
