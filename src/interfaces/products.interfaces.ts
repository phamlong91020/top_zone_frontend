export interface IBodyGetListProducts {
  productName?: string;
}

export interface IProductDetails {
  productId: number;
  variantId: number;
  productName: string;
  description: string;
  imageUrl: string;
  price: string;
  stock: number;
  categoryName: string;
  color: string;
}
