import {StyleSheet} from 'react-native';
import {paddingList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    height: 323,
    paddingHorizontal: paddingList.Default,
    paddingVertical: 16,
    marginBottom: 70,
  },
  cardTitleContainer: {
    paddingBottom: 16,
  },
  iconWrapperContainer: {
    flexDirection: 'row',
    paddingVertical: paddingList.Default,
  },
  iconContainer: {
    paddingLeft: 35,
    paddingRight: 51,
    paddingBottom: 19,
  },
  cardOrderStatusTextContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  cardOrderStatusTitleContainer: {
    paddingBottom: 8,
  },
});
