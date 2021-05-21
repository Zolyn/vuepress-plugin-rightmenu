# vuepress-plugin-rightmenu

[![npm](https://img.shields.io/npm/v/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://npmjs.com/package/@zolyn/vuepress-plugin-rightmenu) [![npmscope](https://img.shields.io/npm/dw/@zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://npmjs.com/package/@zolyn/vuepress-plugin-rightmenu) [![author](https://img.shields.io/badge/author-Zorin-26a2ff?style=flat-square&logo=github)](https://github.com/Zolyn) [![license](https://img.shields.io/github/license/Zolyn/vuepress-plugin-rightmenu?style=flat-square)](https://github.com/Zolyn/vuepress-plugin-rightmenu)

vuepress-plugin-rightmenu is a context menu plugin for[Vuepress](https://v1.vuepress.vuejs.org/zh/), plugins use [Vuetify](https://github.com/vuetifyjs/vuetify) as UI framework,[PureCSS](https://github.com/pure-css/pure) as CSS framework.

## Image preview

![preview](https://cdn.jsdelivr.net/gh/Zolyn/StaticFiles@2021.5.1-release.0/vuepress/images/rightmenu/preview.png) Light mode ![preview-dark](https://cdn.jsdelivr.net/gh/Zolyn/StaticFiles@2021.5.1-release.0/vuepress/images/rightmenu/preview-dark.png) Dark mode

## Demo

[Arcadia](https://blog.zorinchan.icu) (my blog)

## Features

-   Simple view of the Ui (based on the Vuetify library of Material Design).
-   Dark mode
-   Style coverage minimizes as long as possible (original theme coverage minimized)
-   Image link sniffing (image menu bar)
-   Link sniffing
-   Customizable

    1. Icon bar can be customized (icon, callback function)
    2. Default menu bar can be customized (title, click callback function)
    3. Specific menubar, e. g. for images and links can be customized (title, click callback function)
    4. Resident menu bar can be customized (title, click callback function)

-   Coming soon...

## Getting Started

### Installation

```bash
# npm
npm install --save-dev @zolyn/vuepress-plugin-rightmenu

# yarn
yarn add -D @zolyn/vuepress-plugin-rightmenu

# pnpm
pnpm add -D @zolyn/vuepress-plugin-rightmenu
```

### Configuration

Use default configuration

Object style

```js
// .vuepress/config.js
module.exports = {
    plugins: {
        '@zolyn/rightmenu': {},
    },
};
```

Babel style

```js
// .vuepress/config.js
module.exports = {
    plugins: [['@zolyn/rightmenu']],
};
```

## Documentation

[Here](https://blog.zorinchan.icu/docs/vuepress-plugin-rightmenu/)

# Todo

-   [ ] Issue template
-   [ ] CONTRIBUTING.md
-   [ ] All menu bars support icons customization
-   [ ] Sniffer function customization
-   [ ] Partial style customization

## License

[MIT License](https://mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FZolyn%2Fvuepress-plugin-rightmenu.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FZolyn%2Fvuepress-plugin-rightmenu?ref=badge_large)
