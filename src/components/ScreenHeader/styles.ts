import {StyleSheet} from 'react-native';
import {
  barBackgroundColorList,
  paddingList,
  separatorColorList,
  separatorWidthList,
} from '../../design';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: separatorWidthList.Default,

    backgroundColor: barBackgroundColorList.Light,
    borderBottomColor: separatorColorList.Light,
  },
  dark_container: {
    backgroundColor: barBackgroundColorList.Dark,
    borderBottomColor: separatorColorList.Dark,
  },
  contentContainer: {
    paddingHorizontal: paddingList.Default,
    paddingVertical: paddingList.Small,
    justifyContent: 'space-between',
  },
});
