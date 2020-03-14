module.exports = {
    root: true,
    extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
    env: {
        browser: true,
        node: true,
    },
};
