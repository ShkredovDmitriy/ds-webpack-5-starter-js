const Dotenv = require('dotenv-webpack');

module.exports = function() {
  return {
    plugins: [
      new Dotenv()
    ],
  }
}