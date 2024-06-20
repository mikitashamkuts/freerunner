import {StyleSheet} from 'react-native';

import {backgroundColorList, paddingList} from '../../../design';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: backgroundColorList.Default,
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },
  topOrderDescriptionContainer: {
    paddingHorizontal: paddingList.Default,
    paddingTop: 8,
  },
  topOrderDescriptionRefernceNumberContainer: {
    lineHeight: 24,
  },
  topOrderDescriptionOrderDetailScreenIconTextRowHolderContainer: {
    marginBottom: 32,
    marginTop: paddingList.Default,
  },
  orderDescriptionContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
