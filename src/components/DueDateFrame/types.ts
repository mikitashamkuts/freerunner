import {CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps {
  size: 'small' | 'big';
  type: 'pending' | 'delayed';
  date: string;
  month: string;
}
