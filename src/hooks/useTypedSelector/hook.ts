import {useSelector} from 'react-redux';

import {GlobalStateType} from '../../types';

// Use throughout your app instead of plain `useSelector`
const useTypedSelector = useSelector.withTypes<GlobalStateType>();

export default useTypedSelector;
