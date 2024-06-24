import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';

import {Props} from '.';

const AgendaScreenHeaderDateText: FC<Props> = ({containerStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={containerStyle}>
      <Text color={isDarkMode ? 'Light' : 'Dark'} {...props} />
    </View>
  );
};

AgendaScreenHeaderDateText.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenHeaderDateText);
