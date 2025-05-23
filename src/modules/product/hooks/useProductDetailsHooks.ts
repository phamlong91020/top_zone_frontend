import { IShoppingCartItem } from '@/interfaces';
import {
  listAllProductsSelector,
  shoppingCartSelector,
  useReduxShoppingCart,
} from '@/redux';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useProductDetailsHooks = () => {
  const params = useParams();
  const variantId = Number(params.productId);

  const { addProductToCart } = useReduxShoppingCart();

  const shoppingCart = useSelector(shoppingCartSelector, shallowEqual);

  const listAllProducts = useSelector(listAllProductsSelector, shallowEqual);

  const finalProduct = listAllProducts.find(
    (item) => item?.variantId === variantId
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddProductIntoShoppingCart = (item: any) => {
    if (!finalProduct) return;

    const currentProductInShoppingCart = shoppingCart.find(
      (item: IShoppingCartItem) => {
        return item?.variantId === variantId;
      }
    );

    if (
      currentProductInShoppingCart &&
      currentProductInShoppingCart?.quantity + 1 > finalProduct?.stock
    ) {
      toast.warn('Sản phẩm đã đạt đến giới hạn về số lượng');
      return;
    }

    const payloadAddToCart = {
      variantId: item.variantId,
      quantity: 1,
    };
    addProductToCart(payloadAddToCart);
    toast.success('Sản phẩm đã được thêm vào giỏ hàng');
  };

  return { finalProduct, handleAddProductIntoShoppingCart };
};
