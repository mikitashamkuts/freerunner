import {useEffect, useState} from 'react';

import {initImageCaching, manageCacheCapacity} from '../../services';

/**
 * Custom hook to handle image caching initialization and management.
 */
export const useImageCaching = () => {
  const [isImageCachingEnabled, setIsImageCachingEnabled] = useState(false);
  const [isImageCachingCapacityManaged, setIsImageCachingCapacityManaged] = useState(false);

  initImageCaching(setIsImageCachingEnabled);

  useEffect(() => {
    isImageCachingEnabled && manageCacheCapacity(setIsImageCachingCapacityManaged);
  }, [isImageCachingEnabled]);

  return {isEnabled: isImageCachingEnabled && isImageCachingCapacityManaged};
};
