import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const shoppingCart = (state: RootState) => {
  return state.shoppingCart;
};

export const shoppingCartSelector = createSelector(
  shoppingCart,
  (state) => state.shoppingCart
);
