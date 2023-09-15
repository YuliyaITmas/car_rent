
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carsApi } from "./carsApi";
import { carsReducer } from "./carsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    cars: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
