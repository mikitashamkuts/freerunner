import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '@src/components';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * __name__ component description.
 *
 * @param {__name__Props} props - The props for the component.
 * @returns {JSX.Element} The __name__ component.
 */
const __name__: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text text={'__name__'} />
    </View>
  );
};

__name__.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(__name__);
