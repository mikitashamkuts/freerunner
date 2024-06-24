import {StyleSheet} from 'react-native';
import {paddingList, separatorColorList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: separatorColorList.Light,
    height: 45,
    marginVertical: paddingList.Small,
    marginHorizontal: paddingList.Default,
    justifyContent: 'center',
  },
  dark_container: {
    borderBottomColor: separatorColorList.Dark,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
