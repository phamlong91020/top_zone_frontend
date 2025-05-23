import { IProductDetails } from '@/interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IStateListAllProducts {
  listAllProducts: IProductDetails[];
}

const initialState: IStateListAllProducts = {
  listAllProducts: [],
};

const { reducer, actions } = createSlice({
  name: 'listAllProducts',
  initialState,
  reducers: {
    setListAllProductsToRedux: (
      state,
      action: PayloadAction<IProductDetails[]>
    ) => {
      state.listAllProducts = action.payload;
    },
  },
});

export const { setListAllProductsToRedux } = actions;

export default reducer;
