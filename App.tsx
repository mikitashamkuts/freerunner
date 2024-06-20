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
for avoiding redownloading while transitionning between the screens */
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

  useEffect(() => {
    isDeviceVerifyed && isDeviceApproved && isStateReady && setIsAppReady(true);
  }, [isDeviceApproved, isDeviceVerifyed, isStateReady]);

  useEffect(() => {
    isAppReady && SplashScreen.hide();
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
