import {iconColorList, paddingList} from '@src/design';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
  },
  dayLetterTextContainer: {
    paddingTop: paddingList.Small / 2,
    paddingBottom: paddingList.Small,
  },
  dayNumberTextContainer: {
    paddingVertical: 6,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumberTextContainerActive: {
    backgroundColor: iconColorList.Action,
    borderRadius: 100,
  },
});
