import React, {FC, memo} from 'react';
import {Pressable, View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {AgendaRowTimeText, Icon} from '../../components';
import {hapticFeedbackModeList} from '../../constants';
import {useTheme} from '../../hooks';
import {getHapticFeedbackTriggered} from '../../utils';

import {Props, styles} from '.';

const AgendaScreenAgendaListItem: FC<Props> = item => {
  const {Taken, Start, onPress} = item;
  const isDarkMode = useColorScheme() === 'dark';

  const themedStyles = useTheme(styles);

  return (
    <Pressable
      onPress={() => {
        if (!Taken) {
          onPress?.(item);
          getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
        }
      }}
      style={themedStyles.container}>
      <View style={themedStyles.contentContainer}>
        <AgendaRowTimeText text={Start.slice(11).slice(0, 5)} />
        <Icon color={Taken ? 'Faded' : 'Action'} name={Taken ? 'CalendarChecked' : 'Plus'} />
      </View>
    </Pressable>
  );
};

AgendaScreenAgendaListItem.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenAgendaListItem);
