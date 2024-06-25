import React, {FC, memo} from 'react';
import {Pressable, ScrollView, View} from 'react-native';

import {AgendaScreenHeaderDateText} from '..';
import {whyDidItRenderConfig} from '../../../debug';
import {ActionText, DayLetterWithNumberActionColumn, Icon, ScreenHeader} from '../../components';

import {Props, styles} from '.';
import {hapticFeedbackModeList} from '../../constants';
import {useTypedSelector} from '../../hooks';
import {AgendaSlotListType} from '../../types';
import {getHapticFeedbackTriggered} from '../../utils';

const AgendaScreenHeader: FC<Props> = ({config}) => {
  const {list, status} = useTypedSelector(state => state.agendaSlotList);
  const {
    previousToSelectedWeekDateText,
    uniqueDayList,
    nextToSelectedWeekDateText,
    setSelectedWeekShift,
    uniqueSelectedDay,
    setSelectedDay,
  } = config;

  const getUniqueDays = (list: AgendaSlotListType): number => {
    const uniqueDays = new Set(list.map(slot => slot.Start.split('T')[0]));
    return Array.from(uniqueDays);
  };

  function getFirstLetterOfDay(dateString) {
    // Parse the date string
    const date = new Date(dateString);
    // Array of the first letters of the days of the week
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    // Get the day of the week (0-6)
    const dayOfWeek = date.getDay();
    // Return the corresponding first letter
    return days[dayOfWeek];
  }

  // Example usage
  const date = '2024-06-24';
  console.log(getFirstLetterOfDay(date));

  return (
    <ScreenHeader containerStyle={styles.container}>
      <View style={styles.weekSelectorContainer}>
        <Pressable
          onPress={() => {
            setSelectedWeekShift((currentWeek: number) => currentWeek - 1);
            getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
          }}
          style={styles.weekSelectorContainerOptionContainer}>
          <Icon
            color="Action"
            name="Arrow"
            containerStyle={styles.weekSelectorContainerOptionLeftContainer}
          />
          <ActionText text={previousToSelectedWeekDateText} numberOfLines={1} />
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedWeekShift((currentWeek: number) => currentWeek + 1);
            getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
          }}
          style={styles.weekSelectorContainerOptionContainer}>
          <ActionText text={nextToSelectedWeekDateText} numberOfLines={1} />
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
          console.log(index, uniqueSelectedDay);
          return (
            <DayLetterWithNumberActionColumn
              onPress={() => {
                setSelectedDay(index);
                console.log(day);
                console.log(uniqueDayList);
              }}
              isActive={day === uniqueSelectedDay}
              dayLetter={getFirstLetterOfDay(day)}
              dayNumber={day.slice(8)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.dateTextContainer}>
        <AgendaScreenHeaderDateText
          text="27 of July 2024"
          containerStyle={styles.dateTextContainer}
        />
      </View>
    </ScreenHeader>
  );
};

AgendaScreenHeader.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenHeader);
