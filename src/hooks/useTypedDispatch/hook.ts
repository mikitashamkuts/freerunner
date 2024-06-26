// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import {useDispatch} from 'react-redux';

import {AppDispatch} from '../../store';

// Use throughout the app instead of plain `useDispatch`
const useTypedDispatch = useDispatch.withTypes<AppDispatch>();

export default useTypedDispatch;
