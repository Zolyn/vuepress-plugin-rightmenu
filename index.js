const { resolve } = require('path');
module.exports = (opts) => ({
    define() {
        return {
            CONFIG_FILE: opts.config,
        };
    },
    name: '@Zolyn/vuepress-plugin-rightmenu',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'MenuLoader',
});
