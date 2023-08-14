import { FC } from 'react';
import useHomeHook, { Props, ReceivedProps } from './hook';
import StyledLogin from './styled';

import { Link } from 'react-router-dom';

import MOBILE_ICON from '@assets/icons/mobile_icon.svg';
import WATCH_ICON from '@assets/icons/watch_icon.svg';

const HomeLayout: FC<Props> = () => {
  return (
    <StyledLogin>
      <div className="product-category">
        <ul className="category-list">
          {PRODUCT_LIST.map((item) => (
            <li className="category" key={item.key}>
              <Link to={item.link}>
                <img src={WATCH_ICON} alt="MOBILE_ICON" />
              </Link>

              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
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
    icon: { MOBILE_ICON } || '',
  },
  {
    key: 1,
    label: 'Đồng hồ',
    link: '/watches',
    icon: { WATCH_ICON } || '',
  },
  {
    key: 2,
    label: 'Laptop',
    link: '/latop',
    icon: '',
  },
  {
    key: 3,
    label: 'Apple ',
    link: '/apple',
    icon: '',
  },
  {
    key: 4,
    label: 'Màn hình',
    link: '/screen',
    icon: '',
  },
  {
    key: 5,
    label: 'Smart TV',
    link: '/smart-tv',
    icon: '',
  },
  {
    key: 6,
    label: 'Tablet',
    link: '/tablet',
    icon: '',
  },
  {
    key: 7,
    label: 'Âm Thanh',
    link: '/sound',
    icon: '',
  },
  {
    key: 8,
    label: 'Smart Home',
    link: '/smart-home',
    icon: '',
  },
  {
    key: 9,
    label: 'Phụ Kiện',
    link: '/accessories',
    icon: '',
  },
  {
    key: 10,
    label: 'Đồ chơi CN',
    link: '/',
    icon: '',
  },
  {
    key: 11,
    label: 'Máy trôi',
    link: '/phone-used',
    icon: '',
  },
  {
    key: 12,
    label: 'Sửa chữa',
    link: '/fix',
    icon: '',
  },
  {
    key: 13,
    label: 'Sim thẻ',
    link: 'sim',
    icon: '',
  },
  {
    key: 14,
    label: 'Tin Hot',
    link: 'news',
    icon: '',
  },
  {
    key: 15,
    label: 'Ưu đãi',
    link: '/promotion',
    icon: '',
  },
];
