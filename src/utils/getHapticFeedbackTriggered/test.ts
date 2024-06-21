import {trigger} from 'react-native-haptic-feedback';
import getHapticFeedbackTriggered from './function';

// Mock the trigger and getExceptionCaptured functions
jest.mock('react-native-haptic-feedback', () => ({
  trigger: jest.fn(),
  HapticFeedbackType: {
    soft: 'soft',
  },
}));

jest.mock('./../../constants/config.ts', () => ({
  HapticFeedbackType: {
    soft: 'soft',
  },
}));

describe('wrappedGetHapticFeedbackTriggered', () => {
  it('should trigger haptic feedback if trigger function is available', () => {
    getHapticFeedbackTriggered('soft');
    expect(trigger).toHaveBeenCalledWith('soft');
  });
});
