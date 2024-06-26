import React, {FC, memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';

import {iconColorList} from '../../design';

import {Props} from '.';

const LoadingIndicator: FC<Props> = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={iconColorList.Action} />
    </View>
  );
};

LoadingIndicator.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(LoadingIndicator);
