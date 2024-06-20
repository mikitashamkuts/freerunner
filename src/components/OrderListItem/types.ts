import {CustomComponentProps, OrderType} from '../../types';

export interface Props extends CustomComponentProps {
  listItem: OrderType;
  onOrderListItemPress: () => void;
}
