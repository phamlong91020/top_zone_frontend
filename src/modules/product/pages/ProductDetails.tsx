import { FC } from 'react';
import { StyledProductDetails } from '../styled';
import { AppButton, AppImage, AppText } from '@/components';
import {
  Colors,
  LIST_CHECKOUT_INFO,
  LIST_PROMOTIONS_PRODUCT_DETAILS,
} from '@/constants';
import { Box, RotateCcw, Truck } from 'lucide-react';
import { useProductDetailsHooks } from '../hooks';

export const ProductDetails: FC = () => {
  const { finalProduct, handleAddProductIntoShoppingCart } =
    useProductDetailsHooks();

  return (
    <StyledProductDetails className="product-details">
      <div className="images">
        <AppImage
          imageUrl={finalProduct?.imageUrl || ''}
          width={600}
          height={600}
        />
      </div>

      <div className="product-info">
        <AppText
          text={`${finalProduct?.productName} ${finalProduct?.color}`}
          fontSize={32}
          fontWeight={700}
          marginBottom={8}
        />

        <div className="quantity">
          <AppText text="Số lượng:" />
          <AppText text={String(finalProduct?.stock) || '0'} />
        </div>

        <div className="info-and-price">
          <div className="price">
            <AppText text="Online Giá Rẻ Quá" fontSize={16} />
            <AppText
              text={`${finalProduct?.price}đ`}
              fontSize={24}
              fontWeight={600}
            />
          </div>
          <div className="infomation">
            <div className="first-info">
              <AppText
                text="Khuyến mãi trị giá 500.000₫"
                fontSize={15}
                fontWeight={500}
                marginBottom={8}
              />
              <AppText text="Giá và khuyến mãi có thể kết thúc sớm hơn dự kiến" />
            </div>
            <ul className="list-promotions">
              {LIST_PROMOTIONS_PRODUCT_DETAILS.map((item) => (
                <li key={item.id}>
                  <AppText text={item.text} marginBottom={4} />
                </li>
              ))}
            </ul>
            <ul className="checkout-info">
              {LIST_CHECKOUT_INFO.map((item) => (
                <li key={item.id}>
                  <AppText text={item.text} marginBottom={4} />
                </li>
              ))}
            </ul>
            <div className="button-wrapper">
              <AppButton
                height={60}
                text="Thêm vào giỏ hàng"
                backgroundColor={Colors.red_50}
                borderRadius={12}
                fontSize={16}
                fontWeight={600}
                disabled={!finalProduct?.stock}
                onClick={() => handleAddProductIntoShoppingCart(finalProduct)}
              />
            </div>
          </div>
        </div>

        <div className="different-info">
          <div className="item">
            <Box color={Colors.white_10} strokeWidth={1.25} />
            <AppText
              text="Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cáp, Cây lấy sim"
              fontSize={15}
              fontWeight={300}
            />
          </div>
          <div className="item">
            <RotateCcw color={Colors.white_10} strokeWidth={1.25} />
            <AppText
              text="Hư gì đổi nấy 12 tháng"
              fontSize={15}
              fontWeight={300}
            />
          </div>
          <div className="item">
            <Truck color={Colors.white_10} strokeWidth={1.25} />
            <AppText
              text="Giao hàng nhanh toàn quốc"
              fontSize={15}
              fontWeight={300}
            />
          </div>
        </div>
      </div>
    </StyledProductDetails>
  );
};
