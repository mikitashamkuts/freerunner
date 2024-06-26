import {StyleSheet} from 'react-native';

import {backgroundColorList, overlayColorList, paddingList} from '../../design';

export const styles = StyleSheet.create({
  contentContainer: {
    padding: paddingList.Default * 2,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: overlayColorList.Light,
    borderTopEndRadius: 16,
    borderTopLeftRadius: 16,
  },
  dark_contentContainer: {
    backgroundColor: overlayColorList.Dark,
  },
  textWrapperContainer: {
    paddingVertical: paddingList.Small,
    flexDirection: 'row',
  },
  textContainer: {
    paddingRight: paddingList.Default,
  },
  handleContainer: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: backgroundColorList.Dark,
    alignSelf: 'center',
    marginVertical: paddingList.Small,
    top: 25,
    zIndex: 1,
  },
  dark_handleContainer: {
    backgroundColor: backgroundColorList.Light,
  },
  dateContainer: {
    paddingBottom: paddingList.Small,
  },
  reservedSLotTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
