import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {defaultAnimationDuration} from '@src/constants';
import {useTheme} from '@src/hooks';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * ScreenMainView component is a container that applies a theme-based style
 * and an optional fade-in animation.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The ScreenMainView component.
 */
const ScreenMainView: FC<Props> = ({children, isWithAnimation = true}) => {
  const themedStyles = useTheme(styles);
  const fadeAnim = useRef(new Animated.Value(isWithAnimation ? 0 : 1)).current;

  useEffect(() => {
    isWithAnimation &&
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: defaultAnimationDuration,
        useNativeDriver: true,
      }).start();
  }, [fadeAnim, isWithAnimation]);

  return (
    <Animated.View style={[themedStyles.container, {opacity: fadeAnim}]}>{children}</Animated.View>
  );
};

ScreenMainView.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default ScreenMainView;
