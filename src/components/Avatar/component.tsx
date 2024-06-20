import {CachedImage} from '@georstat/react-native-image-cache';
import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';

import {Props, styles} from '.';

const smallAvatarSize = 48;
const bigAvatarSize = 72;
const logoToAvatarProportion = 75; // %

const Avatar: FC<Props> = ({uri, size, containerStyle}) => {
  const contentContainerStyles = StyleSheet.create({
    smallContainer: {
      height: smallAvatarSize,
      width: smallAvatarSize,
    },
    smallContentContainer: {
      height: (smallAvatarSize / 100) * logoToAvatarProportion,
      width: (smallAvatarSize / 100) * logoToAvatarProportion,
    },
    bigContainer: {
      height: bigAvatarSize,
      width: bigAvatarSize,
    },
    bigContentContainer: {
      height: (bigAvatarSize / 100) * logoToAvatarProportion,
      width: (bigAvatarSize / 100) * logoToAvatarProportion,
    },
  });

  return (
    <View style={[styles.container, contentContainerStyles[`${size}Container`], containerStyle]}>
      <CachedImage source={uri} style={contentContainerStyles[`${size}ContentContainer`]} />
    </View>
  );
};

export default memo(Avatar);
