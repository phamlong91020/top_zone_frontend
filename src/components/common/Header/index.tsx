/* eslint-disable prefer-const */
import { FC } from 'react';
import useHeaderHook, { Props, ReceivedProps } from './hook';
import StyledHeader from './styled';
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Button from 'src/common/Button';
import { BUTTON_THEME } from 'src/common/Button/hook';
import { Input } from 'antd';
import Banner from '../Banner';
import images from '@/constants/images';
import icons from '@/constants/icons';
export interface Menu {
  key: number;
  label: string;
  link: string;
}

export interface Navigation {
  key: number;
  label: string;
}

const { Search } = Input;

const HeaderLayout: FC<Props> = () => {
  // TÌM 2 SỐ TRONG MẢNG CỘNG VÀO NHAU RA SỐ TARGET
  // const arrNum1 = [1, 4, 7, 9, 11];

  // const twoSum = (arrNum: Array<number>, target: number) => {
  //   for (let i = 0; i < arrNum.length; i++) {
  //     console.log('i: ', i);
  //     for (let j = i + 1; j < arrNum.length; j++) {
  //       console.log('j: ', j);
  //       if (arrNum[i] + arrNum[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  // };

  // console.log('result: ', twoSum(arrNum1, 1000));

  // ĐẢO NGƯỢC SỐ ĐẦU CUỐI ĐỀU RA 1 SỐ DUY NHẤT
  // const isPalindrome = (x: number) => {
  //   const reversed = `${x}`.split('').reverse().join('');

  //   if (`${x}` === reversed) return true;

  //   return false;
  // };

  // console.log('reversedNumber: ', isPalindrome(121));

  return (
    <StyledHeader>
      <div className="header-mobile">
        <div className="navigation">
          <MenuOutlined className="navbar" />

          <img src={images.HOANG_HA_LOGO} alt="HOANG_HA_LOGO" />

          <div className="cart">
            <ShoppingCartOutlined
              style={{
                fontSize: '30px',
                color: '#00483d',
                position: 'relative',
              }}
            />

            <span className="quantity">1</span>
          </div>
        </div>

        <div className="search-box">
          <Search placeholder="Hôm nay bạn cần tìm gì?" />
        </div>

        <Banner />
      </div>

      <div className="header-large-screen">
        <div className="top-banner">
          <span className="pulse"></span>

          <p>
            Cơ hôi sở hữu Samsung S20 FE 256GB chỉ với 6.990.000đ - SL có hạn
          </p>

          <Button
            theme={BUTTON_THEME.STYLED}
            text="Xem chi tiết"
            backgroundColor="#dd283b"
            paddingVertical={6}
            paddingHorizontal={10}
            fontSize={13}
          />
        </div>

        <div className="menu">
          <span className="fix-width">
            {MENU_LIST.map((item: Menu) => (
              <Link key={item.key} to={item.link}>
                {item.label}
              </Link>
            ))}
          </span>
        </div>

        <div className="search-bar">
          <div className="container">
            <div className="logo">
              <img src={images.HOANG_HA_LOGO} alt="" />
            </div>

            <div className="search-box">
              <Search placeholder="Hôm nay bạn cần tìm gì?" />
            </div>

            <div className="check-order"></div>

            <div className="cart-order">
              <img src={icons.SHOPPING_CART_ICON} alt="" />
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useHeaderHook(props)} />
);

export default Header;

// const NAVIGATION_LIST: Navigation[] = [
//   {
//     key: 0,
//     label: 'Điện thoại',
//   },
//   {
//     key: 1,
//     label: 'Đồng hồ',
//   },
//   {
//     key: 2,
//     label: 'Laptop',
//   },
//   {
//     key: 3,
//     label: 'Apple',
//   },
//   {
//     key: 4,
//     label: 'Màn Hình',
//   },
//   {
//     key: 5,
//     label: 'Smart TV',
//   },
//   {
//     key: 6,
//     label: 'Tablet',
//   },
//   {
//     key: 7,
//     label: 'Âm Thanh',
//   },
//   {
//     key: 8,
//     label: 'Smart Home',
//   },
//   {
//     key: 9,
//     label: 'Phụ Kiện',
//   },
//   {
//     key: 10,
//     label: 'Đồ chơi CN',
//   },
//   {
//     key: 11,
//     label: 'Máy Trôi',
//   },
//   {
//     key: 12,
//     label: 'Sửa Chữa',
//   },
//   {
//     key: 13,
//     label: 'Sim Thẻ',
//   },
//   {
//     key: 14,
//     label: 'Tin Hot',
//   },
//   {
//     key: 15,
//     label: 'Ưu Đãi',
//   },
// ];

export const MENU_LIST: Menu[] = [
  {
    key: 0,
    label: 'Giới thiệu',
    link: 'https://hoanghamobile.com/gioi-thieu-cong-ty',
  },
  {
    key: 1,
    label: 'Sẩn phẩm đã xem',
    link: '/',
  },
  {
    key: 2,
    label: 'Trung tâm bảo hành',
    link: 'https://hoanghamobile.com/trung-tam-bao-hanh',
  },
  {
    key: 3,
    label: 'Hệ thống 127 siêu thị',
    link: 'https://hoanghamobile.com/he-thong-cua-hang',
  },
  {
    key: 4,
    label: 'Tuyển dụng',
    link: 'https://tuyendung.hoanghamobile.com/',
  },
  {
    key: 5,
    label: 'Tra cứu đơn hàng',
    link: '/',
  },
  {
    key: 6,
    label: 'Đăng nhập',
    link: '/login',
  },
];
