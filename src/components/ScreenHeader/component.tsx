import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {whyDidItRenderConfig} from '../../../debug';
import {useTheme} from '../../hooks';

import {Props, styles} from '.';

const ScreenHeader: FC<Props> = ({children, containerStyle}) => {
  const insets = useSafeAreaInsets();

  const themedStyles = useTheme(styles);

  const dynamicStyles = StyleSheet.create({
    container: {
      paddingTop: insets.top,
    },
  });

  return (
    <View style={[themedStyles.container, dynamicStyles.container]}>
      <View style={[themedStyles.containerStyle, containerStyle]}>{children}</View>
    </View>
  );
};

ScreenHeader.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(ScreenHeader);
