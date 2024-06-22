import {useEffect, useState} from 'react';

import {initImageCaching, manageCacheCapacity} from '../../services';

export const useImageCaching = () => {
  const [isIamgeCachingEnabled, setIsEmageCachingEnabled] = useState(false);
  const [isImageCachingCapacityManaged, setIsImageCachingCapacityManaged] = useState(false);

  initImageCaching(setIsEmageCachingEnabled);

  useEffect(() => {
    isIamgeCachingEnabled && manageCacheCapacity(setIsImageCachingCapacityManaged);
  }, [isIamgeCachingEnabled]);

  return {isEnabled: isIamgeCachingEnabled && isImageCachingCapacityManaged};
};
