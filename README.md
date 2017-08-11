# vue-ssr

> A vue server render templete for quick start

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init yac224/vue-ssr my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included

- Server Side Rendering
  - Vue + vue-router + vuex working together
  - Server-side data pre-fetching
  - Client-side state & DOM hydration
  - Automatically inlines CSS used by rendered components only
  - Preload / prefetch resource hints
  - Route-level code splitting

- VSCode Setting
  - recommendation plugins
  - formatter setting for beautify & eslint
  - blueprint template for project

## Build Setup

**Requires Node.js 6+**

``` bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

# build for production express server with js minification & css extract
npm run build

# serve in production mode
npm start

# check eslint from standard rule
npm run lint
```

## License

MIT
