import React, {FC, memo, useCallback} from 'react';
import {Pressable} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {Props, styles} from '.';

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
