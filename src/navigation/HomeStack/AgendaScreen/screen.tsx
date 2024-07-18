import {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';

import {LoadingIndicator, ScreenMainView, StatusBar, Text} from '@src/components';
import {
  AgendaScreenAgendaList,
  AgendaScreenFooter,
  AgendaScreenHeader,
  AgendaScreenSelectedSlotBottomSheet,
} from '@src/containers';
import {useTypedDispatch, useTypedSelector} from '@src/hooks';
import {addSlotToBookedAgendaSlotList, fetchAgendaSlotListRequest} from '@src/store';
import {AgendaSlotListType, AgendaSlotType} from '@src/types';
import {
  getAgendaSlotListWithLocalBooked,
  getSlotsByDay,
  getUniqueDays,
  getWeekRangeText,
  getFunctionTryCatchWrapped as tryCatch,
} from '@src/utils';

import {whyDidItRenderConfig} from '../../../../debug';

import {styles} from './styles';

/**
 * Type for the filter options of the agenda slot list.
 */
export type AgendaSlotListFilerType = 'all' | 'booked' | 'available';

/**
 * Type for the configuration object passed to various components.
 */
export type AgendaScreenConfigType = {
  agendaSlotList: AgendaSlotListType;
  setAgendaSlotListFilter: (value: AgendaSlotListFilerType) => void;
  setSelectedAgendaSlot: (value: AgendaSlotType) => void;
  setIsBottomSheetShown: (value: boolean) => void;
  agendaSlot: AgendaSlotType;
  selectedWeekShift: number;
  previousToSelectedWeekDateText: string;
  nextToSelectedWeekDateText: string;
  setSelectedWeekShift: (value: (value: number) => number) => void;
  handleAddSlotToBookedAgendaSlotList: (value: AgendaSlotType) => void;
  uniqueDayList: string[];
  uniqueSelectedDay: string;
  setSelectedDay: (value: number) => void;
};

/**
 * Main component for the Agenda Screen.
 */
const AgendaScreen: FC = () => {
  const dispatch = useTypedDispatch();
  const {t} = useTranslation();

  // State variables for various UI states
  const [agendaSlotListFilter, setAgendaSlotListFilter] = useState<AgendaSlotListFilerType>('all');
  const [filteredAgendaSlotList, setFilteredAgendaSlotList] = useState<AgendaSlotListType>([]);
  const [selectedAgendaSlot, setSelectedAgendaSlot] = useState<AgendaSlotType | null>(null);
  const [selectedWeekShift, setSelectedWeekShift] = useState(0);
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);

  const {list, status, bookedList} = useTypedSelector(state => state.agendaSlotList);
  const uniqueQayList = getUniqueDays(list);

  // Handler to add a slot to the booked agenda slot list
  const handleAddSlotToBookedAgendaSlotList = useCallback(
    (slot: AgendaSlotType) => {
      tryCatch(function handleAddSlotToBookedAgendaSlotListSafe() {
        dispatch(addSlotToBookedAgendaSlotList(slot));
      })();
    },
    [dispatch],
  );

  // Memoized configuration object for child components
  const config: AgendaScreenConfigType = useMemo(() => {
    return tryCatch(function getAgendaScreenConfig() {
      return {
        agendaSlotList: getSlotsByDay(filteredAgendaSlotList, uniqueQayList[selectedDay]),
        setAgendaSlotListFilter,
        setSelectedAgendaSlot,
        setIsBottomSheetShown,
        agendaSlot: selectedAgendaSlot,
        selectedWeekShift,
        previousToSelectedWeekDateText: getWeekRangeText(selectedWeekShift - 1),
        nextToSelectedWeekDateText: getWeekRangeText(selectedWeekShift + 1),
        setSelectedWeekShift,
        uniqueDayList: uniqueQayList,
        uniqueSelectedDay: uniqueQayList[selectedDay],
        setSelectedDay,
        handleAddSlotToBookedAgendaSlotList,
      };
    })();
  }, [
    filteredAgendaSlotList,
    handleAddSlotToBookedAgendaSlotList,
    selectedAgendaSlot,
    selectedDay,
    selectedWeekShift,
    uniqueQayList,
  ]);

  // Effect to fetch initial data
  useEffect(() => {
    tryCatch(function getInitialDataLoaded() {
      dispatch(fetchAgendaSlotListRequest(selectedWeekShift));
    })();
  }, [dispatch, selectedWeekShift]);

  // Effect to filter agenda slot list based on the selected filter
  useEffect(() => {
    tryCatch(function getAgendaSlotListFiltered() {
      const mergedList: AgendaSlotListType = getAgendaSlotListWithLocalBooked(list, bookedList);
      if (agendaSlotListFilter === 'all') {
        setFilteredAgendaSlotList(mergedList);
      }
      if (agendaSlotListFilter === 'available') {
        const availableAgendaSlotList = mergedList.filter(({Taken}) => !Taken);
        setFilteredAgendaSlotList(availableAgendaSlotList);
      }
      if (agendaSlotListFilter === 'booked') {
        const bookedAgendaSlotList = mergedList.filter(({Taken}) => Taken);
        setFilteredAgendaSlotList(bookedAgendaSlotList);
      }
    })();
  }, [agendaSlotListFilter, bookedList, list]);

  return (
    <ScreenMainView>
      <StatusBar />
      <AgendaScreenHeader config={config} />
      {status === 'Loading' && <LoadingIndicator />}
      {status === 'Error' && (
        <View style={styles.errorTextContainer}>
          <Text
            color="Faded"
            text={t('agendaScreen.fail.agendaSlotList.text')}
            accessibilityLabel={t('agendaScreen.fail.agendaSlotList.accessibilityLabel')}
            accessibilityHint={t('agendaScreen.fail.agendaSlotList.accessibilityHint')}
          />
        </View>
      )}
      {status === 'Success' && <AgendaScreenAgendaList config={config} />}
      <AgendaScreenFooter config={config} />
      {isBottomSheetShown && <AgendaScreenSelectedSlotBottomSheet config={config} />}
    </ScreenMainView>
  );
};

AgendaScreen.whyDidYouRender = whyDidItRenderConfig.ScreenComponentDebugActive;

export default AgendaScreen;
