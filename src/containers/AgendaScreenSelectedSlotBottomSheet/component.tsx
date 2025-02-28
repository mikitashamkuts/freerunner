import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {format} from 'date-fns';
import React, {FC, memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Button, Text} from '@src/components';
import {hapticFeedbackModeList} from '@src/constants';
import {paddingList} from '@src/design';
import {useTheme} from '@src/hooks';
import {
  getHapticFeedbackTriggered,
  getSymbolLimitedText,
  getFunctionTryCatchWrapped as tryCatch,
} from '@src/utils';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, styles} from '.';

/**
 * Bottom sheet component to display and book agenda slots.
 *
 * @param {Props} config - Configuration object containing agenda slot details and functions.
 * @returns {JSX.Element} The rendered bottom sheet component.
 */
const AgendaScreenSelectedSlotBottomSheet: FC<Props> = ({config}) => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const [isBookedButtonPressed, setIsBookedButtonPressed] = useState(false);

  const themedStyles = useTheme(styles);

  const {setIsBottomSheetShown, agendaSlot, handleAddSlotToBookedAgendaSlotList} = config;

  /**
   * Renders the backdrop with a specific opacity.
   *
   * @param {any} props - Properties passed to the backdrop component.
   * @returns {JSX.Element} The rendered backdrop component.
   */
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} />
    ),
    [],
  );

  /**
   * Handles the bottom sheet close action.
   */
  const handleOnClose = useCallback(() => {
    tryCatch(function handleOnCloseSafe() {
      setIsBottomSheetShown(false);
    })();
  }, [setIsBottomSheetShown]);

  const dynamicStyles = StyleSheet.create({
    contentContainer: {
      paddingBottom: insets.bottom + paddingList.Default,
    },
  });

  /**
   * Handles the book button press action.
   */
  const handleOnBookButtonPress = useCallback(() => {
    tryCatch(function handleOnBookButtonPressSafe() {
      agendaSlot &&
        handleAddSlotToBookedAgendaSlotList({End: agendaSlot.End, Start: agendaSlot.Start});
      setIsBookedButtonPressed(true);
      getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
    })();
  }, [agendaSlot, handleAddSlotToBookedAgendaSlotList]);

  return (
    <BottomSheet
      backgroundComponent={null}
      handleComponent={null}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      snapPoints={['35%']}
      onClose={handleOnClose}>
      <View style={themedStyles.handleContainer} />
      <View style={[themedStyles.contentContainer, dynamicStyles.contentContainer]}>
        <View>
          <Text
            numberOfLines={2}
            color="Faded"
            containerStyle={themedStyles.dateContainer}
            text={agendaSlot?.Start && format(new Date(agendaSlot.Start), 'eeee, MMMM do, yyyy')}
          />
          <View style={themedStyles.textWrapperContainer}>
            <Text
              numberOfLines={1}
              color="Faded"
              containerStyle={themedStyles.textContainer}
              text={t('agendaScreen.selectedSlot.bottomSheet.fromDate.text')}
              accessibilityLabel={t(
                'agendaScreen.selectedSlot.bottomSheet.fromDate.accessibilityLabel',
              )}
            />
            <Text
              numberOfLines={1}
              color={isDarkMode ? 'Light' : 'Dark'}
              text={getSymbolLimitedText(
                agendaSlot?.Start && format(new Date(agendaSlot.Start), 'h:mm a'),
                9,
              )}
            />
          </View>
          <View style={themedStyles.textWrapperContainer}>
            <Text
              numberOfLines={1}
              color="Faded"
              containerStyle={themedStyles.textContainer}
              text={t('agendaScreen.selectedSlot.bottomSheet.untilDate.text')}
              accessibilityLabel={t(
                'agendaScreen.selectedSlot.bottomSheet.untilDate.accessibilityLabel',
              )}
            />
            <Text
              numberOfLines={1}
              color={isDarkMode ? 'Light' : 'Dark'}
              fontSize="Regular"
              text={
                agendaSlot?.End &&
                getSymbolLimitedText(format(new Date(agendaSlot.End), ' h:mm a'), 9)
              }
            />
          </View>
        </View>
        {!isBookedButtonPressed ? (
          <Button
            onPress={handleOnBookButtonPress}
            text={t('agendaScreen.selectedSlot.bottomSheet.bookButton.text')}
            accessibilityLabel={t(
              'agendaScreen.selectedSlot.bottomSheet.bookButton.accessibilityLabel',
            )}
            accessibilityHint={t(
              'agendaScreen.selectedSlot.bottomSheet.bookButton.accessibilityHint',
            )}
          />
        ) : (
          <View style={themedStyles.reservedSLotTextContainer}>
            <Text
              color="Faded"
              text={t('agendaScreen.selectedSlot.bottomSheet.reservedSlot.text')}
              accessibilityLabel={t(
                'agendaScreen.selectedSlot.bottomSheet.reservedSlot.accessibilityLabel',
              )}
            />
          </View>
        )}
      </View>
    </BottomSheet>
  );
};

AgendaScreenSelectedSlotBottomSheet.whyDidYouRender =
  whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenSelectedSlotBottomSheet);
