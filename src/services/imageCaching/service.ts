import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs} from 'react-native-file-access';

import {defaultAnimationDuration, imageCacheSizeLimit} from '../../constants';

export const initImageCaching = () => {
  CacheManager.config = {
    baseDir: `${Dirs.CacheDir}/images_cache/`,
    blurRadius: 15,
    cacheLimit: 0,
    sourceAnimationDuration: defaultAnimationDuration,
    thumbnailAnimationDuration: defaultAnimationDuration,
  };
};

export const manageCacheCapacity = async () => {
  const cacheSize = await CacheManager.getCacheSize();
  if (cacheSize >= imageCacheSizeLimit) {
    await CacheManager.clearCache();
  }
};
