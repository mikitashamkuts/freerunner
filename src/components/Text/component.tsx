import React, {FC, memo} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {fontFamilyList, fontSizeList, fontWeightList, textColorList} from '../../design';

import {Props} from '.';

const Text: FC<Props> = ({
  text = '',
  fontWeight = 'Regular',
  fontSize = 'Regular',
  color = 'Default',
  containerStyle,
  numberOfLines,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'text',
}) => {
  const styles = StyleSheet.create({
    container: {
      fontFamily: `${fontFamilyList.TestFoundersGrotesk}-${fontWeightList[fontWeight]}`,
      fontSize: fontSizeList[fontSize],
      color: textColorList[color],
    },
  });

  return (
    <RNText
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      numberOfLines={numberOfLines}
      style={[styles.container, containerStyle]}>
      {text}
    </RNText>
  );
};

Text.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(Text);
