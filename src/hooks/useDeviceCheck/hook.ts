import {useEffect, useState} from 'react';
import DeviceInfo from 'react-native-device-info';

import {isDevelopmentEnvironment} from '../../constants';
import {getFunctionTryCatchWrapped} from '../../utils';

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
