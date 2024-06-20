import React from 'react';

import {isDevelopmentEnvironment} from './src/constants';

// Only apply `why-did-you-render` in the development environment
if (isDevelopmentEnvironment) {
  // Dynamically import the `why-did-you-render` library
  const whyDidYouRender = require('@welldone-software/why-did-you-render');

  // Initialize `why-did-you-render` with React and configuration options
  whyDidYouRender(React, {
    // Track all pure components to detect unnecessary re-renders
    trackAllPureComponents: true,
  });
}
