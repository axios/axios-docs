---
title: "Peticion POST"
description: "Como ejecutar una peticion POST con Axios"
prev_title: "Ejemplo Mínimo"
prev_link: "/es/docs/example"
next_title: "Axios API"
next_link: "/es/docs/api_intro"
---

## Ejecutando una peticion `POST`

```js
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Ejecutando múltiples peticiones concurrentes

```js
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

Promise.all([getUserAccount(), getUserPermissions()]).then(function (results) {
  const acct = results[0];
  const perm = results[1];
});
```
