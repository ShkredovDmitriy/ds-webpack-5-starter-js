# ds-webpack5-starter

Webpack 5 based template for quick website development (updated 04.02.2023)

[Demo](https://shkredovdmitriy.github.io/ds-webpack5-starter/)

#### Libraries

- Pug
- SCSS
- FTP Deploy

#### Structure

```
dist/                # build files
src
  |_ app/            # ts and js files
  |_ assets/         # images, fonts, documents, sprites
  |_ blocks/         # header, footer, section
  |_ components/     # nav, ul
  |_ elements/       # a, span, button
  |_ pages/          # entry points for pages
  |_ styles/         # styles SCSS
  |_ templates/      # templates for pages
.env-sample          # sample config file
.gitignore           # files excluded from uploading to github
deploy.js            # script for ftp deploing
package-lock.json    # standart file
package.json         # standart file
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
