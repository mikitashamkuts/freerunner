import axios from 'axios';

import {DEVELOPMENT_ORIGIN, PRODUCTION_ORIGIN} from '@env';
import {isDevelopmentEnvironment} from '../constants';

const baseURL = isDevelopmentEnvironment ? DEVELOPMENT_ORIGIN : PRODUCTION_ORIGIN;

export const axiosInstance = axios.create({
  baseURL: `${baseURL}/api`,
});
