---
title: "Richieste POST"
description: "Come eseguire richieste POST con Axios"
prev_title: "Esempio di Utilizzo"
prev_link: "/docs/example"
next_title: "API di Axios"
next_link: "/docs/api_intro"
---

## Eseguire una richiesta `POST`

### JSON

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

Eseguire più richieste concorrenti

```js
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

const [acct, perm] = await Promise.all([
  getUserAccount(),
  getUserPermissions(),
]);

// OPPURE

Promise.all([getUserAccount(), getUserPermissions()]).then(function ([
  acct,
  perm,
]) {
  // ...
});
```

Inviare un form HTML come JSON

```js
const { data } = await axios.post("/user", document.querySelector("#my-form"), {
  headers: {
    "Content-Type": "application/json",
  },
});
```

### Form

- Multipart (`multipart/form-data`)

```js
const { data } = await axios.post(
  "https://httpbin.org/post",
  {
    firstName: "Fred",
    lastName: "Flintstone",
    orders: [1, 2, 3],
    photo: document.querySelector("#fileInput").files,
  },
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);
```

- Form con URL codificato (`application/x-www-form-urlencoded`)

```js
const { data } = await axios.post(
  "https://httpbin.org/post",
  {
    firstName: "Fred",
    lastName: "Flintstone",
    orders: [1, 2, 3],
  },
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
```
