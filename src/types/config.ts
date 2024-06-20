import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native/types';

import {loadingStatusList, routes} from '../constants';
import {iconList} from '../design';

export type CustomComponentProps = {
  containerStyle?: ViewStyle | TextStyle | ViewStyle[];
  children?: ReactNode;
};

type TranslationValueType = {
  text: string;
  accessibilityLabel: string;
  accessibilityHint: string;
};

export type TranslationType = {
  translation: {
    orderListScreen: {
      screenHeaderHolder: {
        screenHeaderTitle: TranslationValueType;
      };
    };
    orderListItem: {
      numberOfArticles: {
        single: string;
        multiple: string;
      };
      orderStatus: {
        completed: string;
        pending: string;
      };
    };
    orderDetailScreen: {
      paymentStatus: string;
      referenceNumber: string;
      numberOfShippedArticles: string;
      orderStatus: {
        pending: {
          title: string;
          subtitle: string;
        };
        completed: {
          title: string;
          subtitle: string;
        };
      };
      total: string;
      payButton: {
        title: string;
      };
    };
  };
};

export type OrderIdType = string;
export type OrderMerchantNameType = string;
export type OrderMerchantLogoType = string;
export type OrderDateType = string;
export type OrderNextDueAmountType = string;
export type OrderNextDueDateType = string;
export type OrderStatusType = string;
export type OrderReferenceType = string;
export type OrderPriceType = string;
export type OrderNumberOfArticlesType = string;
export type OrderShippedArticlesType = string;
export interface OrderType {
  id: OrderIdType;
  merchantName: OrderMerchantNameType;
  merchantLogo: OrderMerchantLogoType;
  date: OrderDateType;
  nextDueAmount: OrderNextDueAmountType;
  nextDueDate: OrderNextDueDateType;
  status: OrderStatusType;
  reference: OrderReferenceType;
  price: OrderPriceType;
  numberOfArticles: OrderNumberOfArticlesType;
  shippedArticles: OrderShippedArticlesType;
}

export type OrderListStateType = {
  list: OrderType[];
  status: keyof typeof loadingStatusList;
};

export type OrderStateType = {
  order: OrderType;
};

export type GlobalStateType = {
  orderList: OrderListStateType;
  order: OrderStateType;
};

export type IconSettingsType = {
  [key: string]: {
    paths: {
      d1: string;
      d2?: string;
      d3?: string;
      d4?: string;
      d5?: string;
    };
    settings: {
      color: string;
      width: number;
      height: number;
      viewBox: string;
      customShift?: {
        left?: number;
        top?: number;
      };
    };
  };
};

export type RootStackParamList = {
  [routes.OrderListScreen]: undefined;
  [routes.OrderDetailScreen]: undefined;
};

export type IconTextRowRenderListItemType = {
  icon: keyof typeof iconList;
  text: string;
};
