import {FC, memo, useCallback, useEffect} from 'react';
import {FlatList, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useDispatch, useSelector} from 'react-redux';

import {OrderListItem} from '../../components';
import {routes} from '../../constants';
import {paddingList} from '../../design';
import {useTypedNavigation} from '../../hooks';
import {fetchOrderListRequest, setOrder} from '../../store';
import {GlobalStateType, OrderType} from '../../types';
import {getHapticFeedbackTriggered} from '../../utils';

import {Props, styles} from '.';

const OrderListScreenOrderList: FC<Props> = ({}) => {
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const navigation = useTypedNavigation();
  const insets = useSafeAreaInsets();

  const {list: orderList} = useSelector((state: GlobalStateType) => state.orderList);

  const flatListStyles = StyleSheet.create({
    contentContainer: {
      paddingBottom: insets.bottom + paddingList.Default,
    },
  });

  const navigateToOrderDetailScreen = useCallback(
    (item: OrderType) => () => {
      dispatch(setOrder(item));
      navigation.navigate(routes.OrderDetailScreen);
      getHapticFeedbackTriggered();
    },
    [dispatch, navigation],
  );

  useEffect(() => {
    dispatch(fetchOrderListRequest());
  }, [dispatch]);

  /*
  Demo: put isLoading inside the condition bellow
  if a noticable server responce delay is expected
  const {status} = useSelector((state: GlobalStateType) => state.orderList);
  const isLoading = status === 'Loading';
*/
  if (false) {
    return (
      <ScrollView
        contentContainerStyle={{paddingBottom: insets.bottom + paddingList.Default}}
        showsVerticalScrollIndicator={false}>
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item
              borderRadius={24}
              marginVertical={8}
              width={width - 48}
              height={296}
            />
            <SkeletonPlaceholder.Item
              borderRadius={24}
              marginVertical={8}
              width={width - 48}
              height={296}
            />
            <SkeletonPlaceholder.Item
              borderRadius={24}
              marginVertical={8}
              width={width - 48}
              height={296}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </ScrollView>
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, flatListStyles.contentContainer]}
      data={orderList}
      renderItem={({item}) => (
        <OrderListItem
          listItem={item}
          containerStyle={styles.orderListItemContainer}
          onOrderListItemPress={navigateToOrderDetailScreen(item)}
        />
      )}
      keyExtractor={item => item?.id}
    />
  );
};

export default memo(OrderListScreenOrderList);
