/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import SplashScreen from 'react-native-splash-screen';
import {useImageCachingHandler} from './src/hooks';
import useDeviceCheck from './src/hooks/useDeviceCheck/hook';
import {Navigation} from './src/navigation';
import {initImageCaching, initSentryService} from './src/services';
import {persistor, store} from './src/store';
import {initTranslation} from './src/translation';

/* Initialize caching of the downloaded image assets
for avoiding redownloading while transitioning between the screens */
initImageCaching();

// Initialize Sentry for error tracking and monitoring
initSentryService();

function App(): React.JSX.Element {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isStateReady, setIsStateReady] = useState(false);

  // Manage image cache overflow
  useImageCachingHandler();
  // Initialize internationalization
  initTranslation();

  const {isDeviceApproved, isDeviceVerifyed} = useDeviceCheck();

  // Hide the splash screen only after the persisted state has been loaded
  const onBeforeLift = () => {
    setIsStateReady(true);
  };

  // Set app ready state when device is verified, approved, and state is ready
  useEffect(() => {
    if (isDeviceVerifyed && isDeviceApproved && isStateReady) {
      setIsAppReady(true);
    }
  }, [isDeviceApproved, isDeviceVerifyed, isStateReady]);

  // Hide splash screen when the app is ready
  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hide();
    }
  }, [isAppReady]);

  return (
    // Provide Redux store to the application
    <Provider store={store}>
      {/* PersistGate delays rendering until the persisted state has been retrieved and saved to Redux */}
      <PersistGate loading={null} persistor={persistor} onBeforeLift={onBeforeLift}>
        {/* Main navigation component */}
        {isAppReady && <Navigation />}
      </PersistGate>
    </Provider>
  );
}

export default App;

/**
 * Detailed Explanation:
 *
 * - **Import Statements**:
 *   - Various imports are used for Redux integration, splash screen handling, image caching, device checks, navigation, and Sentry error tracking.
 *
 * - **initImageCaching()**:
 *   - Initializes caching for downloaded images to avoid redundant downloads during screen transitions.
 *
 * - **initSentryService()**:
 *   - Initializes Sentry for error tracking and monitoring.
 *
 * - **App Component**:
 *   - The main functional component of the application.
 *   - Uses `useState` to manage the state of the application readiness.
 *   - Uses `useEffect` hooks to manage side effects.
 *
 * - **useImageCachingHandler()**:
 *   - Manages image cache overflow.
 *
 * - **initTranslation()**:
 *   - Initializes internationalization for the application.
 *
 * - **useDeviceCheck()**:
 *   - Custom hook that checks if the device is approved and verified.
 *
 * - **onBeforeLift()**:
 *   - Callback function that sets the state to ready before the persisted state is lifted.
 *
 * - **useEffect Hooks**:
 *   - The first `useEffect` sets the application ready state when the device is verified, approved, and the state is ready.
 *   - The second `useEffect` hides the splash screen when the app is ready.
 *
 * - **Provider**:
 *   - Provides the Redux store to the application.
 *
 * - **PersistGate**:
 *   - Delays rendering until the persisted state has been retrieved and saved to Redux.
 *   - Uses `onBeforeLift` to perform actions before lifting the persisted state.
 *
 * - **Navigation Component**:
 *   - Rendered only when the application is ready.
 *
 * Usage:
 * - This file is the entry point for the React Native application.
 * - It sets up the necessary configurations, state management, and conditionally renders the main navigation component based on readiness.
 */
