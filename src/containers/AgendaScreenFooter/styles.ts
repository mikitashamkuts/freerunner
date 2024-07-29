import {StyleSheet} from 'react-native';

import {
  backgroundColorList,
  barBackgroundColorList,
  paddingList,
  separatorColorList,
  separatorWidthList,
} from '@src/design';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: barBackgroundColorList.Light,
    borderTopColor: separatorColorList.Light,
    paddingHorizontal: paddingList.Default,
    paddingTop: paddingList.Small / 2,
    borderTopWidth: separatorWidthList.Default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dark_container: {
    backgroundColor: backgroundColorList.Dark,
    borderTopColor: barBackgroundColorList.Dark,
  },
  buttonContainer: {
    paddingVertical: paddingList.Default,
    alignItems: 'center',
    minWidth: 44,
  },
});
