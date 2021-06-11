module.exports = {
    extends: ['alloy', 'alloy/typescript', 'alloy/vue', '@vue/typescript'],
    env: {
        node: true,
        browser: true,
        commonjs: true,
    },
    globals: {
        NodeJS: true,
        ZOLYN_RIGHTMENU_CONFIG: true,
    },
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: [['template', 'script'], 'style'],
            },
        ],
    },
};
