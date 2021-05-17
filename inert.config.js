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
  halt
} = inert;

const enConfig = require('./en.lang.js');
const deConfig = require('./de.lang.js');
const zhConfig = require('./zh.lang.js');
const ptBRConfig = require('./ptBR.lang.js');

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
    // List of language display names
    langs: [
      {
        name: 'English',
        prefix: '/'
      },
      {
        name: 'Brazilian Portuguese',
        prefix: '/ptBR/'
      },
      {
        name: 'Deutsch',
        prefix: '/de/'
      },
      {
        name: '中文',
        prefix: '/zh/'
      }
    ]
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
      deOutput: ":output:/de",
      ptBROutput: ":output:/ptBR",
      zhOutput: ":output:/zh",
      /**
       * Output for posts
       */
      postOutput: ":output:/docs",
      dePosts: ":deOutput:/docs",
      ptBRPosts: ":ptBROutput:/docs",
      zhPosts: ":zhOutput:/docs"
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
      halt('templates/index.ejs'), // This makes sure that the output from the previous methods isn't passed into singleHTMLBuild

      singleHTMLBuild(deConfig),
      writeFile(":deOutput:/index.html"),
      halt('templates/index.ejs'),

      singleHTMLBuild(zhConfig),
      writeFile(":zhOutput:/index.html"),

      singleHTMLBuild(ptBRConfig),
      writeFile(":ptBROutput:/index.html"),
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
          traverseLevel: "flat", // There will be no subfolders, at least in this template
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
      {
        folder: "posts/en",
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            /**
             * Compiles the content of markdown files into HTML. Does not save the result. If the argument
             * `true` is passed, it will throw an error when it encounters a non-markdown file. Will always
             * throw on markdown error.
             */
            markdown(),
            /**
             * This function takes an ejs file as an argument and builds it with the global `data` set to
             * the value of the previous method's result. If this is the first method, the raw content
             * of the given file is used. Will always throw on EJS error.
             *
             * As most blogs are monolingual, we will not be including any fancy i18n stuff here, although
             * you can if you want to.
             */
            htmlBuild("post", enConfig),
            /**
             * Like in the `sass` folder's pipeline, the `write` method takes the output of the previous `htmlBuild`
             * method and writes it to a file with the same name in the specified directory.
             */
            write("postOutput", ".html"),
          ],
        },
      },
      {
        folder: "posts/de",
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            /**
             * Compiles the content of markdown files into HTML. Does not save the result. If the argument
             * `true` is passed, it will throw an error when it encounters a non-markdown file. Will always
             * throw on markdown error.
             */
            markdown(),
            /**
             * This function takes an ejs file as an argument and builds it with the global `data` set to
             * the value of the previous method's result. If this is the first method, the raw content
             * of the given file is used. Will always throw on EJS error.
             *
             * As most blogs are monolingual, we will not be including any fancy i18n stuff here, although
             * you can if you want to.
             */
            htmlBuild("post", deConfig),
            /**
             * Like in the `sass` folder's pipeline, the `write` method takes the output of the previous `htmlBuild`
             * method and writes it to a file with the same name in the specified directory.
             */
            write("dePosts", ".html"),
          ],
        },
      },
      {
        folder: "posts/ptBR",
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            /**
             * Compiles the content of markdown files into HTML. Does not save the result. If the argument
             * `true` is passed, it will throw an error when it encounters a non-markdown file. Will always
             * throw on markdown error.
             */
            markdown(),
            /**
             * This function takes an ejs file as an argument and builds it with the global `data` set to
             * the value of the previous method's result. If this is the first method, the raw content
             * of the given file is used. Will always throw on EJS error.
             *
             * As most blogs are monolingual, we will not be including any fancy i18n stuff here, although
             * you can if you want to.
             */
            htmlBuild("post", ptBRConfig),
            /**
             * Like in the `sass` folder's pipeline, the `write` method takes the output of the previous `htmlBuild`
             * method and writes it to a file with the same name in the specified directory.
             */
            write("ptBRPosts", ".html"),
          ],
        },
      },
      {
        folder: "posts/zh",
        build: {
          traverseLevel: "recursive",
          filePipeline: [
            /**
             * Compiles the content of markdown files into HTML. Does not save the result. If the argument
             * `true` is passed, it will throw an error when it encounters a non-markdown file. Will always
             * throw on markdown error.
             */
            markdown(),
            /**
             * This function takes an ejs file as an argument and builds it with the global `data` set to
             * the value of the previous method's result. If this is the first method, the raw content
             * of the given file is used. Will always throw on EJS error.
             *
             * As most blogs are monolingual, we will not be including any fancy i18n stuff here, although
             * you can if you want to.
             */
            htmlBuild("post", zhConfig),
            /**
             * Like in the `sass` folder's pipeline, the `write` method takes the output of the previous `htmlBuild`
             * method and writes it to a file with the same name in the specified directory.
             */
            write("zhPosts", ".html"),
          ],
        },
      },
    ],
  },
};
