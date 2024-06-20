import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '../Text';

import {Props} from '.';

const TextRegular: FC<Props> = ({text, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text fontWeight="Regular" fontSize="Regular" text={text} />
    </View>
  );
};

export default memo(TextRegular);
