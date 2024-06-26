import {AgendaSlotType, CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps, AgendaSlotType {
  onPress: (value: AgendaSlotType) => void;
}
