/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {useDeviceCheck, useImageCaching} from './src/hooks';
import {Navigation} from './src/navigation';
import {initSentryService} from './src/services';
import {persistor, store} from './src/store';
import {initTranslation} from './src/translation';
import {getFunctionTryCatchWrapped as tryCatch} from './src/utils';

// Initialize Sentry for error tracking and monitoring
initSentryService();

function App(): React.JSX.Element {
  // Initialize set of flags for UI establishing
  const [isAppReady, setIsAppReady] = useState(false);
  const [isStateReady, setIsStateReady] = useState(false);

  /* Initialize caching of the downloaded image assets
     for avoiding redownloading while transitioning between the screens
     with  image cache overflow management
 */
  const {isEnabled: isImageCachingEnabled} = useImageCaching();
  // Initialize internationalization
  initTranslation();
  // Initialize device distinguishing
  const {isDeviceApproved, isDeviceVerified} = useDeviceCheck();

  // Hide the splash screen only after the persisted state has been loaded
  const handleOnBeforeLift = useCallback(() => {
    // tryCatch is for unified error handling, tryCatch is returns wrapped version of the function, so we call that function
    // onBeforeLiftSafe named function declaration is used for identifying and accessing name and arguments properties inside tryCatch
    tryCatch(function handleOnBeforeLiftSafe() {
      setIsStateReady(true);
    })();
  }, []);

  // Set app ready state when device is verified, approved, and state is ready
  useEffect(() => {
    // tryCatch is for unified error handling, tryCatch is returns wrapped version of the function, so we call that function
    // handleSetIsAppReady named function declaration is used for identifying and accessing name and arguments properties inside tryCatch
    tryCatch(function handleSetIsAppReady() {
      if (isDeviceVerified && isDeviceApproved && isStateReady && isImageCachingEnabled) {
        setIsAppReady(true);
      }
    })();
  }, [isDeviceApproved, isDeviceVerified, isImageCachingEnabled, isStateReady]);

  // Hide splash screen when the app is ready
  useEffect(() => {
    tryCatch(function handleSplashScreenHiding() {
      if (isAppReady) {
        SplashScreen.hide();
      }
    })();
  }, [isAppReady]);

  return (
    // Provide Redux store to the application
    <Provider store={store}>
      {/* PersistGate delays rendering until the persisted state has been retrieved and saved to Redux */}
      <PersistGate loading={null} persistor={persistor} onBeforeLift={handleOnBeforeLift}>
        {/* Main navigation component */}
        {isAppReady && <Navigation />}
      </PersistGate>
    </Provider>
  );
}

export default App;
