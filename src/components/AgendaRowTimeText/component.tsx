import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';

import {Props} from '.';

const AgendaRowTimeText: FC<Props> = ({text, containerStyle, ...props}) => {
  return (
    <View style={containerStyle}>
      <Text
        fontWeight="Regular"
        fontSize="Regular"
        color="Faded"
        text={text}
        numberOfLines={1}
        {...props}
      />
    </View>
  );
};

AgendaRowTimeText.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(AgendaRowTimeText);
