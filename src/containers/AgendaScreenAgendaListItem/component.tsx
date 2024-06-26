import {format} from 'date-fns';
import React, {FC, memo, useCallback} from 'react';
import {Pressable, View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {AgendaRowTimeText, Icon} from '../../components';
import {hapticFeedbackModeList} from '../../constants';
import {useTheme} from '../../hooks';
import {
  getHapticFeedbackTriggered,
  getSymbolLimitedText,
  getFunctionTryCatchWrapped as tryCatch,
} from '../../utils';

import {Props, styles} from '.';

const AgendaScreenAgendaListItem: FC<Props> = item => {
  const themedStyles = useTheme(styles);

  const {Taken, Start, onPress} = item;

  const handleOnPress = useCallback(() => {
    tryCatch(function handleOnPressSafe() {
      if (!Taken) {
        onPress?.(item);
        getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
      }
    })();
  }, [Taken, item, onPress]);

  return (
    <Pressable onPress={handleOnPress} style={themedStyles.container}>
      <View style={themedStyles.contentContainer}>
        <AgendaRowTimeText text={getSymbolLimitedText(format(new Date(Start), 'h:mm a'), 9)} />
        <Icon color={Taken ? 'Faded' : 'Action'} name={Taken ? 'CalendarChecked' : 'Plus'} />
      </View>
    </Pressable>
  );
};

AgendaScreenAgendaListItem.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenAgendaListItem);
