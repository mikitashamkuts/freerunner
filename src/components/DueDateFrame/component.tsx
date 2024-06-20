import React, {FC, memo} from 'react';
import {View, StyleSheet} from 'react-native';

import {textColorList} from '../../design';
import {Text} from '../../components';

import {Props, styles} from '.';

const bigDueDateContainerSize = 155;
const smallDueDateContainerSize = 96;

const DueDateFrame: FC<Props> = ({size, type, date, month}) => {
  const isSmallDueDateContainer = size === 'small';
  const dueDateContainerPadding = isSmallDueDateContainer ? 2 : 5.5;
  const isPendindType = type === 'pending';
  const isDelayedType = type === 'delayed';
  const textColor = isDelayedType ? 'Accent' : 'Default';

  const contentContainerStyles = StyleSheet.create({
    smallContainer: {
      height: smallDueDateContainerSize,
      width: smallDueDateContainerSize,
    },
    bigContainer: {
      height: bigDueDateContainerSize,
      width: bigDueDateContainerSize,
    },
    pendingContentContainer: {
      borderWidth: 4,
      borderColor: textColorList.Default,
      padding: dueDateContainerPadding,
    },
    delayedContentContainer: {
      borderWidth: 4,
      borderColor: textColorList.Accent,
      padding: dueDateContainerPadding,
    },
  });

  return (
    <View
      style={[
        styles.container,
        contentContainerStyles[`${size}Container`],
        contentContainerStyles[`${type}ContentContainer`],
      ]}>
      <View style={[styles.dateContentContainer, isPendindType && styles.pendingContentContainer]}>
        <Text
          numberOfLines={1}
          fontWeight="Regular"
          fontSize="Big"
          text={date}
          containerStyle={styles.dateTextContainer}
          color={textColor}
        />
        <Text
          numberOfLines={1}
          fontWeight="SemiBold"
          fontSize="Small"
          text={month}
          color={textColor}
        />
      </View>
    </View>
  );
};

export default memo(DueDateFrame);
