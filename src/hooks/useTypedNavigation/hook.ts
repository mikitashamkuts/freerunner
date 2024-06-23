import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../types';
import {getFunctionTryCatchWrapped} from '../../utils';

function useTypedNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}

export default getFunctionTryCatchWrapped(useTypedNavigation);
