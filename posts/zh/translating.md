---
title: '翻译文档'
---

为了让Axios被尽可能多的人所了解，将文档翻译成多种语言是必要的。我们对想要帮助翻译文档的人表示衷心的感谢。本文给出了向文档添加翻译的指南。

## 结构

每种语言的翻译都由一个配置文件`{language-shortcut}.lang.js`（例如，`en.lang.js`或者`de.lang.js`），以及一些翻译后的文档文件组成`posts/{language-shortcut}/*.md`（例如`posts/en`或者`posts/de`）。`{language-shortcut}`应该用你所使用的语言的[ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1)双字母代号替换。

## 编写配置文件

 - 创建一个`en.lang.js`文件的副本。
 - 将副本重命名为`{language-shortcut}.lang.js`并对副本文件内容做出以下修改。
 - 将`display`字段替换为你所使用的语言的名字，用该种语言的文字来书写。例如，如果你想将文档翻译成德语，应该在该字段填写“Deutsch”而不是“German”。
 - 将`prefix`字段替换为`/{language-shortcut}/`。
 - 翻译`p`字段以及`t`字段中的values部分，不要翻译keys。
 - 翻译所有`sidebar`字段里标签为`text`的属性。**注意:**从文档的当前版本开始，sidebar里的链接部分已经不需要再更新了。

### 注册配置文件

当你编写完了配置文件后，你需要在项目配置文件里注册该配置。你需要打开`inert.config.js`文件并且在接近顶部的位置添加下面这一行代码：

```js
const {language-shortcut}Config = require('./{language-shortcut}.config.js');
```

当然，别忘了将上面这行代码的`{language-shortuct}`部分替换成你所使用语言的[ISO 369-1](https://en.wikipedia.org/wiki/ISO_639-1)双字母代号。

现在，找到该文件的`langs`常量。如果该常量的声明在你的`require`语句之前，请将你的`require`语句移至该常量声明之前。对于`langs`列表，你需要添加如下这个对象：

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

现在，你可以开始翻译文档了。将`posts/en`文件夹复制到一个新文件夹`posts/{language-shortcut}`，翻译这个新文件夹下的所有文件（保持文件名不变，只翻译文件内容）。

如果你遇到了任何问题，欢迎前来[提出问题](https://github.com/axios/axios-docs/issues/new/choose)。