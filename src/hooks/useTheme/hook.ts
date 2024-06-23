// useTheme.ts
import {useMemo} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {DefaultStyleSheetStyleType} from '../../types';
import {getFunctionTryCatchWrapped} from '../../utils';

type StyleSheetStyleObjectType = {
  [key: string]: DefaultStyleSheetStyleType;
};

function useTheme(styles: StyleSheetStyleObjectType): StyleSheetStyleObjectType {
  const theme = useColorScheme();
  const defaultTheme = 'light';

  return useMemo(() => {
    if (!theme || theme === defaultTheme) {
      return styles;
    }

    const styleList = Object.keys(styles);
    const mergedStyleObject = {} as any;

    styleList.forEach((styleName: string) => {
      const baseStyle = styles[styleName];
      const themedStyle = styles[`${theme}_${styleName}`];
      mergedStyleObject[styleName] = StyleSheet.compose(baseStyle, themedStyle);
    });

    return StyleSheet.create(mergedStyleObject);
  }, [theme, styles]);
}

export default getFunctionTryCatchWrapped(useTheme);
