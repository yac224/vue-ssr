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
  
- `npm run dev`: webpack + `vue-loader` with hot-reload dev server.

- `npm run build`: build with js minification & css extract with express server.
