import {CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps {
  title: string;
  onPress: () => void;
}
