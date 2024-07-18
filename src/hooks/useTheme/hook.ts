import {useMemo} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';

import {DefaultStyleSheetStyleType} from '@src/types';
import {getFunctionTryCatchWrapped} from '@src/utils';

type StyleSheetStyleObjectType = {
  [key: string]: DefaultStyleSheetStyleType;
};

/**
 * Custom hook to apply theme-based styles.
 * @param styles - An object containing base styles and themed styles.
 * @returns An object containing merged styles based on the current theme.
 */
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
      const baseStyle = styles[styleName]; // Get the base style
      const themedStyle = styles[`${theme}_${styleName}`]; // Get the themed style for the current theme
      // Merge the base style and themed style
      mergedStyleObject[styleName] = StyleSheet.compose(baseStyle, themedStyle);
    });

    return StyleSheet.create(mergedStyleObject);
  }, [theme, styles]); // Recompute styles only when theme or styles change
}

export default getFunctionTryCatchWrapped(useTheme);
