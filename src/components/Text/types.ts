import {CustomComponentProps} from '../../types';
import {fontFamilyList, fontWeightList, fontSizeList, textColorList} from '../../design';

export interface Props extends CustomComponentProps {
  text: string;
  fontFamily?: keyof typeof fontFamilyList;
  fontWeight?: keyof typeof fontWeightList;
  fontSize?: keyof typeof fontSizeList;
  color?: keyof typeof textColorList;
  numberOfLines?: number;
}
