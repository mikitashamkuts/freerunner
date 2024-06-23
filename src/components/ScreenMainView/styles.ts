import {StyleSheet} from 'react-native';
import {backgroundColorList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColorList.Light,
    flex: 1,
  },
  dark_container: {
    backgroundColor: backgroundColorList.Dark,
  },
});
