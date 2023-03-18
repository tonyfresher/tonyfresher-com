module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'next/core-web-vitals',
        'prettier'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname
    },
    rules: {
        'no-irregular-whitespace': [
            'error',
            {skipStrings: true, skipTemplates: true}
        ],
        'import/prefer-default-export': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/require-await': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/display-name': 'off'
    }
};
