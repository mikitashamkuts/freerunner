module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-len': [0, 100, 2, {ignoreUrls: true}],
  },
  env: {
    jest: true,
  },
};
