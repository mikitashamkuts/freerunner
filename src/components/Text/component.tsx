import React, {FC, memo} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

import {fontFamilyList, fontSizeList, fontWeightList, textColorList} from '@src/design';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

/**
 * Custom Text component with styled props.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The Text component.
 */
const Text: FC<Props> = ({
  text = '',
  fontWeight = 'Regular',
  fontSize = 'Regular',
  color = 'Dark',
  containerStyle,
  numberOfLines,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole = 'text',
}) => {
  const styles = StyleSheet.create({
    container: {
      fontFamily: `${fontFamilyList.Default}-${fontWeightList[fontWeight]}`,
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
