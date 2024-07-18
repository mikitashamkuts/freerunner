import {CustomComponentProps} from '@src/types';

export interface Props extends CustomComponentProps {
  isActive: boolean;
  dayLetter: string;
  dayNumber: string;
  onPress: () => void;
}
