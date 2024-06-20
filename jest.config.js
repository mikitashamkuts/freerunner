// Jest configuration file for a React Native project

module.exports = {
  // Specifies the Jest preset configuration to use. 'react-native' preset includes configurations
  // specific to React Native projects, ensuring tests run correctly in the React Native environment.
  preset: 'react-native',

  // Array of file paths to setup files that will be run before each test suite.
  // These files can include any global configuration or setup required for tests.
  setupFiles: ['./jestSetupFile.js'],
};

/**
 * Detailed Explanation:
 *
 * - **preset**: 'react-native'
 *   - This setting tells Jest to use the 'react-native' preset, which includes the necessary configurations
 *     and setup for running tests in a React Native environment. It ensures that Jest is aware of React Native
 *     specific modules and transformations.
 *
 * - **setupFiles**: ['./jestSetupFile.js']
 *   - This is an array of paths to setup files that will be executed before running the tests.
 *   - These setup files can be used to configure the testing environment, set up global variables, or mock modules.
 *   - In this example, `jestSetupFile.js` is specified, which should contain any global setup logic needed for your tests.
 *
 * Example jestSetupFile.js:
 * ```javascript
 * // jestSetupFile.js
 *
 * // Mock async storage
 * jest.mock('@react-native-async-storage/async-storage', () =>
 *   require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
 * );
 *
 * // Additional setup can be added here
 * ```
 *
 * Usage:
 * - This configuration file should be placed in the root of your project.
 * - Jest will automatically pick up this configuration when running tests.
 * - Ensure that `jestSetupFile.js` exists and contains any necessary setup logic for your tests.
 *
 * Benefits:
 * - Provides a standardized setup for testing React Native applications.
 * - Ensures that tests have the required environment and mocks configured.
 * - Simplifies test configuration by using the preset and setup files.
 */
