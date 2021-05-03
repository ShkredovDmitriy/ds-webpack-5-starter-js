const dotenv = require('./webpack/dotenv');                        // get data from .env to process.env.SOME_VAR
const { merge } = require('webpack-merge');
const modeProd = require('./webpack/modeProd');                    // webpack mode, entry and output points
const cleanDistFolder = require('./webpack/cleanDistFolder');      // clear "build" folder for clear building
const tsLoaderProd = require('./webpack/tsLoaderProd');            // transform ts to js, use babel, use uglify, export to main.min.js
const pugLoader = require('./webpack/pugLoader');                  // transform pug to html, export to index.html
const copyStaticProd = require('./webpack/copyStaticProd');        // copy images, fonts, from src to build
const scssLoaderProd = require('./webpack/scssLoaderProd');        // minimize styles, autoprefix styles, export to main.min.css
const favicon = require('./webpack/favicon');                      // generate favicons from assets/images/favicon.png

module.exports = env => {
  return merge([
    dotenv(),
    modeProd(),
    cleanDistFolder(),
    tsLoaderProd(),
    pugLoader(),
    copyStaticProd(),
    scssLoaderProd(),
    favicon()
  ]);
};