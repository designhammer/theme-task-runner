# Theme Task Runner - DesignHammer

Node JS builder for theming


## Getting Started

Copy all files to the root of your custom theme directory; minus the `.git` directory.


## Install

Install the following node modules (npm), in the same directory as this readme file, for compiling and linting our code.

We use **bun.sh** for JavaScript runtime. See how to [install bun](https://bun.sh/docs/installation).

```bash
bun add -D autoprefixer browser-sync concurrently nodemon postcss postcss-cli postcss-pxtorem sass standard stylelint stylelint-config-sass-guidelines stylelint-order uglify-js
```

Bun.sh allows us to pipe scripts together from stdin/stdout and execute it without writing to a temporary file first.

- style:sass - Dart Sass CLI with stdout.
- style:replace - Replaces Sass soucremap source urls from absolute to relative.
- style:postcss - PostCSS CLI using config for plugins settings.
- style - Brings it altogether using Bun CLI stdin/stdout.


## Config

**bsync.config file:**

- Duplicate `bsync.config.sample.js` file and rename it `bsync.config.js`.
- Change values in file as needed.
- ⚠️ Do not commit `bsync.config.js` to the repo. It's for your local dev env only.


## Linting

We'll also be linting our Sass and JavaScript in order to produce well written and consistent code.

Required lint files (should be added during initial theme setup):

- .eslintrc.json
- .stylelint.json

To do a global lint on the `.scss` files run: `bunx stylelint "scss/**/*.scss"`. To fix found errors add the `--fix` flag.

---

## Editor

**Sublime:** install the following packages using package control:

- [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)
- [SublimeLinter-contrib-standard](https://packagecontrol.io/packages/SublimeLinter-contrib-standard)
- [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint)
- [SublimeLinter-stylelint](https://packagecontrol.io/packages/SublimeLinter-stylelint)


**VS Code:** install the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

Workspace setting should be located at the root of this project's repo: `/.vscode/settings.json`. Replace all instances of `THEMENAME` with the name of your theme.

```json
{
  "files.trimTrailingWhitespace": true,
  "eslint.workingDirectories": [
    "htdocs/themes/THEMENAME"
  ],
  "stylelint.configBasedir": "htdocs/themes/THEMENAME",
  "stylelint.configFile": "htdocs/themes/THEMENAME/.stylelintrc.json",
  "stylelint.snippet": [
    "sass",
    "scss"
  ],
  "stylelint.validate": [
    "sass",
    "scss"
  ],
  "phpsab.fixerEnable": true,
  "phpsab.snifferEnable": true,
  "phpsab.standard": "Drupal/WordPress",
  "phpsab.executablePathCS": "./vendor/bin/phpcs",
  "phpsab.executablePathCBF": "./vendor/bin/phpcbf"
}
```


### Installing [PHP Code Sniffer](https://docs.designhammer.net/guides/coding-standards/) for Drupal

Run the following command from the root directory of this repo.

```bash
$ composer require --dev --with-all-dependencies drupal/coder
# set phpcs paths to Drupal, DrupalPractice
$ vendor/bin/phpcs --config-set installed_paths vendor/drupal/coder/coder_sniffer
```

To test if phpcs includes the correct sniffer, run `vendor/bin/phpcs -i`, and you should see `Drupal`, and `DrupalPractice` added to the coding standards list.


### Installing [PHP Code Sniffer](https://docs.designhammer.net/guides/coding-standards/) for WordPress

Run the following command from the root directory of this repo.

```bash
$ composer require --dev squizlabs/php_codesniffer wp-coding-standards/wpcs
# required plugin
$ composer require --dev dealerdirect/phpcodesniffer-composer-installer
# set phpcs paths to WordPress PHP Coding Standards
$ vendor/bin/phpcs --config-set installed_paths vendor/wp-coding-standards/wpcs
```
