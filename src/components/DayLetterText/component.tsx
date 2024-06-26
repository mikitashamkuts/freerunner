import React, {FC, memo, useMemo} from 'react';
import {View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {Props} from '.';

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
