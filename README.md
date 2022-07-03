# ds-webpack5-starter

Universal template for quick website development based on webpack 5.

## Components

Template consists of a large number of components:

#### Webpack 5

Webpack is a static module bundler for modern JavaScript applications.
Template structure:

```
config/              # webpack config files
dist/                # project build files
node_modules/        # all modules and dependencies
pixel-perfect/       # images for a perfect layout, browser addon Perfect Pixel Pro
src
  |_ app/            # ts and js files
  |_ assets/         # images, fonts, documents, sprites
  |_ blocks/         # header, footer, section
  |_ components/     # nav, ul
  |_ elements/       # a, span, button
  |_ pages/          # entry points for pages
  |_ styles/         # style and syle libs
  |_ templates/      # templates for pages
.env-sample          # sample config file
.gitignore           # files excluded from uploading to github
.stylelintignore     # files excluded from stylelint
.stylelintrc.js      # stylelint config file
package-lock.json    # standart file
package.json         # standart file
README.md            # standart file
tsconfig.json        # typescript config file
```

#### Pug

#### SCSS

#### Typescript

#### Favicons

#### Clean

## Commands

Use the following commands:


#### Install

```
npm install
```

#### Start

```
npm run dev
```

#### Build

```
npm run build
```

#### FTP Deploy

You can upload build files to ftp server using ftp deploy, specify ftp settings in .env file.

```
npm run deploy
```

## License

This project is under the MIT license.
