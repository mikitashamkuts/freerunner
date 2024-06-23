import React, {FC, memo} from 'react';
import {StatusBar as RNStatusBar} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

const StatusBar: FC<Props> = ({style = 'light'}) => {
  return (
    <RNStatusBar
      translucent={true}
      animated={true}
      barStyle={`${style}-content`}
      backgroundColor="transparent"
    />
  );
};

StatusBar.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(StatusBar);
