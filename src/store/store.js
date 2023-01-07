import { configureStore } from "@reduxjs/toolkit";
import {todoPicture} from '../services/todo';

export const store = configureStore({
  reducer: {
    [todoPicture.reducerPath]: todoPicture.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoPicture.middleware),
});
