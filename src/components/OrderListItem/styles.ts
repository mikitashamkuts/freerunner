import {StyleSheet} from 'react-native';
import {borderRadiusList, paddingList} from '../../design';

export const styles = StyleSheet.create({
  topContentContainer: {
    height: 148,
    borderTopLeftRadius: borderRadiusList.Default,
    borderTopRightRadius: borderRadiusList.Default,
    overflow: 'hidden',
  },
  topBackgroundImageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: -6,
  },
  storeNameTextContainer: {
    paddingHorizontal: paddingList.Default,
    paddingTop: 59,
  },
  dateAndArticleDataContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: paddingList.Default,
  },
  dateAndArticleDateTextContainer: {
    paddingRight: paddingList.Default,
  },
  articleIconContainer: {
    marginRight: 5.5,
    top: -3.5,
  },
  avatarContainer: {
    alignItems: 'flex-end',
    paddingRight: paddingList.Default,
    top: -30,
    position: 'relative',
  },

  bottomContentCompletedOrderContainer: {
    top: -10,
    flexDirection: 'row',
    paddingHorizontal: paddingList.Default,
  },
  bottomContentCompletedOrderTextContainer: {
    paddingLeft: 36,
    justifyContent: 'center',
  },
  bottomContentCompletedOrderTextStatusContainer: {
    paddingBottom: 8,
  },

  bottomContentPendingOrderContainer: {
    top: -paddingList.Default,
    flexDirection: 'row',
    paddingHorizontal: paddingList.Default,
  },
  bottomContentPendingOrderTextContainer: {
    paddingLeft: paddingList.Default,
    justifyContent: 'center',
  },
  bottomContentPendingOrderTextStatusContainer: {
    paddingBottom: 8,
  },
});
