import React, {FC, memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Text} from '@src/components';
import {hapticFeedbackModeList} from '@src/constants';
import {useTheme} from '@src/hooks';
import {AgendaSlotListFilerType} from '@src/navigation/HomeStack/AgendaScreen/screen';
import {getHapticFeedbackTriggered, getFunctionTryCatchWrapped as tryCatch} from '@src/utils';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

const filterOptionSequence: AgendaSlotListFilerType[] = ['all', 'booked', 'available'];

/**
 * AgendaScreenFooter component for displaying footer options.
 *
 * @param {Props} props - Props passed to the component.
 * @returns {JSX.Element} The rendered component.
 */
const AgendaScreenFooter: FC<Props> = ({config}) => {
  const [filterOptionIndex, setFilterOptionIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const themedStyles = useTheme(styles);

  const {setAgendaSlotListFilter} = config;

  /**
   * Handle the press event for the filter option button.
   */
  const handleOnFilterOptionPress = useCallback(() => {
    tryCatch(function getFilterOptionCalculated() {
      if (filterOptionIndex >= filterOptionSequence.length - 1) {
        setAgendaSlotListFilter(filterOptionSequence[0]);
        setFilterOptionIndex(0);
      } else {
        const shift = filterOptionIndex + 1;
        setAgendaSlotListFilter(filterOptionSequence[shift]);
        setFilterOptionIndex(shift);
      }
      getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
    })();
  }, [filterOptionIndex, setAgendaSlotListFilter]);

  /**
   * Handle the press event for the "Today" button.
   */
  const handleOnTodayButtonPress = useCallback(() => {
    tryCatch(function handleOnTodayButtonPressSafe() {
      console.warn('not implemented yet functionality');
      getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
    })();
  }, []);

  const dynamicStyles = StyleSheet.create({
    container: {
      paddingBottom: insets.bottom,
    },
  });

  return (
    <View style={[themedStyles.container, dynamicStyles.container]}>
      <Pressable
        hitSlop={5}
        accessibilityLabel={t('agendaScreen.footer.todayButton.accessibilityLabel')}
        accessibilityHint={t('agendaScreen.footer.todayButton.accessibilityHint')}
        style={themedStyles.buttonContainer}
        onPress={handleOnTodayButtonPress}>
        <Text color="Action" text={t('agendaScreen.footer.todayButton.text')} />
      </Pressable>
      <Pressable
        hitSlop={5}
        accessibilityLabel={t(
          `agendaScreen.footer.filterButton.${filterOptionSequence[filterOptionIndex]}.accessibilityLabel`,
        )}
        accessibilityHint={`agendaScreen.footer.filterButton.${filterOptionSequence[filterOptionIndex]}.accessibilityHint`}
        style={themedStyles.buttonContainer}
        onPress={handleOnFilterOptionPress}>
        <Text
          color="Action"
          text={t(
            `agendaScreen.footer.filterButton.${filterOptionSequence[filterOptionIndex]}.text`,
          )}
        />
      </Pressable>
    </View>
  );
};

AgendaScreenFooter.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenFooter);
