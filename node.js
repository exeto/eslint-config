'use strict';

module.exports = {
  extends: require.resolve('./'),
  parserOptions: {
    sourceType: 'script',
  },
  env: {
    node: true,
  },
  rules: {
    strict: ['error', 'global'],
    'no-console': 'off',
  },
};
