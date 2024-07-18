import {AgendaSlotType, CustomComponentProps} from '@src/types';

export interface Props extends CustomComponentProps, AgendaSlotType {
  onPress: (value: AgendaSlotType) => void;
}
