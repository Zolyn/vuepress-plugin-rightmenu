const { resolve } = require('path');
module.exports = () => ({
    name: '@Zolyn/vuepress-plugin-rightmenu',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'ContextMenu',
});
