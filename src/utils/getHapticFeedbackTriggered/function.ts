import {HapticFeedbackTypes, trigger} from 'react-native-haptic-feedback';

import {exceptionList, hapticFeedbackModeList} from '@src/constants';
import {getExceptionCaptured} from '../getExceptionCaptured';
import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

/**
 * Triggers haptic feedback with an optional mode.
 *
 * @param {keyof typeof HapticFeedbackTypes} [hapticFeedbackMode] - The haptic feedback mode to trigger. Defaults to a specified default mode if not provided.
 */
function getHapticFeedbackTriggered(hapticFeedbackMode: keyof typeof HapticFeedbackTypes) {
  if (trigger && hapticFeedbackMode) {
    trigger(hapticFeedbackMode || hapticFeedbackModeList.Default);
  } else {
    hapticFeedbackMode
      ? getExceptionCaptured(getHapticFeedbackTriggered, exceptionList.UnavailableModule)
      : getExceptionCaptured(getHapticFeedbackTriggered, exceptionList.InvalidParam);
  }
}

export default getFunctionTryCatchWrapped(getHapticFeedbackTriggered);
