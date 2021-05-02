const dotenv = require('./webpack/_dotenv');                  // get data from .env to process.env.SOME_VAR
const { merge } = require('webpack-merge');                   // merge some webpack plugins
const modeDev = require('./webpack/_modeDev');                // webpack mode, entry and out points
const devServer = require('./webpack/_devServer');            // local http server http://localhost:8080
const tsLoaderDev = require('./webpack/_tsLoaderDev');        // transform ts to js, use babel, insert to head
const pugLoader = require('./webpack/_pugLoader');            // transform pug to html, export to index.html
const scssLoaderDev = require('./webpack/_scssLoaderDev');    // autoprefix styles, insert to head
const copyStaticDev = require('./webpack/_copyStaticDev');    // copy images, fonts, docs from src to temp

module.exports = env => {
  return merge([
    dotenv(),
    modeDev(),
    devServer(),
    pugLoader(),
    scssLoaderDev(),
    tsLoaderDev(),
    copyStaticDev(),
    // lintCSS()
  ]);
};