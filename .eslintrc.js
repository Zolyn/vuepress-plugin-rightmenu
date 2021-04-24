module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        CONFIG_FILE: true,
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
