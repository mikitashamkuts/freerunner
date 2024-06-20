import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {TextTitle} from '../../components';

import {Props, styles} from '.';

const ScreenHeader: FC<Props> = ({title, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextTitle color="Default" title={title} />
    </View>
  );
};

export default memo(ScreenHeader);
