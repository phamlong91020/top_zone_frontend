import { FC, useState } from 'react';
import StyledHome from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import cn from 'classnames';
import {
  ALL_CATEGORY,
  BANNER_ARRAY,
  FLASH_SALE_ARRAY,
  THUMBNAIL_ARRAY,
} from '@/constants/common';
import { Link } from 'react-router-dom';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Home: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="flash-sale">
        <div className="time">
          <div className="banner">
            <img src={images.FLASH_SALE} alt="FLASH_SALE" />
          </div>
          <div className="end-time">
            <div className="title">Kết thúc trong</div>
            <div className="countdown-timer">
              <span className="hour">12</span>
              <span className="minute">08</span>
              <span className="second">40</span>
            </div>
          </div>
          <div
            className={cn('sale-time', {
              'sale-time-active': activeIndex === 0,
            })}
            onClick={() => setActiveIndex(0)}
          >
            <div className="title">Đang diễn ra</div>
            <div className="time">08:00 - 23:59</div>
          </div>
          <div
            className={cn('sale-time', {
              'sale-time-active': activeIndex === 1,
            })}
            onClick={() => setActiveIndex(1)}
          >
            <div className="title">Ngày mai</div>
            <div className="time">08:00 - 23:59</div>
          </div>
        </div>

        <div className="items">
          <Swiper
            centeredSlides={false}
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              1024: {
                slidesPerView: 6,
                slidesPerGroup: 6,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            modules={[Navigation]}
            cssMode={true}
            className="mySwiper"
          >
            {FLASH_SALE_ARRAY.map((items, i) => (
              <SwiperSlide key={i}>
                <Link to="">
                  <div className="product">
                    <img src={items.image} />
                    <h3 className="label">{items.label}</h3>
                    <div className="sale-price">{items.sale_price}₫</div>
                    <div className="old-price">
                      <span className="real-price">{items.price}₫</span>
                      <span className="sale-percent">-32%</span>
                    </div>
                    <div className="items-remaning">
                      <div className="flame-icon">
                        <img src={icons.FLAME_ICON} alt="FLAME_ICON" />
                      </div>
                      <div className="check">Còn 10/10</div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="thumbnail">
        {THUMBNAIL_ARRAY.slice(0, -2).map((item, i) => (
          <Link to={item.route} key={i}>
            <div className="item">
              <img src={item.image} alt="IMAGE" />
              <p>{item.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="category">
        {ALL_CATEGORY.map((item, i) => (
          <div className="all-category" key={i}>
            <Link to="">
              <div className="label">
                <div className="apple-icon">
                  <img src={icons.APPLE_WHITE} alt="APPLE_WHITE" />
                </div>
                <div className="text">{item.category}</div>
              </div>
            </Link>
            <div className="items">
              {item.products.map((item, i) => (
                <Link to="">
                  <div className="product" key={i}>
                    <img src={item.image} />
                    <h3>{item.label}</h3>
                    <div className="box-price">
                      <span className="sale-price">{item.sale_price}₫</span>
                      <span className="real-price">{item.price}₫</span>
                      <span className="discount-percentage">-2%</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="swiper-category">
        {ALL_CATEGORY.map((item, i) => (
          <div className="all-category" key={i}>
            <Link to="">
              <div className="label">
                <div className="apple-icon">
                  <img src={icons.APPLE_WHITE} alt="APPLE_WHITE" />
                </div>
                <div className="text">{item.category}</div>
              </div>
            </Link>
            <div className="items">
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                grabCursor={true}
                modules={[Navigation]}
                cssMode={true}
                className="mySwiper"
              >
                {item.products.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Link to="">
                      <div className="product">
                        <img src={item.image} />
                        <h3>{item.label}</h3>
                        <div className="box-price">
                          <span className="sale-price">{item.sale_price}₫</span>
                          <span className="real-price">{item.price}₫</span>
                          <span className="discount-percentage">-2%</span>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </StyledHome>
  );
};

export default Home;
