import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Text} from '@src/components';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * __name__ container description.
 *
 * @param {__name__Props} props - The props for the container.
 * @returns {JSX.Element} The __name__ container.
 */
const __name__: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Text text={'__name__'} />
    </View>
  );
};

__name__.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(__name__);
