import React, {FC, memo} from 'react';
import {Pressable, ScrollView, View} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {
  ActionText,
  AgendaScreenHeaderDateText,
  DayLetterWithNumberActionColumn,
  Icon,
  ScreenHeader,
} from '../../components';

import {Props, styles} from '.';

const AgendaScreenHeader: FC<Props> = () => {
  return (
    <ScreenHeader containerStyle={styles.container}>
      <View style={styles.weekSelectorContainer}>
        <Pressable style={styles.weekSelectorContainerOptionContainer}>
          <Icon
            color="Action"
            name="Arrow"
            containerStyle={styles.weekSelectorContainerOptionLeftContainer}
          />
          <ActionText text="24 - 30 June" numberOfLines={1} />
        </Pressable>
        <Pressable style={styles.weekSelectorContainerOptionContainer}>
          <ActionText text="01 - 07 July" numberOfLines={1} />
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
        <DayLetterWithNumberActionColumn dayLetter="M" dayNumber="24" />
        <DayLetterWithNumberActionColumn dayLetter="T" dayNumber="25" />
        <DayLetterWithNumberActionColumn dayLetter="W" dayNumber="26" />
        <DayLetterWithNumberActionColumn isActive dayLetter="T" dayNumber="27" />
        <DayLetterWithNumberActionColumn dayLetter="F" dayNumber="28" />
        <DayLetterWithNumberActionColumn dayLetter="S" dayNumber="29" />
        <DayLetterWithNumberActionColumn dayLetter="S" dayNumber="30" />
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
