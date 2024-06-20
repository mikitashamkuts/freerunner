import {textColorList} from '../../design';
import {CustomComponentProps} from '../../types';

export interface Props extends CustomComponentProps {
  color: keyof typeof textColorList;
  title: string;
}
