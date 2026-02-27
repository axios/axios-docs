---
title: 'documentaion ભાષાંતર'
---

Axios ને શક્ય તેટલા વધુ લોકો સુધી સુલભ બનાવવા માટે, આ દસ્તાવેજો બધી ભાષાઓમાં વાંચી શકાય તે મહત્વપૂર્ણ છે. જે કોઈ દસ્તાવેજીકરણનો અનુવાદ કરવામાં મદદ કરવા માંગે છે તેની અમે હંમેશા પ્રશંસા કરીએ છીએ. આ માર્ગદર્શિકા આ ​​દસ્તાવેજીકરણમાં અનુવાદ ઉમેરવા માટેની સૂચનાઓ પ્રદાન કરે છે.

## Structure

Every translation is composed of a configuration file, `{language-shortcut}.lang.js` (for example, `en.lang.js` or `de.lang.js`) and the translated documentation files in `posts/{language-shortcut}/*.md` (for example `posts/en` or `posts/de`). `{language-shortcut}` should be replaced with your language's [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) two-letter code.


## Configuring your language

 - Copy `en.lang.js`.
 - તમારી ભાષા માં નામ બદલો `{language-shortcut}.lang.js`.
 - તમારી ભાષામાં, `display` ને તમારી ભાષાના નામથી બદલો. ઉદાહરણ તરીકે, જો તમે ગુજરાતી ભાષામાં અનુવાદ કરી રહ્યા છો, તો ગુજરાતી ને બદલે “Deutsch” મૂકો..
 - Replace prefix with `/{language-shortcut}/`.
 - Translate the values in the `p` and `t` fields.
 - Translate all the properties labeled `text` in the sidebar. **Note:** Since the latest version of this documentation, links in the sidebar no longer need to be updated.

### Registering the configuration

એકવાર તમે તમારી ભાષા ગોઠવવાનું અને રૂપરેખાંકન ફાઇલમાં શબ્દસમૂહો અને લિંક્સનું ભાષાંતર કરવાનું પૂર્ણ કરી લો, પછી તમારે તેને રૂટ રૂપરેખાંકનમાં રજીસ્ટર કરવાની જરૂર પડશે. આ કરવા માટે, `inert.config.js` ખોલો અને ટોચની નજીક નીચેની લાઇન ઉમેરો:

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

ચોક્કસ,બદલવાનું યાદ રાખો `{language-shortcut}` with the correct [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) code (in the variable name, too!).

હવે, `langs` કોન્સ્ટન્ટ શોધો. જો આ કોન્સ્ટન્ટ તમારા `require` સ્ટેટમેન્ટની ઉપર સ્થિત હોય, તો તમારા `require` સ્ટેટમેન્ટને તેની ઉપર ખસેડો. `langs` લિસ્ટમાં, નીચેનો ઑબ્જેક્ટ ઉમેરો:

```js
const langs = [
  ...
  {
    name: 'Some name that uniquely identifies your language, for example "English" or "German"',
    prefix: "The same prefix as in the configuration file",
    config: {language-shortcut}Config // The configuration object you imported earlier
  }
  ...
];
```

હવે, તમે ફાઇલોનું ભાષાંતર શરૂ કરી શકો છો. `posts/en` ફોલ્ડરને નવા `posts/{language-shortcut}` ફોલ્ડરમાં કોપી કરો અને બધી ફાઇલોનો અનુવાદ કરો (અલબત્ત, ફાઇલનામોનો અનુવાદ કરશો નહીં).

જો તમને કોઈ સમસ્યા આવે, તો નિઃસંકોચ [create an issue](https://github.com/axios/axios-docs/issues/new/choose).