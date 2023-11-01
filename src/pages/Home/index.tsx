import { FC, useState } from 'react';
import StyledHome from './styled';
import images from '@/constants/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import cn from 'classnames';
import { BANNER_ARRAY, THUMBNAIL_ARRAY } from '@/constants/common';
import { Link } from 'react-router-dom';

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

        <div className="items"></div>
      </div>

      <div className="thumbnail">
        {THUMBNAIL_ARRAY.slice(0, -2).map((item, i) => (
          <Link to={item.route}>
            <div className="item" key={i}>
              <img src={item.image} alt="IMAGE" />
              <p>{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </StyledHome>
  );
};

export default Home;
