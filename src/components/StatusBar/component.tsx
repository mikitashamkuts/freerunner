import React, {FC, memo} from 'react';
import {StatusBar as RNStatusBar, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

const StatusBar: FC<Props> = ({customStyle}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const defaultStatusBarStyle = isDarkMode ? 'light' : 'dark';

  return (
    <RNStatusBar
      translucent={true}
      animated={true}
      barStyle={`${customStyle || defaultStatusBarStyle}-content`}
      backgroundColor="transparent"
    />
  );
};

StatusBar.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(StatusBar);
