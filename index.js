const { resolve } = require('path');

module.exports = (opts) => ({
    define() {
        return {
            ZOLYN_RIGHTMENU_CONFIG: opts.config,
        };
    },
    name: '@Zolyn/vuepress-plugin-rightmenu',
    enhanceAppFiles: resolve(__dirname, './src/enhanceApp.js'),
    globalUIComponents: 'ContextMenu',
});
