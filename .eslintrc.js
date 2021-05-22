module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
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
