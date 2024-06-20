import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '../Text';

import {Props} from '.';

const TextSubtitle: FC<Props> = ({text, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text fontWeight="Medium" fontSize="Medium" color="Inversive" numberOfLines={1} text={text} />
    </View>
  );
};

export default memo(TextSubtitle);
