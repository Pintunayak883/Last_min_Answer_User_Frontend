import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import navigationReducer from "./navigationSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
