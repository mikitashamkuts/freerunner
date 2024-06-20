import {trigger} from 'react-native-haptic-feedback';

import {getFunctionTryCatchWrapped} from '../getFunctionTryCatchWrapped';

const getHapticFeedbackTriggered = () => {
  trigger('soft');
};

export default getFunctionTryCatchWrapped(getHapticFeedbackTriggered);
