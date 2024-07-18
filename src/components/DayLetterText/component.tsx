import React, {FC, memo, useMemo} from 'react';
import {View, useColorScheme} from 'react-native';

import {Text} from '@src/components';
import {getFunctionTryCatchWrapped as tryCatch} from '@src/utils';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

/**
 * DayLetterText component renders a text representing the letter of the day
 * and applies styles based on the theme.
 *
 * @param {DayLetterTextProps} props - The props for the component.
 * @returns {JSX.Element} The DayLetterText component.
 */
const DayLetterText: FC<Props> = ({text, containerStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const color = useMemo(() => {
    return tryCatch(function getDayLetterTextColor() {
      return isDarkMode ? 'Light' : 'Dark';
    })();
  }, [isDarkMode]);

  return (
    <View style={containerStyle}>
      <Text
        fontWeight="SemiBold"
        fontSize="Small"
        color={color}
        text={text}
        numberOfLines={1}
        {...props}
      />
    </View>
  );
};

DayLetterText.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayLetterText);
