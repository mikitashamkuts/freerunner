import {StyleSheet} from 'react-native';
import {iconColorList, paddingList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
