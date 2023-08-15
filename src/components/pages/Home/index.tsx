import { FC } from 'react';
import useHomeHook, { Props, ReceivedProps } from './hook';
import StyledLogin from './styled';

import { Link } from 'react-router-dom';

import icons from '@/constants/icons';

const HomeLayout: FC<Props> = () => {
  return (
    <StyledLogin>
      <div className="product-category">
        <ul className="category-list">
          {PRODUCT_LIST.map((item) => (
            <li className="category" key={item.key}>
              <Link to={item.link}>
                <img src={item.icon} alt="MOBILE_ICON" />
              </Link>

              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="carousel-ad"></div>
    </StyledLogin>
  );
};

const Home: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHomeHook(props)} />
);

export default Home;

export const PRODUCT_LIST = [
  {
    key: 0,
    label: 'Điện thoại',
    link: '/phones',
    icon: icons.MOBILE_ICON || '',
  },
  {
    key: 1,
    label: 'Đồng hồ',
    link: '/watches',
    icon: icons.WATCH_ICON || '',
  },
  {
    key: 2,
    label: 'Laptop',
    link: '/laptop',
    icon: icons.LAPTOP_ICON || '',
  },
  {
    key: 3,
    label: 'Iphone ',
    link: '/iphone',
    icon: icons.IPHONE_ICON || '',
  },
  {
    key: 4,
    label: 'Màn hình',
    link: '/screen',
    icon: icons.MONITOR_ICON || '',
  },
  {
    key: 5,
    label: 'Smart TV',
    link: '/smart-tv',
    icon: icons.TV_ICON || '',
  },
  {
    key: 6,
    label: 'Tablet',
    link: '/tablet',
    icon: icons.TABLET_ICON || '',
  },
  {
    key: 7,
    label: 'Âm Thanh',
    link: '/sound',
    icon: icons.HEADPHONE_ICON || '',
  },
  {
    key: 8,
    label: 'Smart Home',
    link: '/smart-home',
    icon: icons.SMART_HOME_ICON || '',
  },
  {
    key: 9,
    label: 'Phụ Kiện',
    link: '/accessories',
    icon: icons.ACCESSORIES_ICON || '',
  },
  {
    key: 10,
    label: 'Đồ chơi CN',
    link: '/',
    icon: icons.GAMEPAD_ICON || '',
  },
  {
    key: 11,
    label: 'Sửa chữa',
    link: '/fix',
    icon: icons.FIX_ICON || '',
  },
  {
    key: 12,
    label: 'Ưu đãi',
    link: '/promotion',
    icon: icons.PROMOTION_ICON || '',
  },
];
