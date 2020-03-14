module.exports = {
    root: true,
    extends: ['airbnb', 'airbnb-typescript', 'prettier', 'plugin:node/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/indent': 'off',
        'no-console': 'error',
        'react/prop-types': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'react/jsx-one-expression-per-line': 0,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2018,
    },
};
