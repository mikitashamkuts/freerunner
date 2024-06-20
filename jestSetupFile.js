// Mocking the @react-native-async-storage/async-storage module using the provided Jest mock
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
