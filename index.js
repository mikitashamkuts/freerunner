/**
 * @format
 * This is a comment to specify that this file is formatted according to a particular standard or style.
 */

import {AppRegistry} from 'react-native';
// Importing AppRegistry from the React Native library. AppRegistry is the entry point to run a React Native application.

// Importing the main App component from the App.js file.
import App from './App';

// Importing the wdyr (Why Did You Render) configuration to track unnecessary re-renders.
import './wdyr';

// Importing the application name from the app.json file.
import {name as appName} from './app.json';

// Registering the main component of the application with AppRegistry.
// The first argument is the app name, and the second argument is a function that returns the main App component.
AppRegistry.registerComponent(appName, () => App);
