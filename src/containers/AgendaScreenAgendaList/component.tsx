import {FlashList} from '@shopify/flash-list';
import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {AgendaScreenAgendaListItem} from '../AgendaScreenAgendaListItem';

import {Props, styles} from '.';

const AgendaScreenAgendaList: FC<Props> = ({config}) => {
  const {agendaSlotList, setSelectedAgendaSlot, setIsBottomSheetShown} = config;
  const handleOnItemPress = item => {
    setIsBottomSheetShown(true);
    setSelectedAgendaSlot(item);
  };

  return (
    <View style={[styles.container, {flex: 1}]}>
      <FlashList
        contentContainerStyle={{paddingTop: 10}}
        data={agendaSlotList}
        renderItem={({item}) => (
          <AgendaScreenAgendaListItem onPress={handleOnItemPress} {...item} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

AgendaScreenAgendaList.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenAgendaList);
