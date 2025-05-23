/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from 'react-redux';
import { setListAllProductsToRedux } from './slice';
import { IProductDetails } from '@/interfaces';

export const useReduxListAllProducts = () => {
  const dispatch = useDispatch();

  const setListAllProducts = (payload: IProductDetails[]) => {
    dispatch(setListAllProductsToRedux(payload));
  };

  return { setListAllProducts };
};
