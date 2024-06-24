import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';

import {Props} from '.';

const DayLetterText: FC<Props> = ({text, containerStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={containerStyle}>
      <Text
        fontWeight="SemiBold"
        fontSize="Small"
        color={isDarkMode ? 'Light' : 'Dark'}
        text={text}
        numberOfLines={1}
        {...props}
      />
    </View>
  );
};

DayLetterText.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayLetterText);
