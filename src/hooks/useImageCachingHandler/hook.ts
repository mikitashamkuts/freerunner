import {useEffect} from 'react';

import {manageCacheCapacity} from '../../services';

export const useImageCachingHandler = () => {
  useEffect(() => {
    manageCacheCapacity();
  }, []);
};
