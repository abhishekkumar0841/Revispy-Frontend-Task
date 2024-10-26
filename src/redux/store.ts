import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice'
import categorySlice from './slices/categorySlice'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authSlice,
  category: categorySlice
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["auth", "category"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
