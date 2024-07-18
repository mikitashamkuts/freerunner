import React, {FC, memo, useCallback, useMemo} from 'react';
import {Pressable, useColorScheme} from 'react-native';

import {getFunctionTryCatchWrapped as tryCatch} from '@src/utils';
import {DayLetterText} from '../DayLetterText';
import {DayNumberText} from '../DayNumberText';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * DayLetterWithNumberActionColumn component renders a column with day letter and number,
 * and handles press events.
 *
 * @param {DayLetterWithNumberActionColumnProps} props - The props for the component.
 * @returns {JSX.Element} The DayLetterWithNumberActionColumn component.
 */
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
