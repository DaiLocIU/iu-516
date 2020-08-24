module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-console':'off',
    'import/no-unresolved':'off',
    'import/extensions':'off',
    'react/jsx-filename-extension':'off',
    'react/prop-types':'off',
    'react/no-array-index-key':'off',
    'no-shadow':'off',
    'react-hooks/exhaustive-deps':'off',
    'no-unused-vars':'off',
    'no-undef':'off',
    'no-unused-expressions':'off',
    'no-alert':'off',
    'camelcase':'off',
    'jsx-a11y/anchor-is-valid':'off'
  },
};
