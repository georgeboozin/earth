module.exports = {
    root: true,
    extends: ['airbnb', 'airbnb-typescript', 'prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/indent': 'off',
        'no-console': 'error',
    },
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        project: 'tsconfig.json',
    },
};
