import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import {iconColorList, iconList} from '@src/design';

import {whyDidItRenderConfig} from '../../../debug';

import {Props, iconSettings} from '.';

/**
 * Icon component renders an SVG icon based on the provided name and color.
 *
 * @param {IconProps} props - The props for the component.
 * @returns {JSX.Element | null} The Icon component or null if no name is provided.
 */
const Icon: FC<Props> = ({name, color, containerStyle}) => {
  if (!name) {
    return null;
  }

  const iconConfig = iconSettings[iconList[name]];
  const iconHeight = iconConfig.settings.height;
  const iconWidth = iconConfig.settings.width;

  const styles = StyleSheet.create({
    container: {
      overflow: 'hidden',
      height: iconHeight,
      width: iconWidth,
    },
    iconContainer: {
      left: iconConfig.settings.customShift?.left,
      top: iconConfig.settings.customShift?.top,
    },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Svg
        style={styles.iconContainer}
        height={iconHeight}
        width={iconWidth}
        viewBox={iconConfig.settings.viewBox}
        fill="none">
        <Path
          d={iconConfig.paths.d1}
          fill={color ? iconColorList[color] : iconConfig.settings.color}
        />
        <Path
          fillRule="evenodd"
          d={iconConfig.paths.d2}
          fill={color ? iconColorList[color] : iconConfig.settings.color}
        />
      </Svg>
    </View>
  );
};

Icon.whyDidYouRender = whyDidItRenderConfig.UIComponentDebugActive;

export default memo(Icon);
