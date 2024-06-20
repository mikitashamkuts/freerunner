import {useNavigation} from '@react-navigation/native';
import React, {FC, memo, useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Avatar, Icon} from '../../components';
import {getHapticFeedbackTriggered} from '../../utils';

import {useSelector} from 'react-redux';
import {GlobalStateType} from '../../types';

import {Props, styles} from '.';

const OrderDetailScreenHeaderHolder: FC<Props> = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const {order: currentOrder} = useSelector((state: GlobalStateType) => state.order);

  const dynamicStyles = StyleSheet.create({
    container: {
      marginTop: insets.top,
    },
  });

  const onBackButtonPress = useCallback(() => {
    navigation.goBack();
    getHapticFeedbackTriggered();
  }, [navigation]);

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <Pressable onPress={onBackButtonPress} style={styles.backButtonContainer}>
        <Icon color="Inversive" name="Arrow" />
      </Pressable>
      <Avatar
        size="big"
        uri={currentOrder.merchantLogo}
        containerStyle={styles.avatarContainerStyle}
      />
    </View>
  );
};

export default memo(OrderDetailScreenHeaderHolder);
