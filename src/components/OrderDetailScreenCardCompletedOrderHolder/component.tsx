import React, {FC, memo, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {Card, Icon, Text} from '..';
import {GlobalStateType} from '../../types';
import {
  getDayNumberFromDate,
  getMonthTextFromDate,
  getTranslatedMonthFromEnglishToSpanish,
} from '../../utils';

import {Props, styles} from '.';

const OrderDetailScreenCardCompletedOrderHolder: FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const {
    order: {nextDueDate, status},
  } = useSelector((state: GlobalStateType) => state.order);

  const parsedDayNumber = useMemo(() => {
    return nextDueDate ? getDayNumberFromDate(new Date(nextDueDate)) : '';
  }, [nextDueDate]);

  const parsedMonthText = useMemo(() => {
    return nextDueDate
      ? getTranslatedMonthFromEnglishToSpanish(
          getMonthTextFromDate(new Date(nextDueDate)),
        ).toLocaleLowerCase()
      : '';
  }, [nextDueDate]);

  const dynamicStyles = StyleSheet.create({
    container: {
      paddingBottom: insets.bottom,
    },
  });

  return (
    <Card containerStyle={[styles.container, dynamicStyles.container]}>
      <Text
        containerStyle={styles.cardTitleContainer}
        fontWeight="SemiBold"
        fontSize="Medium"
        text={t('orderDetailScreen.paymentStatus')}
        numberOfLines={1}
      />
      <View style={styles.iconWrapperContainer}>
        <View style={styles.iconContainer}>
          <Icon color="Default" name="CheckBig" />
        </View>
        <View style={styles.cardOrderStatusTextContainer}>
          <Text
            numberOfLines={2}
            fontWeight="Medium"
            fontSize="Medium"
            text={t(`orderDetailScreen.orderStatus.${status}.title`)}
            containerStyle={styles.cardOrderStatusTitleContainer}
          />
          <Text
            numberOfLines={2}
            fontWeight="Regular"
            fontSize="Regular"
            text={`${t(
              `orderDetailScreen.orderStatus.${status}.subtitle`,
            )} ${parsedDayNumber} de ${parsedMonthText}`}
          />
        </View>
      </View>
    </Card>
  );
};

export default memo(OrderDetailScreenCardCompletedOrderHolder);
