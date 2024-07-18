import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {Text} from '@src/components';

import {whyDidItRenderConfig} from '../../../debug';

import {Props} from '.';

/**
 * Component for displaying date text in the header of the agenda screen.
 *
 * @param {Props} props - Props passed to the component.
 * @param {ViewStyle} [props.containerStyle] - Optional style for the container view.
 * @returns {JSX.Element} The rendered component.
 */
const AgendaScreenHeaderDateText: FC<Props> = ({containerStyle, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={containerStyle}>
      <Text color={isDarkMode ? 'Light' : 'Dark'} {...props} />
    </View>
  );
};

AgendaScreenHeaderDateText.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenHeaderDateText);
