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
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@api': 'src/api/index',
          '@components': './src/components/index',
          '@constants': 'src/constants/index',
          '@containers': 'src/containers/index',
          '@design': 'src/design/index',
          '@hooks': 'src/hooks/index',
          '@navigation': 'src/navigation/index',
          '@services': 'src/services/index',
          '@store': 'src/store/index',
          '@translation': 'src/translation/index',
          '@types': 'src/types/index',
          '@utils': 'src/utils/index',
        },
      },
    ],
  ],
};
