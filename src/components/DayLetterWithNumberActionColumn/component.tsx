import React, {FC, memo} from 'react';
import {View, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {DayLetterText} from '../DayLetterText';
import {DayNumberText} from '../DayNumberText';

import {Props, styles} from '.';

const DayLetterWithNumberActionColumn: FC<Props> = ({isActive, dayLetter, dayNumber}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <DayLetterText text={dayLetter} containerStyle={styles.dayLetterTextContainer} />
      <DayNumberText
        text={dayNumber}
        containerStyle={[
          styles.dayNumberTextContainer,
          isActive && styles.dayNumberTextContainerActive,
        ]}
        color={(isActive && 'Light') || isDarkMode ? 'Light' : 'Dark'}
      />
    </View>
  );
};

DayLetterWithNumberActionColumn.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayLetterWithNumberActionColumn);
