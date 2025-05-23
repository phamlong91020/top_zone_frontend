import { FC } from 'react';
import { StyledHome } from '../styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { BANNER_ARRAY } from '@/constants';
import { useHomehooks } from '../hooks';
import { AppImage, AppText } from '@/components';
import { IProductDetails } from '@/interfaces';
import { ETextCursor } from '@/enums';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Home: FC = () => {
  const { listAllProducts, handleNavigateToProductDetails } = useHomehooks();

  return (
    <StyledHome>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        className="my-swiper"
      >
        {BANNER_ARRAY.map((items, i) => (
          <SwiperSlide key={i}>
            <img src={items.image} alt="BANNER_IMAGE" className="banner-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="list-products">
        {listAllProducts.map((item: IProductDetails, index) => (
          <div
            className="product"
            key={index}
            onClick={() => handleNavigateToProductDetails(item.variantId)}
          >
            <div className="image">
              <AppImage
                imageUrl={item.imageUrl}
                width={250}
                height={250}
                cursor={ETextCursor.POINTER}
              />
            </div>
            <AppText
              text={`${item.productName} ${item.color}`}
              marginBottom={30}
            />
            <AppText text={`30.490.000 đ`} fontSize={16} fontWeight={800} />
          </div>
        ))}
      </div>
    </StyledHome>
  );
};
