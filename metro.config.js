// Import the default configuration and merge function from @react-native/metro-config
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// Import the Sentry configuration wrapper for Metro
const {withSentryConfig} = require('@sentry/react-native/metro');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// Export the configuration, wrapped with Sentry's configuration for Metro
// This combines the default Metro configuration with any custom settings defined in `config`
module.exports = withSentryConfig(mergeConfig(getDefaultConfig(__dirname), config));

/**
 * Detailed Explanation:
 *
 * - **getDefaultConfig**:
 *   - Function from `@react-native/metro-config` that retrieves the default Metro configuration for the project.
 *   - It accepts the current directory (`__dirname`) as an argument to base the configuration on the current project setup.
 *
 * - **mergeConfig**:
 *   - Utility function from `@react-native/metro-config` that merges two Metro configuration objects.
 *   - It combines the default configuration retrieved by `getDefaultConfig` with any custom configurations specified in `config`.
 *
 * - **withSentryConfig**:
 *   - Function from `@sentry/react-native/metro` that wraps the provided Metro configuration with additional settings required for Sentry integration.
 *   - Sentry is used for error tracking and performance monitoring. This wrapper ensures that Sentry's required configurations are included.
 *
 * - **config**:
 *   - An empty configuration object where custom Metro settings can be defined.
 *   - This is where you can add or override any Metro settings specific to your project.
 *
 * - **module.exports**:
 *   - The final configuration is exported by combining the default Metro configuration, any custom settings, and the Sentry configuration wrapper.
 *   - This export is used by Metro to configure the bundler when running React Native commands.
 *
 * Usage:
 * - This configuration file ensures that the Metro bundler is set up correctly with Sentry's integration for error tracking and performance monitoring.
 * - To customize the Metro configuration, you can add settings to the `config` object.
 * - This setup leverages the default React Native Metro configuration, ensuring compatibility and reducing the need for extensive custom configuration.
 *
 * Example of Customization:
 * - To add custom settings, you can modify the `config` object. For example, to add custom transformers or asset plugins, you could do:
 *
 * ```javascript
 * const config = {
 *   transformer: {
 *     babelTransformerPath: require.resolve('react-native-svg-transformer'),
 *   },
 *   resolver: {
 *     assetExts: ['svg', 'png', 'jpg'],
 *   },
 * };
 * ```
 *
 * This configuration ensures a streamlined and consistent setup for React Native projects, integrating Sentry for enhanced monitoring and error tracking.
 */
