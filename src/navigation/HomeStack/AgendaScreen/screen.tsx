import {FC, useEffect, useMemo, useState} from 'react';

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
import {fetchAgendaSlotListRequest} from '../../../store';
import {AgendaSlotListType, AgendaSlotType} from '../../../types';
import {styles} from './styles';

export type AgendaSlotListFilerType = 'all' | 'booked' | 'available';

const AgendaScreen: FC = () => {
  const [agendaSlotListFilter, setAgendaSlotListFilter] = useState<AgendaSlotListFilerType>('all');
  const [filteredAgendaSlotList, setFilteredAgendaSlotList] = useState<AgendaSlotListType>([]);
  const [selectedAgendaSlot, setSelectedAgendaSlot] = useState<AgendaSlotType | null>(null);
  const [selectedWeekShift, setSelectedWeekShift] = useState(0);
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  const {list, status} = useTypedSelector(state => state.agendaSlotList);

  const [selectedDay, setSelectedDay] = useState(1);

  const dispatch = useTypedDispatch();
  console.log(selectedAgendaSlot, ' selectedAgendaSlot');

  const getWeekRange = (weekShift: number = 0): string => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    const firstDayOfWeek = new Date(
      currentDate.setDate(currentDate.getDate() + daysToMonday + weekShift * 7),
    );
    const lastDayOfWeek = new Date(currentDate.setDate(firstDayOfWeek.getDate() + 6));
    const options = {day: 'numeric', month: 'long'} as const;
    const firstDayString = firstDayOfWeek.toLocaleDateString('en-US', options);
    const lastDayString = lastDayOfWeek.toLocaleDateString('en-US', options);
    return `${firstDayString} - ${lastDayString}`;
  };

  function getSlotsByDay(slots, targetDate) {
    // Format the target date to ensure consistency in comparison
    const formattedTargetDate = new Date(targetDate).toISOString().split('T')[0];
    // Filter slots to match only the specified target date
    return slots.filter(slot => {
      const slotDate = slot.Start.split('T')[0];
      return slotDate === formattedTargetDate;
    });
  }

  const getUniqueDays = (list: AgendaSlotListType): number => {
    const uniqueDays = new Set(list.map(slot => slot.Start.split('T')[0]));
    return Array.from(uniqueDays);
  };

  const uniqueQayList = getUniqueDays(list);

  const config = useMemo(
    () => ({
      agendaSlotList: getSlotsByDay(filteredAgendaSlotList, uniqueQayList[selectedDay]), //filteredAgendaSlotList
      setAgendaSlotListFilter,
      setSelectedAgendaSlot,
      setIsBottomSheetShown,
      agendaSlot: selectedAgendaSlot,
      selectedWeekShift,
      previousToSelectedWeekDateText: getWeekRange(selectedWeekShift - 1),
      nextToSelectedWeekDateText: getWeekRange(selectedWeekShift + 1),
      setSelectedWeekShift,
      uniqueDayList: uniqueQayList,
      uniqueSelectedDay: uniqueQayList[selectedDay],
      isPreviousToSelectedWeekDateAvailable: true,
      setSelectedDay,
    }),
    [filteredAgendaSlotList, selectedAgendaSlot, selectedDay, selectedWeekShift, uniqueQayList],
  );

  const fetchPreviousWeek = () => dispatch(fetchAgendaSlotListRequest(-1)); // Previous week
  const fetchNextWeek = () => dispatch(fetchAgendaSlotListRequest(1)); // Next week

  useEffect(() => {
    console.log(selectedWeekShift);
    dispatch(fetchAgendaSlotListRequest(selectedWeekShift));
  }, [dispatch, selectedWeekShift]);

  useEffect(() => {
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
