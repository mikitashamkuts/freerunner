import axios from 'axios';

import {DEVELOPMENT_ORIGIN, PRODUCTION_ORIGIN} from '@env';
import {isDevelopmentEnvironment} from '@src/constants';

const baseURL = isDevelopmentEnvironment ? DEVELOPMENT_ORIGIN : PRODUCTION_ORIGIN;

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/`,
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export default axiosInstance;
