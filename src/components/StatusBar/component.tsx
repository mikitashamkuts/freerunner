import React, {FC, memo} from 'react';
import {StatusBar as RNStatusBar} from 'react-native';

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

export default memo(StatusBar);
