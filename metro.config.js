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
