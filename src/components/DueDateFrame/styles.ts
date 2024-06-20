import {StyleSheet} from 'react-native';

import {backgroundColorList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
  },
  pendingContentContainer: {
    backgroundColor: backgroundColorList.Sucess,
  },
  dateContentContainer: {
    flex: 1,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTextContainer: {
    paddingBottom: 2,
    lineHeight: 48,
  },
});
