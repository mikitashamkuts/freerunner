import React, {FC, memo, useMemo} from 'react';
import {StatusBar as RNStatusBar, useColorScheme} from 'react-native';

import {whyDidItRenderConfig} from '../../../debug';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

import {Props} from '.';

/**
 * StatusBar component for setting the style and behavior of the status bar.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The StatusBar component.
 */
const StatusBar: FC<Props> = ({customStyle}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const barStyle = useMemo(() => {
    return tryCatch(function getBarStyle() {
      const defaultStatusBarStyle = isDarkMode ? 'light' : 'dark';
      return `${customStyle || defaultStatusBarStyle}-content`;
    })();
  }, [customStyle, isDarkMode]);

  return (
    <RNStatusBar
      translucent={true}
      animated={true}
      barStyle={barStyle}
      backgroundColor="transparent"
    />
  );
};

StatusBar.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(StatusBar);
