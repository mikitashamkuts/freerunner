import {fontFamilyList, fontSizeList, fontWeightList, textColorList} from '@src/design';
import {CustomComponentProps} from '@src/types';

export interface Props extends CustomComponentProps {
  text: string;
  fontFamily?: keyof typeof fontFamilyList;
  fontWeight?: keyof typeof fontWeightList;
  fontSize?: keyof typeof fontSizeList;
  color?: keyof typeof textColorList;
  numberOfLines?: number;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: 'header' | 'text';
}
