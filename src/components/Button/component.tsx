import React, {FC, memo, useCallback} from 'react';
import {Pressable} from 'react-native';

import {Text} from '@src/components';
import {getFunctionTryCatchWrapped as tryCatch} from '@src/utils';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * Button component renders a pressable button with text and handles the press event safely.
 *
 * @param {ButtonProps} props - The props for the component.
 * @returns {JSX.Element} The Button component.
 */
const Button: FC<Props> = ({onPress, text, accessibilityLabel, accessibilityHint}) => {
  const handleOnPress = useCallback(() => {
    tryCatch(function handleOnPressSafe() {
      onPress?.();
    })();
  }, [onPress]);

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      onPress={handleOnPress}
      style={styles.container}>
      <Text numberOfLines={1} color="Light" text={text} />
    </Pressable>
  );
};

Button.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(Button);
