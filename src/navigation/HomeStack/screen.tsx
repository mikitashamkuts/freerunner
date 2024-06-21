import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import {defaultAnimationDuration, routes} from '../../constants';

import {OrderListScreen} from '.';

// Create the stack navigator
const ClientStack = createNativeStackNavigator();

// Define screen options for the stack navigator
const screenOptionsConfig: NativeStackNavigationOptions = {
  headerShown: false, // Hide the header for all screens
  animation: 'fade',
  animationDuration: defaultAnimationDuration,
};

// HomeStack component that sets up the stack navigator
const HomeStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ClientStack.Navigator
      screenOptions={{...screenOptionsConfig, navigationBarColor: isDarkMode ? 'black' : 'white'}}>
      {/* Define each screen in the stack */}
      <ClientStack.Screen name={routes.OrderListScreen} component={OrderListScreen} />
    </ClientStack.Navigator>
  );
};

export default HomeStack;
