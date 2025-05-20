import { IBodyGetListProducts } from '@/interfaces';
import { axiosService } from '../axiosService';
import { EProductsEndpoint } from './products.endpoint';

export const productApi = {
  getListProducts: (body: IBodyGetListProducts) => {
    const url = EProductsEndpoint.PRODUCTS;
    return axiosService.post(url, body);
  },
};
