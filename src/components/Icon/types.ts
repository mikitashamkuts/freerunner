import {iconColorList, iconList} from '@src/design';
import {CustomComponentProps} from '@src/types';

export interface Props extends CustomComponentProps {
  name: keyof typeof iconList;
  color: keyof typeof iconColorList;
}
