---
title: 'Traduzindo a documentação'
---

Para tornar os Axios acessíveis ao maior número de pessoas possível, é extremamente importante que estes documentos possam ser lidos em todos idiomas. Nós apreciamos qualquer pessoa que queria ajudar na tradução dos documentos. Este guia fornece instruções de como adicionar uma nova tradução nesta documentação.

## Estrutura

Toda tradução é composta por um arquivo de configuração, `{language-shortcut}.lang.js` (por exemplo, `en.lang.js` ou `ptBR.lang.js`) e os arquivos traduzidos em `posts/{language-shortcut}/*.md` (exemplo `posts/en` ou `posts/ptBR`). `{language-shortcut}` deve ser substituído pelo código de duas letras [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) do seu idioma.

## Configurando seu idioma

 - Copie `en.lang.js`.
 - Renomeie para `{language-shortcut}.lang.js`.
 - Substitua `display` com o nome do seu idioma, no formato do seu idioma. Por exemplo, se você estiver traduzindo alemão, coloque “Deutsch” ao invés de “German”.
 - Substitua o prefixo com `/{language-shortcut}/`.
 - Traduza os valores dos campos `p` e `t`.
 - Traduza todas as propriedades `text` na sidebar. **Nota:** Desde a última versão deste documento, links na sidebar não precisam ser

### Registrando a configuração

Uma vez que tiver terminado a configuração do seu idioma e a tradução das frases e links no arquivo de configuração, você precisará registrar no arquivo raiz de configuração. Para fazer isso, abra `inert.config.js` e adicione a seguinte linha perto do começo do arquivo:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

E claro, lembre-se de substituir `{language-shortcut}` com o valor código correto do [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) (no nome da variável também).

Agora procure pela constante `langs`. Se a constante estiver localizada antes do seu `require`, mova o seu `require` acima dele. Na lista de `langs`, adicione o seguinte objeto:

```js
const langs = [
  ...
  {
    name: 'Algum nome úncio que identifique o seu idioma, como por exemplo `English` ou `Brazilian Portuguese`',
    prefix: "O mesmo prefixo do seu arquivo de configuração",
    config: {language-shortcut}Config // O objeto de configuração que você importou anteriormente
  }
  ...
];
```

Agora você pode começa a traduzir os arquivos, copie a pasta `posts/en` em uma nova pasta `posts/{language-shortcut}` e traduza todos os arquivos. (não traduza o nome dos arquivos, é claro).

Caso você tenha algum problema durante o percurso de tradução, sinta-se livre em [criar uma issue](https://github.com/axios/axios-docs/issues/new/choose).
