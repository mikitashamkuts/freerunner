import React, {FC, memo} from 'react';
import {Pressable, View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {AgendaRowTimeText, Icon} from '../../components';
import {useTheme} from '../../hooks';

import {Props, styles} from '.';

const AgendaScreenAgendaListItem: FC<Props> = ({}) => {
  const themedStyles = useTheme(styles);

  return (
    <Pressable style={themedStyles.container}>
      <View style={themedStyles.contentContainer}>
        <AgendaRowTimeText text="7:30" />
        <Icon color="Action" name="Plus" />
      </View>
    </Pressable>
  );
};

AgendaScreenAgendaListItem.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenAgendaListItem);
