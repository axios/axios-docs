# Axios Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/09768f21-08e2-487b-8c7a-7fb084bbf99d/deploy-status)](https://app.netlify.com/sites/axios-docs/deploys)
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

The documentation page was built using [`inert static site generator`](https://github.com/codemaster138/inert). It works like this: Inside the root folder, there are some configuration, templates, styles, and, most importantly, in the `posts` folder, multiple markdown files containing the documentation.

To compile the documentation page, one must first install the inert CLI:

```bash
npm i -g inert-cli # yarn global add inert-cli
```

Now, open a terminal and run the following command:

```bash
inert build
```

Inert will convert the markdown files into HTML, insert them into the templates, compile the `SCSS` styles and write the output into the `public` directory.

This website was generously created by [@codemaster138](https://github.com/codemaster138)
