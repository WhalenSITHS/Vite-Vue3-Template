module.exports = {
    root: true,
    env: { node: true },
    // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error',
        'vue/script-setup-uses-vars': 'off',
    },
};
