import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import {View} from 'react-native';
import {whyDidItRenderConfig} from '../../../../debug';
import {LoadingIndicator, ScreenMainView, StatusBar, Text} from '../../../components';
import {
  AgendaScreenAgendaList,
  AgendaScreenFooter,
  AgendaScreenHeader,
  AgendaScreenSelectedSlotBottomSheet,
} from '../../../containers';
import {useTypedDispatch, useTypedSelector} from '../../../hooks';
import {addSlotToBookedAgendaSlotList, fetchAgendaSlotListRequest} from '../../../store';
import {AgendaSlotListType, AgendaSlotType} from '../../../types';

import {
  getAgendaSlotListWithLocalBooked,
  getSlotsByDay,
  getUniqueDays,
  getWeekRangeText,
  getFunctionTryCatchWrapped as tryCatch,
} from '../../../utils';
import {styles} from './styles';

export type AgendaSlotListFilerType = 'all' | 'booked' | 'available';

export type AgendaScreenConfigType = {
  agendaSlotList: AgendaSlotListType;
  setAgendaSlotListFilter: (value: AgendaSlotListFilerType) => void;
  setSelectedAgendaSlot: (value: AgendaSlotType) => void;
  setIsBottomSheetShown: (value: boolean) => void;
  agendaSlot: AgendaSlotType;
  selectedWeekShift: number;
  previousToSelectedWeekDateText: string;
  nextToSelectedWeekDateText: string;
  setSelectedWeekShift: (value: number) => void;
};

const AgendaScreen: FC = () => {
  const [agendaSlotListFilter, setAgendaSlotListFilter] = useState<AgendaSlotListFilerType>('all');
  const [filteredAgendaSlotList, setFilteredAgendaSlotList] = useState<AgendaSlotListType>([]);
  const [selectedAgendaSlot, setSelectedAgendaSlot] = useState<AgendaSlotType | null>(null);
  const [selectedWeekShift, setSelectedWeekShift] = useState(0);
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  const {list, status, bookedList} = useTypedSelector(state => state.agendaSlotList);

  const [selectedDay, setSelectedDay] = useState(1);

  const dispatch = useTypedDispatch();

  const handleAddSlotToBookedAgendaSlotList = useCallback(
    slot => {
      tryCatch(function handleAddSlotToBookedAgendaSlotListSafe() {
        dispatch(addSlotToBookedAgendaSlotList(slot));
      })();
    },
    [dispatch],
  );

  const uniqueQayList = getUniqueDays(list);

  const config: AgendaScreenConfigType = useMemo(() => {
    return tryCatch(function getAgendaScreenConfig() {
      return {
        agendaSlotList: getAgendaSlotListWithLocalBooked(
          getSlotsByDay(filteredAgendaSlotList, uniqueQayList[selectedDay]),
          bookedList,
        ),
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
        isPreviousToSelectedWeekDateAvailable: true,
        setSelectedDay,
        handleAddSlotToBookedAgendaSlotList,
      };
    })();
  }, [
    bookedList,
    filteredAgendaSlotList,
    handleAddSlotToBookedAgendaSlotList,
    selectedAgendaSlot,
    selectedDay,
    selectedWeekShift,
    uniqueQayList,
  ]);

  useEffect(() => {
    tryCatch(function getInitialDataLoaded() {
      dispatch(fetchAgendaSlotListRequest(selectedWeekShift));
    })();
  }, [dispatch, selectedWeekShift]);

  useEffect(() => {
    tryCatch(function getAgendaSlotListFiltered() {
      if (agendaSlotListFilter === 'all') {
        setFilteredAgendaSlotList(list);
      }
      if (agendaSlotListFilter === 'available') {
        const availableAgendaSlotList = list.filter(({Taken}) => !Taken);
        setFilteredAgendaSlotList(availableAgendaSlotList);
      }
      if (agendaSlotListFilter === 'booked') {
        const bookedAgendaSlotList = list.filter(({Taken}) => Taken);
        setFilteredAgendaSlotList(bookedAgendaSlotList);
      }
    })();
  }, [agendaSlotListFilter, list]);

  return (
    <ScreenMainView>
      <StatusBar />
      <AgendaScreenHeader config={config} />
      {status === 'Loading' && <LoadingIndicator />}
      {status === 'Error' && (
        <View style={styles.errorTextContainer}>
          <Text color="Faded" text="Internet connection issue..." />
        </View>
      )}
      {status === 'Success' && (
        <AgendaScreenAgendaList config={config} setIsBottomSheetShown={setIsBottomSheetShown} />
      )}
      <AgendaScreenFooter config={config} />
      {isBottomSheetShown && <AgendaScreenSelectedSlotBottomSheet config={config} />}
    </ScreenMainView>
  );
};

AgendaScreen.whyDidYouRender = whyDidItRenderConfig.ScreenComponentDebugActive;

export default AgendaScreen;
