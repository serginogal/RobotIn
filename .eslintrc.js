module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['wesbos/typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': ['error', {
      semi: false,
      singleQuote: true,
      arrowParens: 'avoid',
      bracketSpacing: true,
      trailingComma: 'none'
    }]
  }
};