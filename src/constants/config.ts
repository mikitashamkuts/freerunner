import {Platform} from 'react-native';

export enum tabs {
  HomeTab = 'HomeTab',
}

export enum routes {
  OrderListScreen = 'OrderListScreen',
  OrderDetailScreen = 'OrderDetailScreen',
}

export enum loadingStatusList {
  Error = 'Error',
  Loading = 'Loading',
  Success = 'Success',
}

export const isDevelopmentEnvironment = process.env.NODE_ENV === 'development';

export const defaultCurrency = {
  symbol: '€',
};

export const imageCacheSizeLimit = 1815; // 1.8mb, aproximate equivalent of 50 cached logo icons

export const defaultAnimationDuration = 375; // ms

export const isAndroid = Platform.OS === 'android';

export const priceDigitLimit = 15; // for preventing text overflow, presuming EUR currency is the only option
export const overflowSymbolLimit = 16; // for preventing text overflow,

export enum exceptionList {
  InvalidParam = 'Undefined or Falsy or Incorrect Parameter',
}
