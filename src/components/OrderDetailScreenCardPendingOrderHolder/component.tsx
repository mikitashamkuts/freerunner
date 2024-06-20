import React, {FC, memo, useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {Button, Card, DueDateFrame, Text} from '..';
import {defaultCurrency} from '../../constants';
import {payOrderRequest} from '../../store';
import {GlobalStateType} from '../../types';
import {
  getDayNumberFromDate,
  getHapticFeedbackTriggered,
  getMonthTextFromDate,
  getTranslatedMonthFromEnglishToSpanish,
} from '../../utils';

import {Props, styles} from '.';

const OrderDetailScreenCardPendingOrderHolder: FC<Props> = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const {
    order: {nextDueDate, status, price, id},
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

  const onPayOrderButtonPress = useCallback(() => {
    id && dispatch(payOrderRequest({orderId: id}));
    getHapticFeedbackTriggered();
  }, [dispatch, id]);

  return (
    <Card containerStyle={[styles.container, dynamicStyles.container]}>
      <Text
        containerStyle={styles.cardTitleContainer}
        fontWeight="SemiBold"
        fontSize="Medium"
        text={t('orderDetailScreen.paymentStatus')}
        numberOfLines={1}
      />
      <View style={styles.cardDueDateWrapperContainer}>
        <View style={styles.cardDueDateContainer}>
          <DueDateFrame type="pending" size="big" date={parsedDayNumber} month={parsedMonthText} />
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
            text={t(`orderDetailScreen.orderStatus.${status}.subtitle`)}
          />
        </View>
      </View>
      <View style={styles.cardBottomContainer}>
        <Text
          numberOfLines={1}
          fontWeight="Regular"
          fontSize="Medium"
          text={`${t('orderDetailScreen.total')} ${price} ${defaultCurrency.symbol}`}
        />
      </View>
      <Button title={t('orderDetailScreen.payButton.title')} onPress={onPayOrderButtonPress} />
    </Card>
  );
};

export default memo(OrderDetailScreenCardPendingOrderHolder);
