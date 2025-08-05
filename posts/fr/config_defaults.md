---
title: 'Configuration par défaut'
prev_title: 'Schéma de réponse'
prev_link: '/fr/docs/res_schema'
next_title: 'Intercepteurs'
next_link: '/fr/docs/interceptors'
---

Vous pouvez définir des valeurs de configuration par défaut qui seront utilisées pour toutes les requêtes.

### Valeurs par défaut globales

```js
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### Valeurs par défaut d’instance

```js
// vous pouvez définir des valeurs par défaut à la création de l’instance…
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// … mais aussi une fois qu’elle a été créée
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

### Ordre de priorité de la configuration

Les différentes configurations sont combinées dans un certain ordre. Cet ordre est le suivant : d’abord les valeurs par défaut de la librairie que vous pouvez retrouver dans [lib/defaults.js](https://github.com/axios/axios/blob/v1.x/lib/defaults.js), puis la propriété `defaults` de l’instance, et enfin l’argument `config` de la requête. Chaque nouvelle valeur a la priorité par rapport à ce qui était défini précédemment. Voici un exemple.

```js
// Création d’une instance en utilisant la configuration par défaut de la
// librairie. Pour l’instant la valeur de `timeout` est `0` puisque c’est la
// valeur par défaut de la librairie.
const instance = axios.create();

// On remplace la valeur par défaut de la librairie. Maintenant chaque requête
// effectuée via cette instance sera attendue 2,5 secondes avant d’être
// considérée comme perdue.
instance.defaults.timeout = 2500;

// On remplace la valeur de `timeout` spécifiquement pour cette requête car on
// sait qu’elle prend du temps.
instance.get('/longRequest', {
  timeout: 5000
});
```
