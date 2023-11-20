---
title: "Traduciendo la documentación"
---

Para hacer Axios accesible a tantas personas como posible, es importante que estos documentos puedan leerse en todos los idiomas. Siempre apreciamos a cualquiera que quiera
ayudar a traducir la documentación. Esta guía provee instrucciones para agregar una traducción de esta documentación.

## Estructura

Cada traducción esta compuesta de un archivo de configuración, `{language-shortcut}.lang.js` (por ejemplo `en.lang.js` o `de.lang.js`) y
de archivos de documentación traducidos en `posts/{language-shortcut}/*.md` (por ejemplo `posts/en` o `posts/de`). Debes reemplazar `{language-shortcut}` con el código de dos letras de tu idioma según [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).

## Configurando tu idioma

- Copia `en.lang.js`.
- Renómbralo a `{language-shortcut}.lang.js`.
- Reemplaza `display` con el nombre de tu idioma, en tu idioma. Por ejemplo, si estás traduciendo al alemán, usa “Deutsch” en lugar de “Alemán”.
- Reemplaza el prefijo con `/{language-shortcut}/`.
- Traduce los valores en los campos `p` y `t`.
- Traduce todas las propiedades de nombre `text` en el sidebar. **Nota:** Desde la última versión de esta documentación, los links en el sidebar no necesitan ser traducidos.

### Registrando la configuración

Una vez que has finalizado de configurar tu idioma y traducido las frases y enlaces en el archivo de configuración, necesitarás registrarlo
en la configuración principal. Para hacerlo, abre `inert.config.js` y agrega lo siguiente en la parte de arriba:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

Claro, recuerda reemplazar `{language-shortcut}` con el código correcto [ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1) (¡En el nombre de la variable también!).

Ahora, busca la constante `langs`. Si la constante esta por encima de tu declaración `require`, mueve tu declaración `require` arriba. En la lista `langs`, agrega el siguiente objecto:

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // El objeto configuración que importaste anteriormente
  }
  ...
];
```

Ahora, puedes empezar a traducir los archivos. Copia la carpeta `posts/en` como una nueva carpeta `posts/{language-shortcut}` y traduce todos los archivos (no traduzcas los nombres de los archivos).

Si te encuentras con cualquier problema, siéntete libre de [crear un reporte](https://github.com/axios/axios-docs/issues/new/choose).
