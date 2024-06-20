import React, {FC, memo} from 'react';

import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {IconTextRow} from '..';
import {defaultCurrency} from '../../constants';
import {GlobalStateType, IconTextRowRenderListItemType} from '../../types';

import {Props} from '.';

const OrderDetailScreenIconTextRowHolder: FC<Props> = ({containerStyle}) => {
  const {t} = useTranslation();

  const {
    order: {nextDueAmount, shippedArticles, numberOfArticles},
  } = useSelector((state: GlobalStateType) => state.order);

  const renderList: IconTextRowRenderListItemType[] = [
    {icon: 'Receipt', text: `${nextDueAmount} ${defaultCurrency.symbol}`},
    {
      icon: 'BagXS',
      text: `${numberOfArticles} ${t(
        `orderListItem.numberOfArticles.${+numberOfArticles === 1 ? 'single' : 'multiple'}`,
      )}`,
    },
    {
      icon: 'Lorry',
      text: `${shippedArticles}/${numberOfArticles} ${t(
        'orderDetailScreen.numberOfShippedArticles',
      )}`,
    },
  ];

  return <IconTextRow renderList={renderList} containerStyle={containerStyle} />;
};

export default memo(OrderDetailScreenIconTextRowHolder);
