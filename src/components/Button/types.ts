import {CustomComponentProps} from '@src/types';

export interface Props extends CustomComponentProps {
  onPress: () => void;
  text: string;
  accessibilityLabel: string;
  accessibilityHint: string;
}
