import {FC, useEffect, useRef} from 'react';
import {Animated, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../../debug';
import {StatusBar} from '../../../components';
import {defaultAnimationDuration} from '../../../constants';

import {styles} from '.';

const OrderListScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: defaultAnimationDuration, // Duration of the fade-in animation (1000ms = 1s)
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {opacity: fadeAnim}, // Bind opacity to animated value
      ]}>
      <StatusBar style={isDarkMode ? 'dark' : 'light'} />
    </Animated.View>
  );
};

OrderListScreen.whyDidYouRender = whyDidItRenderConfig.ScreenComponentDebugActive;

export default OrderListScreen;
