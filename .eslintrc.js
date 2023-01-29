module.exports = {
    env: {
        browser: true,
        es2022: true,
        'react-native/react-native': true,
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'react-native', 'prettier'],
    rules: {
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx'],
            },
        ],
        'react/function-component-definition': 'off',
        'react/require-default-props': 'off',
        'no-nested-ternary': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                ignoreFunctionTypeParameterNameValueShadow: true,
            },
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        camelcase: 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
};
