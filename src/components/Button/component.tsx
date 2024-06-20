import React, {FC, memo, useCallback} from 'react';
import {Pressable} from 'react-native';

import {Text} from '../Text';

import {Props, styles} from '.';

const Button: FC<Props> = ({title = '', onPress}) => {
  const handleOnButtonPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <Pressable style={styles.container} onPress={handleOnButtonPress}>
      <Text
        numberOfLines={1}
        fontSize="Small"
        fontWeight="SemiBold"
        color="Inversive"
        text={title}
      />
    </Pressable>
  );
};

export default memo(Button);
