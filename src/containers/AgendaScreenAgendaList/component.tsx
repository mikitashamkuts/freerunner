import {FlashList} from '@shopify/flash-list';
import React, {FC, memo, useCallback} from 'react';
import {View} from 'react-native';

import {AgendaSlotType} from '@src/types';
import {getFunctionTryCatchWrapped as tryCatch} from '@src/utils';
import {AgendaScreenAgendaListItem} from '../AgendaScreenAgendaListItem';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * AgendaScreenAgendaList component to display a list of agenda slots.
 *
 * @param {Props} config - The configuration object containing necessary properties.
 * @returns {JSX.Element} The rendered component.
 */
const AgendaScreenAgendaList: FC<Props> = ({config}) => {
  const {agendaSlotList, setSelectedAgendaSlot, setIsBottomSheetShown} = config;

  /**
   * Handles the press event on an agenda item.
   *
   * @param {AgendaSlotType} item - The agenda slot item that was pressed.
   */
  const handleOnItemPress = useCallback(
    (item: AgendaSlotType) => {
      tryCatch(function handleOnItemPressSafe() {
        setSelectedAgendaSlot(item);
        setIsBottomSheetShown(true);
      })();
    },
    [setIsBottomSheetShown, setSelectedAgendaSlot],
  );

  return (
    <View style={styles.container}>
      <FlashList
        contentContainerStyle={styles.contentContainer}
        data={agendaSlotList}
        renderItem={({item}) => (
          <AgendaScreenAgendaListItem onPress={handleOnItemPress} {...item} />
        )}
        estimatedItemSize={50}
      />
    </View>
  );
};

AgendaScreenAgendaList.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenAgendaList);
