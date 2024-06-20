import React, {FC, memo, useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Pressable, View} from 'react-native';

import {
  Avatar,
  Card,
  DueDateFrame,
  Icon,
  TextRegular,
  TextRegularBold,
  TextSubtitle,
  TextTitle,
} from '../../components';
import {defaultCurrency, overflowSymbolLimit, priceDigitLimit} from '../../constants';
import {
  getDayNumberFromDate,
  getMonthTextFromDate,
  getParsedDayMonthYearFromDate,
  getSymbolLimitedText,
  getTranslatedMonthFromEnglishToSpanish,
} from '../../utils';
const backgroundImage = require('../../../assets/images/header-img.png');

import {Props, styles} from '.';

const OrderListItem: FC<Props> = ({listItem, onOrderListItemPress, containerStyle}) => {
  const {t} = useTranslation();

  const {merchantName, status, nextDueDate, numberOfArticles, merchantLogo, nextDueAmount} =
    listItem;
  const isCompleted = status === 'completed';

  const parsedDayMonthYear = useMemo(() => {
    return nextDueDate ? getParsedDayMonthYearFromDate(new Date(nextDueDate)) : '';
  }, [nextDueDate]);

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

  const handleOrderListItemPress = useCallback(() => {
    onOrderListItemPress?.();
  }, [onOrderListItemPress]);

  return (
    <Pressable style={containerStyle} onPress={handleOrderListItemPress}>
      <Card>
        <View style={styles.topContentContainer}>
          <Image
            source={backgroundImage}
            resizeMode="cover"
            style={styles.topBackgroundImageContainer}
          />
          <TextTitle
            color="Inversive"
            title={merchantName}
            containerStyle={styles.storeNameTextContainer}
          />
          <View style={styles.dateAndArticleDataContainer}>
            <TextSubtitle
              text={parsedDayMonthYear}
              containerStyle={styles.dateAndArticleDateTextContainer}
            />
            <Icon name="BagXS" color="Inversive" containerStyle={styles.articleIconContainer} />
            <TextSubtitle
              text={`${getSymbolLimitedText(numberOfArticles.toString(), overflowSymbolLimit)} ${t(
                `orderListItem.numberOfArticles.${+numberOfArticles === 1 ? 'single' : 'multiple'}`,
              )}`}
            />
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <Avatar uri={merchantLogo} size="small" />
        </View>
        <View
          style={
            isCompleted
              ? styles.bottomContentCompletedOrderContainer
              : styles.bottomContentPendingOrderContainer
          }>
          {isCompleted ? (
            <>
              <Icon name="CheckSmall" color="Default" />
              <View style={styles.bottomContentCompletedOrderTextContainer}>
                <TextRegular
                  containerStyle={styles.bottomContentCompletedOrderTextStatusContainer}
                  text={t(`orderListItem.orderStatus.${status}`)}
                />
                <TextRegularBold text={parsedDayMonthYear} />
              </View>
            </>
          ) : (
            <>
              <DueDateFrame
                size="small"
                type="pending"
                date={parsedDayNumber}
                month={parsedMonthText}
              />
              <View style={styles.bottomContentPendingOrderTextContainer}>
                <TextRegular
                  containerStyle={styles.bottomContentPendingOrderTextStatusContainer}
                  text={t(`orderListItem.orderStatus.${status}`)}
                />
                <TextRegularBold
                  text={`${getSymbolLimitedText(nextDueAmount.toString(), priceDigitLimit)} ${
                    defaultCurrency.symbol
                  }`}
                />
              </View>
            </>
          )}
        </View>
      </Card>
    </Pressable>
  );
};

export default memo(OrderListItem);
