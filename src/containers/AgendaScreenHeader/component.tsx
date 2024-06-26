import {format} from 'date-fns';
import React, {FC, memo, useCallback, useMemo} from 'react';
import {Pressable, ScrollView, View} from 'react-native';

import {AgendaScreenHeaderDateText} from '..';
import {whyDidItRenderConfig} from '../../../debug';
import {ActionText, DayLetterWithNumberActionColumn, Icon, ScreenHeader} from '../../components';
import {hapticFeedbackModeList} from '../../constants';
import {
  getFirstLetterOfDayName,
  getHapticFeedbackTriggered,
  getSymbolLimitedText,
  getFunctionTryCatchWrapped as tryCatch,
} from '../../utils';

import {Props, styles} from '.';

const AgendaScreenHeader: FC<Props> = ({config}) => {
  const {
    previousToSelectedWeekDateText,
    uniqueDayList,
    nextToSelectedWeekDateText,
    setSelectedWeekShift,
    uniqueSelectedDay,
    setSelectedDay,
    selectedWeekShift,
  } = config;

  const agendaScreenHeaderDateText = useMemo(() => {
    return tryCatch(function getAgendaScreenHeaderDateText() {
      return uniqueSelectedDay && format(new Date(uniqueSelectedDay), 'eeee, MMMM do, yyyy');
    })();
  }, [uniqueSelectedDay]);

  const handleOnPressPreviousToSelectedWeekDate = useCallback(() => {
    tryCatch(function handleOnPressPreviousToSelectedWeekDateSafe() {
      if (selectedWeekShift >= 0) {
        setSelectedWeekShift((currentWeek: number) => currentWeek - 1);
        getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
      }
    })();
  }, [selectedWeekShift, setSelectedWeekShift]);

  const handleOnPressNextToSelectedWeekDateText = useCallback(() => {
    tryCatch(function handleOnPressNextToSelectedWeekDateTextSafe() {
      setSelectedWeekShift((currentWeek: number) => currentWeek + 1);
      getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
    })();
  }, [setSelectedWeekShift]);

  const handleOnPressDayLetterWithNumberActionColumn = useCallback(
    (index: number) => {
      return tryCatch(function handleOnPressDayLetterWithNumberActionColumnSafe() {
        return () => {
          getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
          setSelectedDay(index);
        };
      })();
    },
    [setSelectedDay],
  );

  return (
    <ScreenHeader containerStyle={styles.container}>
      <View style={styles.weekSelectorContainer}>
        <Pressable
          onPress={handleOnPressPreviousToSelectedWeekDate}
          style={styles.weekSelectorContainerOptionContainer}>
          {selectedWeekShift >= 0 && (
            <Icon
              color="Action"
              name="Arrow"
              containerStyle={styles.weekSelectorContainerOptionLeftContainer}
            />
          )}
          <ActionText
            color={selectedWeekShift >= 0 ? 'Action' : 'Faded'}
            text={getSymbolLimitedText(previousToSelectedWeekDateText, 16)}
            numberOfLines={1}
          />
        </Pressable>
        <Pressable
          onPress={handleOnPressNextToSelectedWeekDateText}
          style={styles.weekSelectorContainerOptionContainer}>
          <ActionText
            text={getSymbolLimitedText(nextToSelectedWeekDateText, 16)}
            numberOfLines={1}
          />
          <Icon
            color="Action"
            name="Arrow"
            containerStyle={styles.weekSelectorContainerOptionRightContainer}
          />
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.daySelectorContainer}>
        {uniqueDayList.map((day, index) => {
          return (
            <DayLetterWithNumberActionColumn
              key={day}
              onPress={handleOnPressDayLetterWithNumberActionColumn(index)}
              isActive={day === uniqueSelectedDay}
              dayLetter={getSymbolLimitedText(getFirstLetterOfDayName(day), 1)}
              dayNumber={getSymbolLimitedText(day.slice(8), 2)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.dateTextContainer}>
        <AgendaScreenHeaderDateText
          numberOfLines={2}
          text={agendaScreenHeaderDateText}
          containerStyle={styles.dateTextContainer}
        />
      </View>
    </ScreenHeader>
  );
};

AgendaScreenHeader.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenHeader);
