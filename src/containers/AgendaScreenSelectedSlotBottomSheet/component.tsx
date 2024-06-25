import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {format} from 'date-fns';
import React, {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {whyDidItRenderConfig} from '../../../debug';
import {Button, Text} from '../../components';
import {hapticFeedbackModeList} from '../../constants';
import {paddingList} from '../../design';
import {useTheme} from '../../hooks';
import {getHapticFeedbackTriggered, getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {Props, styles} from '.';

const AgendaScreenSelectedSlotBottomSheet: FC<Props> = ({config}) => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';

  const themedStyles = useTheme(styles);

  const {setIsBottomSheetShown, agendaSlot} = config;

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.5} />
    ),
    [],
  );

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
            numberOfLines={1}
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
              text={agendaSlot?.Start && format(new Date(agendaSlot.Start), 'h:mm a')}
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
              text={agendaSlot?.End && format(new Date(agendaSlot.End), ' h:mm a')}
            />
          </View>
        </View>
        <Button
          onPress={() => {
            console.log('not implemented yet functionality');
            getHapticFeedbackTriggered(hapticFeedbackModeList.Default);
          }}
          text={t('agendaScreen.selectedSlot.bottomSheet.bookButton.text')}
          accessibilityLabel={t(
            'agendaScreen.selectedSlot.bottomSheet.bookButton.accessibilityLabel',
          )}
          accessibilityHint={t(
            'agendaScreen.selectedSlot.bottomSheet.bookButton.accessibilityHint',
          )}
        />
      </View>
    </BottomSheet>
  );
};

AgendaScreenSelectedSlotBottomSheet.whyDidYouRender =
  whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(AgendaScreenSelectedSlotBottomSheet);
