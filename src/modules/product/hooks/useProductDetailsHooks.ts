import { listAllProductsSelector, useReduxShoppingCart } from '@/redux';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useProductDetailsHooks = () => {
  const params = useParams();

  const { addProductToCart } = useReduxShoppingCart();

  const variantId = Number(params.productId);

  const listAllProducts = useSelector(listAllProductsSelector, shallowEqual);

  const finalProduct = listAllProducts.find(
    (item) => item?.variantId === variantId
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddProductIntoShoppingCart = (item: any) => {
    if (!item) return;

    const payloadAddToCart = {
      variantId: item.variantId,
      quantity: 1,
    };
    addProductToCart(payloadAddToCart);
  };

  return { finalProduct, handleAddProductIntoShoppingCart };
};
