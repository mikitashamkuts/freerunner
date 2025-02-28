import {ReactNode} from 'react';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native/types';
import {z} from 'zod';

import {routes} from '../constants';
import {AgendaSlotListStateType} from '../store';

/**
 * Represents a single agenda slot with its data validation schema
 */
const stringValidationSchema = z.string();
const booleanValidationSchema = z.boolean();

export const AgendaSlotStartType = stringValidationSchema.default('');
export const AgendaSlotEndType = stringValidationSchema.default('');
export const AgendaSlotIsTakenType = booleanValidationSchema.default(false);

export const AgendaSlotValidationSchema = z.object({
  Start: AgendaSlotStartType,
  End: AgendaSlotEndType,
  Taken: AgendaSlotIsTakenType,
});

export interface AgendaSlotType extends z.infer<typeof AgendaSlotValidationSchema> {}

/**
 * Represents a list of agenda slots.
 */
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
 * @property {DefaultStyleSheetStyleType | DefaultStyleSheetStyleType[]} [containerStyle] - The style of the container.
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
      fail: {
        agendaSlotList: TranslationValueType;
      };
    };
  };
};

/**
 * A type representing the global state of the application.
 *
 * @typedef {Object} GlobalStateType
 * @property {AgendaSlotListStateType} agendaSlotList - The state of the agenda slot list.
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
