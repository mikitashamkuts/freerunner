import React, {FC, memo} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {whyDidItRenderConfig} from '../../../debug';
import {ScreenHeader} from '../../components';

const OrderListScreenScreenHeaderHolder: FC = () => {
  const insets = useSafeAreaInsets();
  const {t} = useTranslation();

  const styles = StyleSheet.create({
    container: {
      marginTop: Math.max(insets.top),
    },
  });

  return (
    <ScreenHeader
      containerStyle={styles.container}
      title={t('orderListScreen.screenHeaderHolder.screenHeaderTitle')}
    />
  );
};

OrderListScreenScreenHeaderHolder.whyDidYouRender = whyDidItRenderConfig.HolderComponentDebugActive;

export default memo(OrderListScreenScreenHeaderHolder);
