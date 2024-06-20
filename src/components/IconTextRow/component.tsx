import React, {FC, memo} from 'react';
import {View} from 'react-native';

import {Icon, Text} from '../../components';
import {overflowSymbolLimit} from '../../constants';
import {getSymbolLimitedText} from '../../utils';

import {Props, styles} from '.';

const IconTextRow: FC<Props> = ({renderList, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {renderList?.map(({icon, text}: any) => {
        return (
          <View style={styles.itemContainer} key={icon}>
            <Icon name={icon} color="Default" containerStyle={styles.itemIconContainer} />
            <Text
              numberOfLines={1}
              text={getSymbolLimitedText(text.toString(), overflowSymbolLimit)}
              fontWeight="Regular"
              fontSize="Small"
            />
          </View>
        );
      })}
    </View>
  );
};

export default memo(IconTextRow);
