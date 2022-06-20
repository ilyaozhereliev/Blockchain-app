module.exports = {
  env: {
    browser: true,

    es2021: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',

    'plugin:react-hooks/recommended',

    'plugin:jsx-a11y/recommended',

    'plugin:import/recommended',

    'plugin:import/typescript',

    'airbnb',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,

      tsx: true,
    },

    ecmaVersion: 'latest',

    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],

  rules: {
    'no-unused-vars': 'off',

    'import/no-unresolved': 'off',

    'import/prefer-default-export': 'off',

    'import/extensions': [
      'warn',

      {
        js: 'always',

        ts: 'always',

        jsx: 'always',

        tsx: 'always',
      },
    ],

    'react/function-component-definition': 'off',

    'react/jsx-filename-extension': 'off',

    'react/require-default-props': 'off',

    'simple-import-sort/imports': 'error',

    'simple-import-sort/exports': 'error',

    'linebreak-style': ['error', 'windows'],
    'object-curly-newline': 'off',

    // eslint-disable-next-line no-dupe-keys
    'linebreak-style': 0,

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',
  },
};
