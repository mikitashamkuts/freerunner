// This is the configuration file for linking assets in a React Native project.
// It is used by the `react-native link` command to link native dependencies and assets like fonts.

module.exports = {
  // The `project` object defines the platforms (iOS and Android) for which the linking will be configured.
  project: {
    // Configuration for the iOS project.
    ios: {},

    // Configuration for the Android project.
    android: {},
  },

  // The `assets` array defines the paths to the asset directories that should be linked.
  // In this case, it includes the path to the fonts directory.
  // When the `react-native link` command is run, it will link these assets to the native projects.
  assets: ['./assets/fonts'],
};
