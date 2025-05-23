import { IShoppingCartItem } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IStateShoppingCart {
  shoppingCart: IShoppingCartItem[];
}

const initialState: IStateShoppingCart = {
  shoppingCart: [],
};

const { reducer, actions } = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addProductIntoShoppingCart: (
      state,
      action: PayloadAction<IShoppingCartItem>
    ) => {
      const { variantId, quantity } = action.payload;

      const existingItem = state.shoppingCart.find(
        (item) => item.variantId === variantId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.shoppingCart.push({ variantId, quantity });
      }
    },
  },
});

export const { addProductIntoShoppingCart } = actions;

export default reducer;
