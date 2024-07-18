// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useSelector} from 'react-redux';

import {GlobalStateType} from '@src/types';

// Use throughout the app instead of plain `useSelector`
const useTypedSelector = useSelector.withTypes<GlobalStateType>();

export default useTypedSelector;
