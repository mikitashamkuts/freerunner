import React, {FC, memo, useCallback, useMemo} from 'react';
import {Pressable, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';
import {DayLetterText} from '../DayLetterText';
import {DayNumberText} from '../DayNumberText';

import {Props, styles} from '.';

const DayLetterWithNumberActionColumn: FC<Props> = ({isActive, dayLetter, dayNumber, onPress}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const handleOnPress = useCallback(() => {
    tryCatch(function handleOnPressSafe() {
      onPress?.();
    })();
  }, [onPress]);

  const dayNumberTextColor = useMemo(() => {
    return tryCatch(function getDayNumberTextColor() {
      return (isActive && 'Light') || isDarkMode ? 'Light' : 'Dark';
    })();
  }, [isActive, isDarkMode]);

  return (
    <Pressable onPress={handleOnPress} style={styles.container}>
      <DayLetterText text={dayLetter} containerStyle={styles.dayLetterTextContainer} />
      <DayNumberText
        text={dayNumber}
        containerStyle={[
          styles.dayNumberTextContainer,
          isActive ? styles.dayNumberTextContainerActive : {},
        ]}
        color={dayNumberTextColor}
      />
    </Pressable>
  );
};

DayLetterWithNumberActionColumn.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(DayLetterWithNumberActionColumn);
