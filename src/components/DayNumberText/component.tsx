import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {Text} from '@src/components';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

/**
 * DayNumberText component renders a text component with dynamic color based on the current color scheme.
 *
 * @param {DayNumberTextProps} props - The props for the component.
 * @returns {JSX.Element} The DayNumberText component.
 */
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
