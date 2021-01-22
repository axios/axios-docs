# Axios Website Design
> **Disclaimer:** as of right now, the axios project and its authors are not affiliated with, and do not endorse this site. It is simply a community project to create a website for the axios project.

Most information about this project can be found [here](https://github.com/axios/axios/issues/3505#issue-776056722).

The landing page was built using `HTML` and `SCSS` (compiled with VSCode's `live sass compiler` extension).

The documentation page was built using my [`inert static site generator`](https://github.com/codemaster138/inert). It works like this: inside the `docs` folder, there is a folder named `_src` (because GitHub automatically hides all files and folders starting with `_` from viewers on GitHub Pages). Inside this folder, there are some configuration, templates, styles, and, most importantly, in the `posts` folder, multiple markdown files containing the documentation.

To compile the documentation page, one must first install the inert CLI:
```bash
npm i -g inert-cli # yarn global add inert-cli
```

Now, open a terminal, navigate into the folder `docs/_src` and run the following command:
```bash
inert build
```

Inert will convert the markdown files into HTML, insert them into the templates, compile the `SCSS` styles and write the output into the `docs` directory.