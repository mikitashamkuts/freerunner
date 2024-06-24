import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';

import {Props} from '.';

const DayNumberText: FC<Props> = ({text, containerStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={containerStyle}>
      <Text
        fontWeight="Regular"
        fontSize="Regular"
        color={isDarkMode ? 'Light' : 'Dark'}
        text={text}
        numberOfLines={1}
        {...props}
      />
    </View>
  );
};

DayNumberText.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayNumberText);
