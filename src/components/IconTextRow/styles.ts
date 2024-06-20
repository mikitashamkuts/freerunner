import {StyleSheet} from 'react-native';
import {borderRadiusList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(225, 225, 225, 0.67)',
    borderRadius: borderRadiusList.Default,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6.5,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  itemIconContainer: {
    marginRight: 8,
  },
});
