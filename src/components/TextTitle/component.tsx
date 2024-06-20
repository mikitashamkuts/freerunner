import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '../Text';

import {Props} from '.';

const TextTitle: FC<Props> = ({color, title, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text
        color={color || 'Default'}
        fontSize="Big"
        fontWeight="SemiBold"
        text={title}
        numberOfLines={1}
      />
    </View>
  );
};

export default memo(TextTitle);
