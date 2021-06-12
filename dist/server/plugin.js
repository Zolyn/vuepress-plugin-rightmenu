"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Plugin = (opts) => ({
    name: '@zolyn/vuepress-plugin-rightmenu',
    define: () => ({
        ZOLYN_RIGHTMENU_CONFIG: opts.config,
    }),
    enhanceAppFiles: path_1.resolve(__dirname, '../client/enhanceApp.js'),
    globalUIComponents: 'ContextMenu',
});
module.exports = Plugin;
//# sourceMappingURL=plugin.js.map