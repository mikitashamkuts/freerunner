// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../types';
import {getFunctionTryCatchWrapped} from '../../utils';

/**
 * Custom hook to use typed navigation throughout the app.
 * This ensures that the navigation prop is correctly typed based on the app's root stack parameter list.
 */
function useTypedNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}

export default getFunctionTryCatchWrapped(useTypedNavigation);
