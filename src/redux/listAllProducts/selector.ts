import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const listAllProducts = (state: RootState) => {
  return state.listAllProducts;
};

export const listAllProductsSelector = createSelector(
  listAllProducts,
  (state) => state.listAllProducts
);
