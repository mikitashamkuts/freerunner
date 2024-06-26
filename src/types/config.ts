import {ReactNode} from 'react';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native/types';

import {routes} from '../constants';
import {AgendaSlotListStateType} from '../store';

export type AgendaSlotStartType = string;
export type AgendaSlotEndType = string;
export type AgendaSlotIsTakenType = boolean;
export interface AgendaSlotType {
  Start: AgendaSlotStartType;
  End: AgendaSlotEndType;
  Taken?: AgendaSlotIsTakenType;
}

export type AgendaSlotListType = AgendaSlotType[];

/**
 * Combined style sheet type options.
 *
 * This type represents a union of different style types available in React Native.
 * It can be used to define styles that can be applied to various components like Views, Text, and Images.
 *
 * - `ViewStyle`: Defines styles for View components.
 * - `TextStyle`: Defines styles for Text components.
 * - `ImageStyle`: Defines styles for Image components.
 */
export type DefaultStyleSheetStyleType = ViewStyle | TextStyle | ImageStyle;

/**
 * Props for a custom component.
 *
 * @typedef {Object} CustomComponentProps
 * @property {ViewStyle | TextStyle | ViewStyle[]} [containerStyle] - The style of the container.
 * @property {ReactNode} [children] - The children nodes.
 */
export type CustomComponentProps = {
  containerStyle?: DefaultStyleSheetStyleType | DefaultStyleSheetStyleType[];
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
    agendaScreen: {
      footer: {
        todayButton: TranslationValueType;
        filterButton: {
          all: TranslationValueType;
          booked: TranslationValueType;
          available: TranslationValueType;
        };
      };
      selectedSlot: {
        bottomSheet: {
          fromDate: TranslationValueType;
          untilDate: TranslationValueType;
          bookButton: TranslationValueType;
          reservedSlot: TranslationValueType;
        };
      };
    };
  };
};

/**
 * A type representing the global state of the application.
 *
 * @typedef {Object} GlobalStateType
 * @property {OrderListStateType} orderList - The state of the order list.
 * @property {OrderStateType} order - The state of a single order.
 */
export type GlobalStateType = {
  agendaSlotList: AgendaSlotListStateType;
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
 * @property {undefined} [routes.AgendaScreen] - The main schedule displaying screen route.
 */
export type RootStackParamList = {
  [routes.AgendaScreen]: undefined;
};
