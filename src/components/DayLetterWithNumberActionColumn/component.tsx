import React, {FC, memo} from 'react';
import {Pressable, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {DayLetterText} from '../DayLetterText';
import {DayNumberText} from '../DayNumberText';

import {Props, styles} from '.';

const DayLetterWithNumberActionColumn: FC<Props> = ({isActive, dayLetter, dayNumber, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <DayLetterText text={dayLetter} containerStyle={styles.dayLetterTextContainer} />
      <DayNumberText
        text={dayNumber}
        containerStyle={[
          styles.dayNumberTextContainer,
          isActive && styles.dayNumberTextContainerActive,
        ]}
        color={(isActive && 'Light') || isDarkMode ? 'Light' : 'Dark'}
      />
    </Pressable>
  );
};

DayLetterWithNumberActionColumn.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayLetterWithNumberActionColumn);
