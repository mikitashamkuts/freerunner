import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import {tabs} from '../constants';
import {HomeStack} from './HomeStack';

// Define screen options for the bottom tab navigator
const tabNavigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: false, // Hide header for all tabs
  tabBarStyle: {display: 'none'}, // Hide the tab bar
};

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Deep Linking Configuration
// android: adb shell am start -W -a android.intent.action.VIEW -d "mychat://home/main?name=JohnDoe"
// ios: xcrun simctl openurl booted 'mychat://home/main?name=JohnDoe'
const linking = {
  prefixes: ['mychat://'],
  config: {
    screens: {
      HomeTab: {
        path: 'home',
        screens: {
          AgendaScreen: 'main/:name?',
        },
      },
    },
  },
};

// Main navigation component
const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      {/* Set up the bottom tab navigator with defined screen options */}
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        {/* Define each tab screen with its respective component */}
        <Tab.Screen name={tabs.HomeTab} component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
