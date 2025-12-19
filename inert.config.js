/**
 * The inert object is provided to us by the inert compiler. It contains a whole lot of helper functions
 * to do all kinds of things for us, like optimize images and compile sass or markdown
 */
const {
  sass,
  write,
  writeFile,
  copy,
  imgOptimize,
  htmlBuild,
  singleHTMLBuild,
  markdown,
  halt,
} = inert;

const fs = require("fs");

const itConfig = require("./it.lang.js");
const hiConfig = require("./hi.lang.js");
const arConfig = require("./ar.lang.js");
const enConfig = require("./en.lang.js");
const deConfig = require("./de.lang.js");
const zhConfig = require("./zh.lang.js");
const ukConfig = require("./uk.lang.js");
const ptBRConfig = require("./ptBR.lang.js");
const kuConfig = require("./ku.lang.js");
const esConfig = require("./es.lang.js");
const frConfig = require("./fr.lang.js");
const trConfig = require("./tr.lang.js");
const krConfig = require("./kr.lang.js");
const viConfig = require("./vi.lang.js");
const faConfig = require("./fa.lang.js");
const ruConfig = require("./ru.lang.js");
const jaConfig = require("./ja.lang.js");
const zhTWConfig = require("./zhTW.lang.js");

const data = fs.existsSync("./temp/data.json")
  ? require("./temp/data.json")
  : {
      sponsors: [],
    };

// List of languages
const langs = [
  {
    dir: "ltr",
    name: "English",
    prefix: "/",
    postsDir: "en", // Not required if prefix is `/<name of folder containing documentation files>/`
    config: enConfig,
  },
  {
    dir: "ltr",
    name: "Brazilian Portuguese",
    prefix: "/ptBR/",
    config: ptBRConfig,
  },
  {
    dir: "ltr",
    name: "Deutsch",
    prefix: "/de/",
    config: deConfig,
  },
  {
    dir: "ltr",
    name: "中文",
    prefix: "/zh/",
    config: zhConfig,
  },
  {
    dir: "ltr",
    name: "Українська",
    prefix: "/uk/",
    config: ukConfig,
  },
  {
    name: "کوردی",
    prefix: "/ku/",
    config: kuConfig,
    dir: "rtl",
  },
  {
    dir: "ltr",
    name: "Español",
    prefix: "/es/",
    config: esConfig,
  },
  {
    dir: "ltr",
    name: "Français",
    prefix: "/fr/",
    config: frConfig,
  },
  {
    dir: "ltr",
    name: "हिंदी",
    prefix: '/hi/',
    config: hiConfig
  },
  {
    dir: "ltr",
    name: "Türkçe",
    prefix: "/tr/",
    config: trConfig,
  },
  {
    dir: "ltr",
    name: "한국어",
    prefix: "/kr/",
    config: krConfig,
  },
  {
    dir: "ltr",
    name: "Tiếng Việt",
    prefix: "/vi/",
    config: viConfig,
  },
  {
    dir: "rtl",
    name: "فارسی",
    prefix: "/fa/",
    config: faConfig,
  },
  {
    dir: "ltr",
    name: "Русский",
    prefix: "/ru/",
    config: ruConfig,
  },
  {
    dir: "rtl",
    name: "Arabic",
    prefix: "/ar/",
    postsDir: "ar",
    config: arConfig,
  },
  {
    dir: "ltr",
    name: "日本語",
    prefix: "/ja/",
    config: jaConfig,
  },
  {
    dir: "ltr",
    name: "繁體中文",
    prefix: "/zhTW/",
    config: zhTWConfig,
  },
  {
    dir: "ltr",
    name: "Italiano",
    prefix: "/",
    postsDir: "/it/",
    config: itConfig,
  },
];

/**
 * This is the inert configuration file. It contains all the information inert needs to build this template.
 */
module.exports = {
  /**
   * This field contains additional configuration. The inert compiler itsself ignores this info,
   * but any given part of the pipeline is free to use this data.
   */
  custom: {
    /**
     * Site Title
     */
    title: "Axios Docs",
    // List of languages
    langs: langs,
    ...data,
  },
  build: {
    /**
     * A list of additional methods and objects that will be available in ejs tags inside the templates
     */
    globals: [require, inert],

    templates: {
      home: "templates/home.ejs",
      post: "templates/post.ejs",
    },

    sourceDirs: {
      /**
       * Directory containing style files. This template uses SCSS (sass) for styling.
       */
      scss: "scss",
      /**
       * Directory containing additional static assets. These will be copied to the `assets`
       * output directory and some image might be optimized
       */
      assets: "assets",
      /**
       * Since this is a blog template, this directory will contain posts.
       */
      posts: "posts",
    },

    /**
     * Output directories. Each key can be referenced from helper methods.
     */
    outDirs: {
      /**
       * Main output directory. MUST be named output
       */
      output: "public",
      /**
       * Output for SASS Files. :output: will be replaced with the value of the output property.
       * This also applies to all other properties of this object.
       */
      sassOutput: ":output:/style",
      /**
       * Output for other static assets
       */
      assets: ":output:/assets",
      /**
       * Here, we'll store optimized static assets
       */
      optimizedAssets: ":assets:/optimized",
      /**
       * Output for internationalized files
       */
      ...langs.reduce(
        (acc, lang) =>
          lang.prefix === "/"
            ? acc
            : {
                ...acc,
                [lang.prefix.slice(1, -1) +
                "Output"]: `:output:/${lang.prefix.slice(1, -1)}`,
              },
        {}
      ),
      /**
       * Output for posts
       */
      postOutput: ":output:/docs",
      ...langs.reduce(
        (acc, lang) =>
          lang.prefix === "/"
            ? acc
            : {
                ...acc,
                [lang.prefix.slice(1, -1) + "Posts"]: `:${lang.prefix.slice(
                  1,
                  -1
                )}Output:/docs`,
              },
        {}
      ),
    },

    rootFile: "templates/home.ejs",
    /**
     * Like the `filePipeline` porperty of the `folders`, but only runs once, for the root file.
     */
    slashPipeline: [
      /**
       * Builds the given file using the EJS library.
       */
      singleHTMLBuild(enConfig),
      /**
       * Like `write`, but writes only a single file.
       */
      writeFile(":output:/index.html"),
      /**
       * Build for other languages
       */
      halt("templates/index.ejs"), // This makes sure that the output from the previous methods isn't passed into singleHTMLBuild

      ...langs
        .map((lang) => [
          singleHTMLBuild(lang.config),
          writeFile(
            lang.prefix === "/"
              ? ":output:/index.html"
              : `:${lang.prefix.slice(1, -1)}Output:/index.html`
          ),
        ])
        .flat(),
    ],

    /**
     * A list of objects.
     *
     * Each object point to a specfic folder and contains info about how to build it.
     */
    folders: [
      {
        /**
         * A key in the `sourceDirs` object which point to the path to the folder
         */
        folder: "scss",
        /**
         * How to build the folder
         */
        build: {
          /**
           * How to traverse the folder.
           * Acceptable values: `flat` (single-level traversal) and `recursive` (also traverse subfolders)
           *
           * `flat` is a little faster, so If you can, you should use it.
           */
          traverseLevel: "recursive", // There will be no subfolders, at least in this template
          /**
           * A list of methods.
           *
           * After the folder is traversed, the first method is called with the entire configuration as a
           * first argument and the first file as the second argument, then the second function is called
           * with the first method's result as an addition third argument, then the third method with the
           * result from the second as third argument, and so on. This is repeated for each file.
           */
          filePipeline: [
            /**
             * Uses the `sass` package to compile the file. Will always throw on sass compiler error.
             */
            sass(),
            /**
             * Writes the previous method's output to a file with the same name in the specified directory.
             * The `directory` option should **not** contain a path to a directory, but instead point to a
             * key in the `outDirs` object, which in turn contains a path.
             */
            write("sassOutput", ".css"),
          ],
        },
      },
      {
        folder: "assets",
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            /**
             * This helper method copies the file into the assets folder. Again, don't specify a path, but
             * rather a key from `outDirs` object
             */
            copy("assets"),
            /**
             * This method converts any PNG and JPEG images into optimized WebP. The old images are also kept.
             * Non-PNG/JPEG assets are completely ignored.
             *
             * The method will also create scaled copies of the image: 460w, 720w, 1080w and 2048w, although
             * widths higher than the original image width are dropped (for an image 740px wide, only 460w
             * and 720w versions are generated, not 1080w and 2048w)
             *
             * The `ignore` options contains a list of files or globs to ignore
             */
            imgOptimize("optimizedAssets", { ignore: [] }),
          ],
        },
      },
      ...langs.map((lang) => ({
        folder: `posts/${lang.postsDir || lang.prefix.slice(1, -1)}`,
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            markdown(),
            htmlBuild("post", lang.config),
            write(
              lang.prefix === "/"
                ? "postOutput"
                : `${lang.prefix.slice(1, -1)}Posts`,
              ".html"
            ),
          ],
        },
      })),
    ],
  },
};
