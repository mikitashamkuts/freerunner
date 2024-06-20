import {CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps {
  uri: string;
  size: 'small' | 'big';
}
