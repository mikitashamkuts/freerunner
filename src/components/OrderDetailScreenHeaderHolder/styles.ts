import {StyleSheet} from 'react-native';
import {paddingList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingList.Default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    left: -10,
  },
  avatarContainerStyle: {
    top: paddingList.Default,
  },
});
