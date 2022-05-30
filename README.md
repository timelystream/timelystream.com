[![Netlify Status](https://api.netlify.com/api/v1/badges/8bf4638d-8f79-4cc4-9970-b47359eb1a35/deploy-status)](https://app.netlify.com/sites/unruffled-blackwell-31bfb2/deploys)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-green.svg)](https://conventionalcommits.org)

# timelystream.com

[This website](https://timelystream.com) is built using [Docusaurus 2](https://v2.docusaurus.io/). Pages & components are written in TypeScript, the styles in vanilla CSS with variables using [CSS Modules](https://github.com/css-modules/css-modules).



Each time you submit, the website will automatically store the generated static pages to `netlify`.


## Clone repo

```bash
clone git@github.com:timelystream/timelystream.com.git
cd ./timelystream.com
```

## Docker development (Recommend)

```
docker run -it -v "$(pwd)"/.:/timelystream.com -p 3000:3000 --name tm.com timelystream/website bash
```

With docker you don't need to install any software. like `yarn`, `node.js`.

## Local development (Not recommend)

Note. On Linux you may have to install `autoconf` package to have a successful
installation. On Ubuntu it should be enough to run
`sudo apt-get install autoconf` command to install the package.


## Run/Test/Modify timelystream website

Whether you are using docker or in native development mode, 
you can execute the following commands to run, test and modify the site


### Install depends

```script
yarn
```

### Start timelystream website

```script
yarn start --host 0.0.0.0
```

This command starts a development server, you can open up a browser window `http://localhost:3000`.
Most changes are reflected live without having to restart the server.

### Build for production

```script
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service. For that purpose, you can also
use:

```script
yarn serve
```

## Manual Deploy

This command will push all static content files in `build` direcory to `timelystream/timelystream.com` repo `gh-pages` branch. 

Note: Since we now use `netlify` to store static content files, So this operation is no longer necessary.

```
GIT_USER=<GITHUB_USERNAME> USE_SSH=true yarn deploy
```

# Contributing

Feel free to contribute to the project by forking the repository and submitting
pull requests.

## Guidelines

Consult the
[guidelines](https://github.com/timelystream/timelystream.com/blob/master/docs/__guidelines/markdown.md).

## Lexicon

Consult the
[lexicon](https://github.com/timelystream/timelystream.com/blob/master/docs/__guidelines/lexicon.md)
for terminology we commonly use

## Commits

The commit messages must follow the
[Conventional Commits](https://conventionalcommits.org/) spec.

# Code Quality

## 1. Linting

The coding style rules are defined by [Prettier](https://prettier.io/) and
enforced by [Eslint](https://eslint.org)

On top of this, we follow the rules set by the
[JavaScript Standard Style](https://standardjs.com/rules.html).

You do not need to run the linting task manually, Webpack will take care of that
for you.

## 2. Git Hooks

We use [Husky](https://github.com/typicode/husky) to automatically deploy git
hooks.

On every `git commit` we check that images added to `static/img/*` do not exceed
10MB.
