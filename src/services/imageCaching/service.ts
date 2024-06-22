import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs, FileSystem} from 'react-native-file-access';

import {defaultAnimationDuration, imageCacheSizeLimit, isAndroid} from '../../constants';
import {getFunctionTryCatchWrapped as tryCatch} from '../../utils';

/**
 * Initializes the image caching by configuring the CacheManager.
 * It sets up the cache directory based on the platform (Android or iOS),
 * creates the directory if it doesn't exist, and enables image caching.
 *
 * @param {function} setIsImageCachingEnabled - Callback function to set the image caching enabled state.
 */
export const initImageCaching = tryCatch(async function initImageCachingSafe(
  setIsImageCachingEnabled: (isImageCachingEnabled: boolean) => void,
) {
  const {DatabaseDir, LibraryDir} = Dirs;
  const baseDir = `${isAndroid ? DatabaseDir : LibraryDir}/images_cache/`;

  // Check if the directory exists, if not, create it
  const dirExists = await FileSystem.exists(baseDir);
  if (!dirExists) {
    await FileSystem.mkdir(baseDir);
  }

  // Configure the CacheManager with the specified directory and settings
  CacheManager.config = {
    baseDir: baseDir,
    blurRadius: 15,
    cacheLimit: 0,
    sourceAnimationDuration: defaultAnimationDuration,
    thumbnailAnimationDuration: defaultAnimationDuration,
  };

  setIsImageCachingEnabled(true);
});

/**
 * Manages the cache capacity by checking the current cache size.
 * If the cache size exceeds the limit, it clears the cache.
 *
 * @param {function} setIsImageCachingCapacityManaged - Callback function to set the image caching capacity managed state.
 */
export const manageCacheCapacity = tryCatch(async function manageCacheCapacitySafe(
  setIsImageCachingCapacityManaged: (setIsImageCachingCapacityManaged: boolean) => void,
) {
  // Get the current cache size
  const cacheSize = await CacheManager.getCacheSize();

  // If the cache size exceeds the limit, clear the cache
  if (cacheSize >= imageCacheSizeLimit) {
    await CacheManager.clearCache();
  }

  setIsImageCachingCapacityManaged(true);
});
