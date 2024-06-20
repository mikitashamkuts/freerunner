import {CustomComponentProps} from '../../types';
import {iconColorList, iconList} from '../../design';

export interface Props extends CustomComponentProps {
  name: keyof typeof iconList;
  color: keyof typeof iconColorList;
}
