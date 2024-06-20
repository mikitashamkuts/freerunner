import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {isDevelopmentEnvironment} from '../constants';
import rootSaga from './sagas/config';
import {stateStructure} from './slices';

// Configuration for persisting Redux state in AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Combine the reducers to create the root reducer
const rootReducer = combineReducers(stateStructure);

// Enhance the root reducer with persistence capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Saga middleware for handling asynchronous actions
const sagaMiddleware = createSagaMiddleware();
const middlewareList = [sagaMiddleware];

// Initialize Redux Logger for logging actions and state changes
if (isDevelopmentEnvironment) {
  const logger = createLogger({});
  middlewareList.push(logger as any);
}
// Configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewareList), // Add Saga middleware and logger middleware
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Create a persistor to persist the store
export const persistor = persistStore(store);

// Define RootState type to represent the entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type to represent the dispatch function type
export type AppDispatch = typeof store.dispatch;
