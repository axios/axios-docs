---
title: 'Configuration de requête'
prev_title: 'L’instance Axios'
prev_link: '/fr/docs/instance'
next_title: 'Schéma de réponse'
next_link: '/fr/docs/res_schema'
---

Voici les différentes options de configuration que vous pouvez utiliser pour faire des requêtes. Seule l’`url` est obligatoire. Les requêtes utilisent la méthode `GET` par défaut si aucune `method` n’est spécifiée.

```js
{
  // `url` correspond à l’URL à utiliser pour faire la requête au serveur.
  url: '/user',

  // `method` correspond à la méthode à utiliser pour la requête.
  method: 'get', // valeur par défaut

  // `baseURL` sera préfixé à `url` à moins qu’`url` soit absolue.
  // Il peut être utile de définir `baseURL` sur une instance d’Axios puis de
  // passer des URLs relatives aux méthodes de cette instance.
  baseURL: 'https://some-domain.com/api',

  // `transformRequest` permet de modifier les données de la requête avant
  // qu’elle ne soit envoyée au serveur.
  // Ce n’est possible qu’avec les méthodes 'PUT', 'POST', 'PATCH' et 'DELETE'.
  // La dernière fonction dans l’array doit retourner une string ou une instance
  // de Buffer, ArrayBuffer, FormData ou Stream.
  // Vous pouvez également modifier l’objet headers.
  transformRequest: [function (data, headers) {
    // faites ce qui vous chante pour modifier les données

    return data;
  }],

  // `transformResponse` permet de modifier les données d’une réponse avant
  // qu’elle ne soit passée à then/catch.
  transformResponse: [function (data) {
    // faites ce qui vous chante pour modifier les données

    return data;
  }],

  // `headers` correspond à des headers spécifiques à utiliser pour la requête.
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` est une liste de paramètres d’URL pour la requête.
  // Il doit s’agir d’un objet simple (seulement des associations clé-valeur) ou
  // d’un objet URLSearchParams.
  // NOTE : les paramètres null ou undefined ne sont pas rendus dans l’URL.
  params: {
    ID: 12345
  },

  // `paramsSerializer` est un champ pour définir la sérialisation de `params`.
  // Vous pouvez utiliser le champ serialize pour utiliser une fonction de sérialisation personnalisée.
  // Vous pouvez utiliser le champ encode pour utiliser une fonction de codage personnalisée.
  // Si vous définissez une fonction sur `paramsSerializer` comme auparavant, la fonction de codage par défaut d'axios sera attribuée au champ encode.
  // comment `params` doit être sérialisé (avec https://www.npmjs.com/package/qs
  // ou http://api.jquery.com/jquery.param/ par exemple).
  paramsSerializer: {
      serialize: (params) => {
          return Qs.stringify(params, {arrayFormat: 'brackets'})
      },
          encode: (str) => {
          return encodeURIComponent(str)
      }
  },

  // `data` correspond aux données qui constitueront le corps de la requête.
  // Il n’est possible de l’utiliser qu’avec les méthodes 'PUT', 'POST', 'PATCH'
  // et 'DELETE'.
  // Si aucune `transformRequest` n’est définie, il doit être d’un des types
  // suivants :
  // - string, objet simple, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Seulement sur navigateur : FormData, File, Blob
  // - Seulement avec node.js : Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // une autre syntaxe permettant de mettre des données dans le corps de la
  // requête
  // méthode post
  // seule la valeur est envoyée, pas la clé
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` précise le nombre de millisecondes à attendre avant que la
  // requête ne soit considérée comme perdue.
  // Si la requête prend plus de temps que `timeout`, elle est annulée.
  timeout: 1000, // la valeur par défaut est `0` (aucun timeout)

  // `withCredentials` indique si les requêtes inter-site usant des headers
  // Access-Control doivent inclure des informations d’identification.
  withCredentials: false, // par défaut

  // `adapter` permet de définir un traitement des requêtes qui les rende plus
  // simples à tester.
  // Renvoie une promesse avec une réponse valide (voir lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indique que l’authentification basique HTTP doit être utilisée, et
  // donne les informations d’identification correspondantes.
  // Cela ajoute un header `Authorization`, qui remplace celui que vous auriez
  // défini avec `headers`.
  // Seule l’authentification basique HTTP est configurable à l’aide de ce
  // paramètre. Pour les jetons (token) Bearer et autres, utilisez le header
  // `Authorization` directement.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indique le type de donnée qui sera renvoyé par le serveur.
  // les possibilités sont : 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   et seulement sur navigateur : 'blob'
  responseType: 'json', // par défaut

  // `responseEncoding` indique l’encodage à utiliser pour décoder les réponses
  // (seulement avec node.js).
  // NOTE : Ignoré si `responseType` est 'stream' ou pour les requêtes côté
  // client.
  responseEncoding: 'utf8', // par défaut

  // `xsrfCookieName` indique le nom du cookie à utiliser pour le jeton xsrf.
  xsrfCookieName: 'XSRF-TOKEN', // par défaut

  // `xsrfHeaderName` indique le nom du header à utiliser pour le jeton xsrf.
  xsrfHeaderName: 'X-XSRF-TOKEN', // par défaut

  // `onUploadProgress` permet de traiter les events progress pour un upload.
  // Seulement sur navigateur.
  onUploadProgress: function (progressEvent) {
    // faites ce qui vous chante avec l’event progress natif
  },

  // `onDownloadProgress` permet de traiter les events progress pour un
  // téléchargement.
  // Seulement sur navigateur.
  onDownloadProgress: function (progressEvent) {
    // faites ce qui vous chante avec l’event progress natif
  },

  // `maxContentLength` définit la taille maximale du contenu de la réponse en
  // octets (seulement avec node.js).
  maxContentLength: 2000,

  // `maxBodyLength` définit la taille maximale du contenu de la requête en
  // octets (seulement avec node.js).
  maxBodyLength: 2000,

  // `validateStatus` définit si tel ou tel code de réponse (status) résout ou
  // rejette la promesse. Si `validateStatus` retourne `true` (ou est `null` ou
  // `undefined`), la promesse est résolue, et sinon, la promesse est rejetée.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // par défaut
  },

  // `maxRedirects` définit le nombre maximum de redirections à suivre avec
  // node.js. Si la valeur est 0, aucune redirection n’est suivie.
  maxRedirects: 5, // par défaut

  // `socketPath` définit un socket UNIX à utiliser avec node.js.
  // Par exemple '/var/run/docker.sock' pour envoyer des requêtes au daemon
  // docker.
  // Seule une option entre `socketPath` et `proxy` ne peut être utilisée à la
  // fois. Si les deux sont spécifiées, c’est `socketPath` qui est prise en
  // compte.
  socketPath: null, // par défaut

  // `httpAgent` et `httpsAgent` définissent un agent spécifique à utiliser pour
  // effectuer des requêtes HTTP et HTTPS, respectivement, avec node.js. Cela
  // permet d’ajouter des options qui ne sont pas actives par défaut, comme
  // `keepAlive`.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` définit le nom d’hôte (`host`), le port (`port`), et le protocole
  // (`protocol`) du proxy.
  // Vous pouvez également définir votre proxy avec les variables
  // d’environnement habituelles `http_proxy` et `https_proxy`. Si vous utilisez
  // des variables d’environnement pour la configuration de votre proxy, vous
  // pouvez également définir une variable d’environnement `no_proxy` contenant
  // une liste d’hôtes à ne pas proxifier, séparés par des virgules.
  // Utilisez `false` pour ne jamais proxifier, même lorsque les variables
  // d’environnement sont définies.
  // `auth` indique que l’authentification basique HTTP doit être utilisée pour
  // se connecter au proxy, et fournit les informations d’indentification.
  // Cela ajoute un header `Proxy-Authorization`, qui remplace celui que vous
  // auriez défini avec `headers`.
  // Si le proxy utilise HTTPS, alors vous devez également définir `protocol`
  // sur `https`.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` permet de spécifier un jeton (token) d’annulation pouvant
  // servir à annuler la requête (pour plus d’informations voir la page
  // « Annuler une requête »).
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress` indique si le corps de la réponse doit être décompressé 
  // automatiquement ou non. S’il est défini sur `true` il retirera également
  // le header `Content-Encoding` de l’objet réponse de toutes les réponses
  // décompressées.
  // Seulement avec node.js (XMLHttpRequest ne permet pas de désactiver la 
  // décompression).
  decompress: true // par défaut

}
```
