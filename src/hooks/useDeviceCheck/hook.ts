import {useEffect, useState} from 'react';

import DeviceInfo from 'react-native-device-info';
import {isDevelopmentEnvironment} from '../../constants';

const useDeviceCheck = (): {isDeviceApproved: boolean; isDeviceVerifyed: boolean} => {
  const [isDeviceApproved, setIsDeviceApproved] = useState(true);
  const [isDeviceVerifyed, setIsDeviceVerifyed] = useState(false);

  useEffect(() => {
    const checkDevice = async () => {
      // execute here all the veerification methods
      const isEmulator = await DeviceInfo.isEmulator();
      if (isEmulator && !isDevelopmentEnvironment) {
        setIsDeviceApproved(false);
      }
      setIsDeviceVerifyed(true);
    };

    checkDevice();
  }, []);

  return {isDeviceApproved, isDeviceVerifyed};
};

export default useDeviceCheck;
