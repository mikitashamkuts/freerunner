import {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
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
  setSelectedWeekShift: (value: (value: number) => number) => void;
  handleAddSlotToBookedAgendaSlotList: (value: AgendaSlotType) => void;
  uniqueDayList: string[];
  uniqueSelectedDay: string;
  setSelectedDay: (value: number) => void;
};

const AgendaScreen: FC = () => {
  const dispatch = useTypedDispatch();
  const {t} = useTranslation();

  const [agendaSlotListFilter, setAgendaSlotListFilter] = useState<AgendaSlotListFilerType>('all');
  const [filteredAgendaSlotList, setFilteredAgendaSlotList] = useState<AgendaSlotListType>([]);
  const [selectedAgendaSlot, setSelectedAgendaSlot] = useState<AgendaSlotType | null>(null);
  const [selectedWeekShift, setSelectedWeekShift] = useState(0);
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);

  const {list, status, bookedList} = useTypedSelector(state => state.agendaSlotList);
  const uniqueQayList = getUniqueDays(list);

  const handleAddSlotToBookedAgendaSlotList = useCallback(
    (slot: AgendaSlotType) => {
      tryCatch(function handleAddSlotToBookedAgendaSlotListSafe() {
        dispatch(addSlotToBookedAgendaSlotList(slot));
      })();
    },
    [dispatch],
  );

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

  useEffect(() => {
    tryCatch(function getInitialDataLoaded() {
      dispatch(fetchAgendaSlotListRequest(selectedWeekShift));
    })();
  }, [dispatch, selectedWeekShift]);

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
