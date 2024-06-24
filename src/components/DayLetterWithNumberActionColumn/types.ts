import {CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps {
  isActive: boolean;
  dayLetter: string;
  dayNumber: string;
}
