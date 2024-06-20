import {StyleSheet} from 'react-native';

import {backgroundColorList, borderRadiusList, effectsColorList} from '../../design';

export const styles = StyleSheet.create({
  container: {
    height: 296,
    backgroundColor: backgroundColorList.Default,
    borderRadius: borderRadiusList.Default,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.61,
    shadowColor: effectsColorList.Shadow,
    shadowRadius: 6,
    elevation: 6,
  },
});
