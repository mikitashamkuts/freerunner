import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '../Text';

import {Props} from '.';

const TextRegularBold: FC<Props> = ({text, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text fontWeight="SemiBold" fontSize="Medium" text={text} />
    </View>
  );
};

export default memo(TextRegularBold);
