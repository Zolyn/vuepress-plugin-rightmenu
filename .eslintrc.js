module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    rules: {
        'vue/component-tags-order': [
            'error',
            {
                order: [['template', 'script'], 'style'],
            },
        ],
    },
};
