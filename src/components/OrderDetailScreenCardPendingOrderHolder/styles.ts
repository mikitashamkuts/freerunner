import {StyleSheet} from 'react-native';

import {paddingList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    height: 393,
    paddingHorizontal: paddingList.Default,
    paddingVertical: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardTitleContainer: {
    paddingBottom: 16,
  },
  cardDueDateWrapperContainer: {
    flexDirection: 'row',
    paddingVertical: paddingList.Default,
  },
  cardDueDateContainer: {
    paddingLeft: 16,
    paddingRight: 32,
  },
  cardOrderStatusTextContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  cardOrderStatusTitleContainer: {
    paddingBottom: 8,
  },
  cardBottomContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: paddingList.Default,
  },
});
