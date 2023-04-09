# ds-webpack-5-starter-js

Webpack 5 based template for quick website development (updated 09.04.2023)

[Demo](https://shkredovdmitriy.github.io/ds-webpack5-starter/)

#### Libraries

- Pug
- SCSS
- Autoprefixer
- Babel
- FTP Deploy

#### Structure

```
dist/                # build
src
  |_ app/            # ts, js files
  |_ assets/         # pdf, images, fonts, documents, sprites
  |_ blocks/         # header, footer, section
  |_ components/     # nav, ul
  |_ elements/       # a, p, span, button
  |_ pages/          # entry points for pages (Pug)
  |_ styles/         # styles (SCSS)
  |_ templates/      # templates for pages (Pug)
.env-sample          # sample config file
.gitignore           # files excluded from uploading to github
deploy.js            # script for ftp deploing
package-lock.json    # standart nodejs file
package.json         # standart nodejs file
README.md            # project documentation
webpack.dev.js       # webpack config for developming
webpack.prod.js      # webpack config for production
```

## Installation

Please use Nodejs 18 or newer

```
npm install
```

#### Start

```
npm run start
```

#### Build

```
npm run build
```

#### FTP Deploy

You can upload build files to ftp server, specify ftp settings in .env file

```
npm run deploy
```

## License

This project is under the MIT license.
