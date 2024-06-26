import React, {FC, memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {iconColorList} from '../../design';

import {Props} from '.';

/**
 * LoadingIndicator component provides a visual feedback for loading state using an activity indicator.
 *
 * @param {LoadingIndicatorProps} props - The props for the component.
 * @returns {JSX.Element} The LoadingIndicator component.
 */
const LoadingIndicator: FC<Props> = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={iconColorList.Action} />
    </View>
  );
};

LoadingIndicator.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(LoadingIndicator);
