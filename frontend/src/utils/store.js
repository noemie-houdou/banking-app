import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersLogin from '../features/login';
import userInfos from '../features/userInfos';
import editUsername from '../features/editUsername';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['login'],
};

const rootReducer = combineReducers({
  login: usersLogin,
  profile: userInfos,
  edit: editUsername,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
