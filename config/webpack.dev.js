const dotenv = require('./webpack/dotenv');                  // get data from .env to process.env.SOME_VAR
const { merge } = require('webpack-merge');                  // merge some webpack plugins
const modeDev = require('./webpack/modeDev');                // webpack mode, entry and out points
const devServer = require('./webpack/devServer');            // local http server http://localhost:8080
const tsLoaderDev = require('./webpack/tsLoaderDev');        // transform ts to js, use babel, insert to head
const pugLoaderDev = require('./webpack/pugLoaderDev');      // transform pug to html, export to index.html
const scssLoaderDev = require('./webpack/scssLoaderDev');    // autoprefix styles, insert to head        // 
const copyStaticDev = require('./webpack/copyStaticDev');    // copy images, fonts, docs from src to temp

module.exports = env => {
  return merge([
    dotenv(),
    modeDev(),
    devServer(),
    pugLoaderDev(),
    scssLoaderDev(),
    tsLoaderDev(),
    copyStaticDev(),
  ]);
};