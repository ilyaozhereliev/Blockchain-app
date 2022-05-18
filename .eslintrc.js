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
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',

    'import/extensions': [
      'warn',
      {
        js: 'always',
        ts: 'always',
        jsx: 'always',
        tsx: 'always',
      },
    ],
  },
};
