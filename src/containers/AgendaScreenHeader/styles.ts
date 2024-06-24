import {StyleSheet} from 'react-native';
import {paddingList} from '../../design';

export const styles = StyleSheet.create({
  container: {},
  weekSelectorContainer: {
    paddingHorizontal: paddingList.Default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekSelectorContainerOptionContainer: {
    paddingVertical: paddingList.Small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weekSelectorContainerOptionLeftContainer: {
    marginRight: paddingList.Small,
  },
  weekSelectorContainerOptionRightContainer: {
    marginLeft: paddingList.Small,
    transform: [{rotateZ: '180deg'}],
  },
  daySelectorContainer: {
    paddingHorizontal: paddingList.Default,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  dateTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: paddingList.Default,
    paddingVertical: paddingList.Small,
  },
});
