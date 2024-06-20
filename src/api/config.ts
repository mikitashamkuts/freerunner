// api/axiosConfig.ts

import axios from 'axios';

import {DEVELOPMENT_ORIGIN, PRODUCTION_ORIGIN} from '@env'; // Import the Sentry DSN (Data Source Name) from environment variables
import {isDevelopmentEnvironment} from '../constants';

// Set the base URL based on the environment
const baseURL = isDevelopmentEnvironment ? DEVELOPMENT_ORIGIN : PRODUCTION_ORIGIN;

export const axiosInstance = axios.create({
  baseURL: `${baseURL}/graphql`, // Common base URL for GraphQL
});
