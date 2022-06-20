module.exports = {
  root: true,
  extends: [
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
};
