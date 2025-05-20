import { IProductDetails } from '@/interfaces';
import { useGetListProductsMutation } from '@/react-query/Products';
import { useEffect, useState } from 'react';

export const useHomehooks = () => {
  const [listAllProducts, setListAllProducts] = useState<IProductDetails[]>([]);

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

  return { listAllProducts };
};
