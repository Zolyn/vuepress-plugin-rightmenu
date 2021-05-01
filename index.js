const { resolve } = require('path');

function getEnhanceApp(type) {
    let enhanceAppPath = '';
    switch (type) {
        case 'VueMaterial': {
            enhanceAppPath = resolve(__dirname, './src/enhanceAppFiles/VueMaterial.js');
            break;
        }
        default: {
            break;
        }
    }
    return enhanceAppPath;
}

module.exports = (opts) => ({
    define() {
        return {
            CONFIG_FILE: opts.config,
        };
    },
    name: '@Zolyn/vuepress-plugin-rightmenu',
    enhanceAppFiles: getEnhanceApp(opts.type),
    globalUIComponents: 'ContextMenu',
});
