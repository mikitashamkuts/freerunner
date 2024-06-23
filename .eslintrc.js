module.exports = {
  // Specifies that this is the root configuration file and no other configuration files should be considered
  root: true,

  // Extends the ESLint configuration from '@react-native'
  extends: '@react-native',

  // Custom rules to override or add to the extended configuration
  rules: {
    // Disable the rule that enforces React to be in scope when using JSX
    'react/react-in-jsx-scope': 'off',

    // Enable the rule that enforces the rules of hooks for React hooks
    'react-hooks/rules-of-hooks': 'error',

    // Enable the rule that enforces the exhaustive-deps rule for React hooks
    'react-hooks/exhaustive-deps': 'warn',

    // Disable the max-len rule (line length), allowing lines to exceed 100 characters, but ignoring URLs
    'max-len': [0, 100, 2, {ignoreUrls: true}],
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'warn',
      {
        name: 'react-redux',
        importNames: ['useSelector', 'useDispatch'],
        message:
          'Use typed hooks `useTypedDispatch` and `useTypedSelector` from src/hooks instead.',
      },
      'warn',
      {
        name: '@react-navigation/native',
        importNames: ['useNavigation'],
        message: 'Use typed hooks `useTypedNavigation` from src/hooks instead.',
      },
    ],
  },

  // Specifies the environments the code is designed to run in
  env: {
    // Enables Jest global variables for unit tests
    jest: true,
  },
};
