import { useDispatch } from 'react-redux';
import { addProductIntoShoppingCart } from './slice';
import { IShoppingCartItem } from '@/interfaces';

export const useReduxShoppingCart = () => {
  const dispatch = useDispatch();

  const addProductToCart = (payload: IShoppingCartItem) => {
    dispatch(addProductIntoShoppingCart(payload));
  };

  return { addProductToCart };
};
