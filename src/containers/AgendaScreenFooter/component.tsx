import React, {FC, memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {whyDidItRenderConfig} from '../../../debug';
import {Text} from '../../components';
import {useTheme} from '../../hooks';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {Props, styles} from '.';

const filterOptionSequence = ['all', 'booked', 'available'];

const AgendaScreenFooter: FC<Props> = ({config}) => {
  const [filterOptionIndex, setFilterOptionIndex] = useState(0);
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const themedStyles = useTheme(styles);

  const {setAgendaSlotListFilter} = config;

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
    })();
  }, [filterOptionIndex, setAgendaSlotListFilter]);

  const dynamicStyles = StyleSheet.create({
    container: {
      paddingBottom: insets.bottom,
    },
  });

  return (
    <View style={[themedStyles.container, dynamicStyles.container]}>
      <Pressable
        accessibilityLabel={t('agendaScreen.footer.todayButton.accessibilityLabel')}
        accessibilityHint={t('agendaScreen.footer.todayButton.accessibilityHint')}
        style={themedStyles.buttonContainer}>
        <Text color="Action" text={t('agendaScreen.footer.todayButton.text')} />
      </Pressable>
      <Pressable
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
