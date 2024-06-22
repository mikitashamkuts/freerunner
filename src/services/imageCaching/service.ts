import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs, FileSystem} from 'react-native-file-access';
import {defaultAnimationDuration, imageCacheSizeLimit, isAndroid} from '../../constants';

export const initImageCaching = async (
  setIsImageCachaingEnabled: (isImageCachaingEnabled: boolean) => void,
) => {
  const {DatabaseDir, LibraryDir} = Dirs;
  const baseDir = `${isAndroid ? DatabaseDir : LibraryDir}/images_cache/`;

  const dirExists = await FileSystem.exists(baseDir);
  if (!dirExists) {
    await FileSystem.mkdir(baseDir);
  }

  // Configure the CacheManager
  CacheManager.config = {
    baseDir: baseDir,
    blurRadius: 15,
    cacheLimit: 0,
    sourceAnimationDuration: defaultAnimationDuration,
    thumbnailAnimationDuration: defaultAnimationDuration,
  };
  setIsImageCachaingEnabled(true);
};

export const manageCacheCapacity = async (
  setIsImageCachingCapacityManaged: (setIsImageCachingCapacityManaged: boolean) => void,
) => {
  const cacheSize = await CacheManager.getCacheSize();
  if (cacheSize >= imageCacheSizeLimit) {
    await CacheManager.clearCache();
  }
  setIsImageCachingCapacityManaged(true);
};
