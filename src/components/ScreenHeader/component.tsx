import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useTheme} from '@src/hooks';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * ScreenHeader component provides a header layout with safe area handling and theme-based styling.
 *
 * @param {ScreenHeaderProps} props - The props for the component.
 * @returns {JSX.Element} The ScreenHeader component.
 */
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
