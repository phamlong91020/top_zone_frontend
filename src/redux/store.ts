import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import listAllProducts from './listAllProducts/slice';
import shoppingCart from './shoppingCart/slice';
import localStorage from 'redux-persist/lib/storage';

const localPersistConfig = (key: string) => ({
  key,
  storage: localStorage,
});

const appReducer = combineReducers({
  // Local storage
  listAllProducts: persistReducer(
    localPersistConfig('listAllProducts'),
    listAllProducts
  ),

  shoppingCart: persistReducer(
    localPersistConfig('shoppingCart'),
    shoppingCart
  ),
});

export type RootState = ReturnType<typeof appReducer>;

const reducer = (state: RootState | undefined, action: Action) => {
  return appReducer(state, action);
};

const persistedReducer = reducer;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
