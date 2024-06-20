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

// Main navigation component
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* Set up the bottom tab navigator with defined screen options */}
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        {/* Define each tab screen with its respective component */}
        <Tab.Screen name={tabs.HomeTab} component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
