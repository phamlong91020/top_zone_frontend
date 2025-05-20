import { useMutation } from '@tanstack/react-query';
import { productApi } from '@/api';
import { IBodyGetListProducts } from '@/interfaces';
import { IAppMutationOptions } from '@/types';

interface IVariablesType {
  body: IBodyGetListProducts;
}

interface IMutationParams {
  configs?: IAppMutationOptions<IVariablesType>;
}

export const useGetListProductsMutation = (mutationParams: IMutationParams) => {
  const { configs } = { ...mutationParams };

  return useMutation({
    mutationFn: (values: IVariablesType) =>
      productApi.getListProducts(values.body),
    ...configs,
  });
};
