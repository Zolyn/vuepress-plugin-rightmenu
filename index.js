const { resolve } = require('path');
module.exports = (opts) => ({
    define() {
        return {
            ICON_BAR: opts.iconBar,
            NORMAL_ACTIONS: opts.normalActions,
            EVENT_ACTIONS: opts.eventActions,
            STICKY_ACTIONS: opts.stickyActions,
        };
    },
    name: '@Zolyn/vuepress-plugin-rightmenu',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'ContextMenu',
});
