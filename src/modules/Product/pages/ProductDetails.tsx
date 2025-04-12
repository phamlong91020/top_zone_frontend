import { FC } from 'react';
import { StyledProductDetails } from '../styled';
import { AppButton, AppImage, AppText, CircleColor } from '@/components';
import {
  Colors,
  LIST_CHECKOUT_INFO,
  LIST_PROMOTIONS_PRODUCT_DETAILS,
} from '@/constants';
import { Box, RotateCcw, Truck } from 'lucide-react';

export const ProductDetails: FC = () => {
  return (
    <StyledProductDetails className="product-details">
      <div className="images">
        <AppImage
          imageUrl="https://cdnv2.tgdd.vn/mwg-static//42/329143/s16/iphone-16-pro-natural-titan-1-638621710014984362-650x650.jpg"
          width={600}
          height={600}
        />
      </div>

      <div className="product-info">
        <AppText text="iPhone 16 Pro 128GB" fontSize={32} fontWeight={700} />

        <div className="memories">
          <AppText text="Dung lượng" marginBottom={10} />
          <div className="wrapper-memory-capacity">
            <div className="memory-capacity">
              <AppText text="128GB" />
            </div>
            <div className="memory-capacity">
              <AppText text="256GB" />
            </div>
            <div className="memory-capacity">
              <AppText text="512GB" />
            </div>
            <div className="memory-capacity">
              <AppText text="1TB" />
            </div>
          </div>
        </div>

        <div className="colors">
          <div className="color">
            <AppText text="Màu: " marginRight={4} />
            <AppText text="Titan tự nhiên" />
          </div>
          <div className="list-colors">
            <CircleColor backgroundColor={Colors.gray_240} />
          </div>
        </div>

        <div className="info-and-price">
          <div className="price">
            <AppText text="Online Giá Rẻ Quá" fontSize={16} />
            <AppText text="25.390.000₫" fontSize={24} fontWeight={600} />
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
                text="MUA NGAY GIÁ 25.390.000₫"
                backgroundColor={Colors.red_50}
                borderRadius={12}
                fontSize={16}
                fontWeight={600}
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
              text="Hư gì đổi nấy 12 tháng"
              fontSize={15}
              fontWeight={300}
            />
          </div>
        </div>
      </div>
    </StyledProductDetails>
  );
};
