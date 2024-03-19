import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
