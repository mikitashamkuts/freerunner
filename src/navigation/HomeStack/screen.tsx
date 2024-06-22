import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

import {defaultAnimationDuration, routes} from '../../constants';
import {backgroundColorList} from '../../design';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {OrderListScreen} from '.';

// Create the stack navigator
const ClientStack = createNativeStackNavigator();

// Define screen options for the stack navigator
const defaultScreenOptionsConfig: NativeStackNavigationOptions = {
  headerShown: false, // Hide the header for all screens
  animation: 'fade',
  animationDuration: defaultAnimationDuration,
};

// HomeStack component that sets up the stack navigator
const HomeStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // Define dynamic screen options for the stack navigator
  const screenOptionsConfig = useMemo(() => {
    return tryCatch(function getScreenOptionsConfig() {
      const navigationBarColor = isDarkMode ? backgroundColorList.Dark : backgroundColorList.Light;
      return {...defaultScreenOptionsConfig, navigationBarColor};
    })();
  }, [isDarkMode]);

  return (
    <ClientStack.Navigator screenOptions={screenOptionsConfig}>
      {/* Define each screen in the stack */}
      <ClientStack.Screen name={routes.OrderListScreen} component={OrderListScreen} />
    </ClientStack.Navigator>
  );
};

export default HomeStack;
