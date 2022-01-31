---
title: 'Traduire cette documentation'
---

Afin de rendre Axios accessible à autant de monde que possible, il est important que cette documentation puisse être lue dans un maximum de langues. Toute aide pour la traduction de la documentation est la bienvenue. Ce guide donne des instructions pour ajouter une traduction à cette documentation.

## Structure

Chaque traduction est composée d’un fichier de configuration, `{code-de-langue}.lang.js` (par exemple, `en.lang.js` ou `fr.lang.js`) et des fichiers de documentation traduits dans `posts/{code-de-langue}/*.md` (par exemple `posts/en` ou `posts/fr`). `{code-de-langue}` doit être remplacé par le code à deux lettres [ISO 639-1](https://fr.wikipedia.org/wiki/ISO_639) correspondant à votre langue.

## Configurer votre langue

 - Copiez `en.lang.js`.
 - Renommez-le en `{language-shortcut}.lang.js`.
 - Remplacez `display` par le nom de votre langue, dans votre langue. Par exemple, si vous traduisez en allemand, écrivez « Deutsch » plutôt que « German » ou « allemand ».
 - Remplacez `prefix` par `/{code-de-langue}/`.
 - Traduisez les valeurs des champs `p` et `t`.
 - Traduisez toutes les propriétés `text` des objets de l’array `sidebar`. **Note :** depuis la dernière version de cette documentation, les liens de la sidebar n’ont plus besoin d’être mis à jour.

### Ajouter la traduction à la liste

Une fois que vous avez terminé de configurer votre langue et de traduire les phrases et les liens dans le fichier de configuration, vous devrez l’ajouter à la liste des traductions dans le fichier de configuration racine. Pour ce faire, ouvrez `inert.config.js` et ajoutez la ligne suivante (de préférence vers le haut) :

```js
const {code-de-langue}Config = require('./{code-de-langue}.config.js');
```

Bien sûr, n’oubliez pas de remplacer `{code-de-langue}` par le code [ISO 639-1](https://fr.wikipedia.org/wiki/ISO_639) (dans le nom de variable aussi !).

Une fois que c’est fait, cherchez la constante `langs`. Si cette constante est au-dessus de votre instruction `require`, remontez votre instruction `require` par-dessus. Ajoutez l’objet suivant à l’array `langs` :

```js
const langs = [
  ...
  {
    name: 'Un nom qui identifie votre langue, comme « English » ou « Français »',
    prefix: "Le même préfixe que dans le fichier de configuration de votre langue",
    config: {code-de-langue}Config // l’objet de configuration que vous avez
                                   // importé plus tôt
  }
  ...
];
```

Vous pouvez désormais commencer à traduire les fichiers. Copiez le dossier `posts/en` dans un nouveau dossier `posts/{code-de-langue}` et traduisez tous les fichiers (ne traduisez pas les noms des fichiers).

Si jamais vous rencontrez un souci, n’hésitez pas à [créer une nouvelle issue](https://github.com/axios/axios-docs/issues/new/choose).
