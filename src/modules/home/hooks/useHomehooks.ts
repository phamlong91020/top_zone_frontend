import { ERoute } from '@/enums';
import { useGetListProductsMutation } from '@/react-query/Products';
import { listAllProductsSelector, useReduxListAllProducts } from '@/redux';
import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useHomehooks = () => {
  const navigate = useNavigate();

  const { setListAllProducts } = useReduxListAllProducts();

  const listAllProducts = useSelector(listAllProductsSelector, shallowEqual);

  const { mutate: handleGetListAllProducts } = useGetListProductsMutation({
    configs: {
      onSuccess: (res) => {
        setListAllProducts(res?.data?.data);
      },
    },
  });

  useEffect(() => {
    handleGetListAllProducts({
      body: {
        productName: '',
      },
    });
  }, [handleGetListAllProducts]);

  const handleNavigateToProductDetails = (variantId: number) => {
    navigate(ERoute.PRODUCT_DETAILS.replace(':productId', String(variantId)));
  };

  return { listAllProducts, handleNavigateToProductDetails };
};
