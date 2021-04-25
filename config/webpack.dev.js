const dotenv = require('./_modules/_dotenv');                  // get data from .env to process.env.SOME_VAR
const { merge } = require('webpack-merge');                    // merge some webpack plugins
const modeDev = require('./_modules/_modeDev');                // webpack mode, entry and out points
const devServer = require('./_modules/_devServer');            // local http server http://localhost:8080
const tsLoaderDev = require('./_modules/_tsLoaderDev');        // transform ts to js, use babel, insert to head
const pugLoader = require('./_modules/_pugLoader');            // transform pug to html, export to index.html
const scssLoaderDev = require('./_modules/_scssLoaderDev');    // autoprefix styles, insert to head
const copyStaticDev = require('./_modules/_copyStaticDev');        // copy images, fonts, docs from src to temp

module.exports = env => {
  return merge([
    dotenv(),
    modeDev(),
    devServer(),
    pugLoader(),
    scssLoaderDev(),
    tsLoaderDev(),
    copyStaticDev(),
  ]);
};