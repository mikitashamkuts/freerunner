import {StyleSheet} from 'react-native';

import {
  barBackgroundColorList,
  paddingList,
  separatorColorList,
  separatorWidthList,
} from '../../design';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: paddingList.Default,
    paddingTop: paddingList.Small / 2,
    backgroundColor: barBackgroundColorList.Light,
    borderTopWidth: separatorWidthList.Default,
    borderTopColor: separatorColorList.Light,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dark_container: {
    backgroundColor: 'black',
    borderTopColor: barBackgroundColorList.Dark,
  },
  buttonContainer: {
    paddingVertical: paddingList.Default,
  },
});
