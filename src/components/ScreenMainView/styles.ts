import {backgroundColorList} from '@src/design';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorList.Light,
    flex: 1,
    justifyContent: 'space-between',
  },
  dark_container: {
    backgroundColor: backgroundColorList.Dark,
  },
});
