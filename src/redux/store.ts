import {configureStore} from '@reduxjs/toolkit';
import {usersApi} from './queries/users';
import {setupListeners} from '@reduxjs/toolkit/query';
import userSlice from './reducers-slices/user-slice';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    usersReducer: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
