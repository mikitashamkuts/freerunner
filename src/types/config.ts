import {ReactNode} from 'react';
import {TextStyle, ViewStyle} from 'react-native/types';
import {loadingStatusList, routes} from '../constants';

/**
 * Props for a custom component.
 *
 * @typedef {Object} CustomComponentProps
 * @property {ViewStyle | TextStyle | ViewStyle[]} [containerStyle] - The style of the container.
 * @property {ReactNode} [children] - The children nodes.
 */
export type CustomComponentProps = {
  containerStyle?: ViewStyle | TextStyle | ViewStyle[];
  children?: ReactNode;
};

/**
 * A type representing the value of a translation item.
 *
 * @typedef {Object} TranslationValueType
 * @property {string} text - The text of the translation.
 * @property {string} accessibilityLabel - The accessibility label for the translation.
 * @property {string} accessibilityHint - The accessibility hint for the translation.
 */
type TranslationValueType = {
  text: string;
  accessibilityLabel: string;
  accessibilityHint: string;
};

/**
 * A type representing the structure of translations.
 *
 * @typedef {Object} TranslationType
 * @property {Object} translation - The translation object.
 */
export type TranslationType = {
  translation: {
    orderListScreen: {
      screenHeaderHolder: {
        screenHeaderTitle: TranslationValueType;
      };
    };
  };
};

/**
 * A type representing an order ID.
 * @typedef {string} OrderIdType
 */
export type OrderIdType = string;

/**
 * A type representing an order merchant name.
 * @typedef {string} OrderMerchantNameType
 */
export type OrderMerchantNameType = string;

/**
 * Interface representing an order.
 *
 * @interface OrderType
 * @property {OrderIdType} id - The ID of the order.
 * @property {OrderMerchantNameType} merchantName - The name of the merchant.
 */
export interface OrderType {
  id: OrderIdType;
  merchantName: OrderMerchantNameType;
}

/**
 * A type representing the state of the order list.
 *
 * @typedef {Object} OrderListStateType
 * @property {OrderType[]} list - The list of orders.
 * @property {keyof typeof loadingStatusList} status - The loading status of the order list.
 */
export type OrderListStateType = {
  list: OrderType[];
  status: keyof typeof loadingStatusList;
};

/**
 * A type representing the state of a single order.
 *
 * @typedef {Object} OrderStateType
 * @property {OrderType} order - The order object.
 */
export type OrderStateType = {
  order: OrderType;
};

/**
 * A type representing the global state of the application.
 *
 * @typedef {Object} GlobalStateType
 * @property {OrderListStateType} orderList - The state of the order list.
 * @property {OrderStateType} order - The state of a single order.
 */
export type GlobalStateType = {
  orderList: OrderListStateType;
  order: OrderStateType;
};

/**
 * A type representing the settings for icons.
 *
 * @typedef {Object} IconSettingsType
 * @property {Object.<string, { paths: { d1: string; d2?: string; d3?: string; d4?: string; d5?: string; }; settings: { color: string; width: number; height: number; viewBox: string; customShift?: { left?: number; top?: number; }; }; }>} - The settings for the icons.
 */
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

/**
 * A type representing the parameter list for the root stack navigator.
 *
 * @typedef {Object} RootStackParamList
 * @property {undefined} [routes.OrderListScreen] - The order list screen route.
 * @property {undefined} [routes.OrderDetailScreen] - The order detail screen route.
 */
export type RootStackParamList = {
  [routes.OrderListScreen]: undefined;
  [routes.OrderDetailScreen]: undefined;
};
