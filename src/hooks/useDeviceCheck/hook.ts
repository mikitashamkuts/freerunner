import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

import {isDevelopmentEnvironment} from '@src/constants';
import {getFunctionTryCatchWrapped} from '@src/utils';

/**
 * Custom hook to check the device's approval and verification status.
 */
function useDeviceCheck(): {isDeviceApproved: boolean; isDeviceVerified: boolean} {
  const [isDeviceApproved, setIsDeviceApproved] = useState(true);
  const [isDeviceVerified, setIsDeviceVerified] = useState(false);

  useEffect(() => {
    const checkDevice = async () => {
      // execute here all the verification methods
      const isEmulator = await DeviceInfo.isEmulator();
      if (isEmulator && !isDevelopmentEnvironment) {
        setIsDeviceApproved(false);
      }
      setIsDeviceVerified(true);
    };

    checkDevice();
  }, []);

  return {isDeviceApproved, isDeviceVerified};
}

export default getFunctionTryCatchWrapped(useDeviceCheck);
