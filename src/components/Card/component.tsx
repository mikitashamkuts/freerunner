import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

const Card: FC<Props> = ({containerStyle, children}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

Card.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(Card);
