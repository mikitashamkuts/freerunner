import {CustomComponentProps} from '@src/types';
import {AgendaScreenConfigType} from '../../navigation/HomeStack/AgendaScreen/screen';

export interface Props extends CustomComponentProps {
  config: AgendaScreenConfigType;
}
