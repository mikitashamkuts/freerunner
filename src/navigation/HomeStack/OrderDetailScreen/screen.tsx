import {FC, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {
  OrderDetailScreenCardCompletedOrderHolder,
  OrderDetailScreenCardPendingOrderHolder,
  OrderDetailScreenHeaderHolder,
  OrderDetailScreenIconTextRowHolder,
  StatusBar,
  Text,
  TextSubtitle,
  TextTitle,
} from '../../../components';
import {isAndroid} from '../../../constants';
import {GlobalStateType} from '../../../types';
import {getParsedDayMonthYearFromDate} from '../../../utils';
const backgroundImage = require('../../../../assets/images/header-img.png');

import {styles} from '.';

const OrderDetailScreen: FC = () => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const windowHeight = Dimensions.get('window').height;

  const {
    order: {merchantName, nextDueDate, status, reference},
  } = useSelector((state: GlobalStateType) => state.order);

  const parsedDayMonthYear = useMemo(() => {
    return nextDueDate ? getParsedDayMonthYearFromDate(new Date(nextDueDate)) : '';
  }, [nextDueDate]);

  const androidBackgroundImageHeight = windowHeight - 393 + insets.bottom + insets.top + 24 + 8; // calculation is based on the mockup + buffer
  const iosBackgroundImageHeight = windowHeight - 393 + 24 + 8; // calculation is based on the mockup + buffer
  const dynamicStyles = StyleSheet.create({
    backgroundContainer: {
      height: isAndroid ? androidBackgroundImageHeight : iosBackgroundImageHeight,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={[styles.backgroundContainer, dynamicStyles.backgroundContainer]}
      />
      <OrderDetailScreenHeaderHolder />
      <ScrollView
        contentContainerStyle={styles.orderDescriptionContentContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topOrderDescriptionContainer}>
          <TextTitle color="Inversive" title={merchantName} />
          <TextSubtitle text={parsedDayMonthYear} />
          <Text
            color="Inversive"
            fontSize="Small"
            fontWeight="Medium"
            text={`${t('orderDetailScreen.referenceNumber')} ${reference}`}
            containerStyle={styles.topOrderDescriptionRefernceNumberContainer}
            numberOfLines={1}
          />
          <OrderDetailScreenIconTextRowHolder
            containerStyle={styles.topOrderDescriptionOrderDetailScreenIconTextRowHolderContainer}
          />
        </View>
        {status === 'pending' ? (
          <OrderDetailScreenCardPendingOrderHolder />
        ) : (
          <OrderDetailScreenCardCompletedOrderHolder />
        )}
      </ScrollView>
    </View>
  );
};

OrderDetailScreen.whyDidYouRender = true;

export default OrderDetailScreen;
