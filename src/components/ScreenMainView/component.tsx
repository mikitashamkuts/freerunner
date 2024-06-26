import React, {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {defaultAnimationDuration} from '../../constants';
import {useTheme} from '../../hooks';

import {Props, styles} from '.';

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
