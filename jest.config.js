// Jest configuration file for a React Native project

module.exports = {
  // Specifies the Jest preset configuration to use. 'react-native' preset includes configurations
  // specific to React Native projects, ensuring tests run correctly in the React Native environment.
  preset: 'react-native',

  // Array of file paths to setup files that will be run before each test suite.
  // These files can include any global configuration or setup required for tests.
  setupFiles: ['./jestSetupFile.js'],
};
