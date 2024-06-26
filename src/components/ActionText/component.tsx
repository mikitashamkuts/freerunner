import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';

import {Props} from '.';

/**
 * ActionText component displays a text in a view with specific styles.
 *
 * @param {ActionTextProps} props - The props for the component.
 * @returns {JSX.Element} The ActionText component.
 */
const ActionText: FC<Props> = ({text, containerStyle, ...props}) => {
  return (
    <View style={containerStyle}>
      <Text
        fontWeight="Regular"
        fontSize="Regular"
        color="Action"
        text={text}
        numberOfLines={1}
        {...props}
      />
    </View>
  );
};

ActionText.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(ActionText);
