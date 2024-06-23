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

/**
 * Detailed Explanation:
 *
 * - **root**:
 *   - Setting this to `true` indicates that this is the root ESLint configuration file.
 *   - ESLint will stop looking for other configuration files in parent folders.
 *
 * - **extends**:
 *   - Specifies the base configuration to extend. In this case, it uses the configuration provided by `@react-native`.
 *   - This typically includes a set of predefined rules and settings suitable for React Native projects.
 *
 * - **rules**:
 *   - Customizes the rules that ESLint enforces.
 *   - `'react/react-in-jsx-scope': 'off'`: Disables the rule requiring React to be in scope when using JSX. This is useful for React 17+ where React imports are no longer necessary.
 *   - `'react-hooks/rules-of-hooks': 'error'`: Enforces the rules of hooks (e.g., only call hooks at the top level, only call hooks from React functions).
 *   - `'react-hooks/exhaustive-deps': 'warn'`: Warns if dependencies in hooks (e.g., useEffect) are missing or incorrect.
 *   - `'max-len'`: Customizes the maximum line length rule. Here, it is effectively disabled (0), allowing lines to exceed 100 characters, but URLs are ignored in this check.
 *
 * - **env**:
 *   - Defines the environments that the code is designed to run in.
 *   - `{ jest: true }`: Enables Jest global variables for unit tests, helping to avoid ESLint errors related to Jest.
 *
 * Usage:
 * - Place this configuration file (`.eslintrc.js`) in the root of your project.
 * - This file configures ESLint to follow the specified rules and environments.
 * - Run ESLint using a script defined in `package.json` or via command line to lint your code according to these settings.
 *
 * Benefits:
 * - Ensures consistent coding standards and best practices across the project.
 * - Helps catch potential issues early in the development process.
 * - Customizable rules allow tailoring to specific project needs and team preferences.
 */
