import React, {FC, memo} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';
import {useTheme} from '../../hooks';

import {Props, styles} from '.';

const AgendaScreenFooter: FC<Props> = ({}) => {
  const insets = useSafeAreaInsets();

  const themedStyles = useTheme(styles);

  const dynamicStyles = StyleSheet.create({
    container: {
      paddingBottom: insets.bottom,
    },
  });

  return (
    <View style={[themedStyles.container, dynamicStyles.container]}>
      <Pressable style={themedStyles.buttonContainer}>
        <Text color="Action" text="Today" />
      </Pressable>
      <Pressable style={themedStyles.buttonContainer}>
        <Text color="Action" text="All" />
      </Pressable>
    </View>
  );
};

AgendaScreenFooter.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenFooter);
