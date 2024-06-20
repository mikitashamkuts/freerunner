import {FC, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {OrderListScreenScreenHeaderHolder, StatusBar} from '../../../components';

import {styles} from '.';
import {defaultAnimationDuration} from '../../../constants';

const OrderListScreen: FC = () => {
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
      <StatusBar style={'dark'} />
      <OrderListScreenScreenHeaderHolder />
      {/* <OrderListScreenOrderList /> */}
    </Animated.View>
  );
};

OrderListScreen.whyDidYouRender = true;

export default OrderListScreen;
