// Exporting the Babel configuration
module.exports = {
  // Specifies the Babel presets to be used. Presets are a set of plugins used to transform the code.
  presets: ['module:@react-native/babel-preset'],

  // Specifies the Babel plugins to be used. Plugins are individual transformations applied to the code.
  plugins: [
    [
      // The 'react-native-dotenv' plugin is used to load environment variables from a .env file.
      'module:react-native-dotenv',
      {
        // Ensures that a .env.example file exists and matches the variables in the .env file.
        safe: true,

        // Throws an error if any environment variables are undefined.
        allowUndefined: false,
      },
    ],
    // The 'react-native-reanimated/plugin' plugin is required for React Native Reanimated library.
    ['react-native-reanimated/plugin'],
  ],
};

/**
 * Detailed Explanation:
 *
 * - **presets**: ['module:@react-native/babel-preset']
 *   - This specifies the preset to be used by Babel.
 *   - The `@react-native/babel-preset` preset is designed specifically for React Native projects.
 *   - It includes a set of plugins and settings optimized for transforming React Native code.
 *
 * - **plugins**:
 *   - **['module:react-native-dotenv', { ... }]**
 *     - This plugin loads environment variables from a .env file into the application.
 *     - The `safe` option ensures that a .env.example file exists and has the same variables as the .env file.
 *     - The `allowUndefined` option, when set to `false`, throws an error if any environment variables are undefined.
 *     - This helps ensure that all necessary environment variables are defined and available.
 *
 *   - **['react-native-reanimated/plugin']**
 *     - This plugin is required for the React Native Reanimated library to work correctly.
 *     - React Native Reanimated is a high-performance animation library for React Native.
 *     - Including this plugin ensures that the necessary transformations for Reanimated are applied during the build process.
 *
 * Usage:
 * - This Babel configuration file should be placed in the root of your project.
 * - Babel will use this configuration to transform your React Native code according to the specified presets and plugins.
 * - Make sure to install the required dependencies for the presets and plugins listed.
 *
 * Benefits:
 * - Ensures that environment variables are properly loaded and managed in the project.
 * - Enables the use of the React Native Reanimated library with necessary transformations.
 * - Provides a streamlined and optimized setup for transforming React Native code.
 */
