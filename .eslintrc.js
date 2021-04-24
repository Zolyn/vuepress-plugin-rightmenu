module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        ICON_BAR: true,
        NORMAL_ACTIONS: true,
        EVENT_ACTIONS: true,
        STICKY_ACTIONS: true,
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
