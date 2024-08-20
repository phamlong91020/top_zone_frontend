import { FC, useState } from 'react';
import useHeaderHook, { Props, ReceivedProps } from './hook';
import StyledHeader from './styled';
import icons from '@/constants/icons';
import { Link } from 'react-router-dom';
import { ROUTE } from '@/constants/route';
import { Drawer } from 'antd';
import images from '@/constants/images';
import { THUMBNAIL_ARRAY } from '@/constants/common';

const HeaderLayout: FC<Props> = ({ navigate }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <StyledHeader>
      <div className="header-mobile">
        <div className="header-above">
          <div className="menu-icon" onClick={showDrawer}>
            <Link to={ROUTE.HOME}>
              <img src={icons.MENU_ICON} alt="MENU_ICON" />
            </Link>
          </div>

          <div className="topzone-logo">
            <img src={icons.TOP_ZONE} alt="TOP_ZONE_LOGO_BLACK" />
          </div>

          <div className="cart">
            <img src={icons.CART_GRADIENT} alt="CART_ICON" />
            <span className="cart-items">1</span>
          </div>
        </div>

        <div className="header-below">
          <div className="search"></div>
        </div>

        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          open={openDrawer}
        >
          <div className="container-user">
            <div className="user-profile">
              <div className="image-profile">
                <img
                  className="image-style"
                  src={images.IMAGE_PROFILE}
                  alt="IMAGE_PROFILE"
                />
              </div>

              <div className="login-content">
                <Link to={ROUTE.LOGIN}>
                  <span className="login-text-above">Đăng nhập</span>
                </Link>
                <span className="login-text-below">
                  Đăng nhập để nhận nhiều ưu đãi
                </span>
              </div>
            </div>
          </div>

          {THUMBNAIL_ARRAY.map((items, i) => (
            <div className="thumbnail-header" key={i}>
              <Link to={items.route}>
                <div className="thumbnail-children">
                  <div className="left-children">
                    <img
                      className="thumbnail-icon"
                      src={items.icon}
                      alt="ICON"
                    />
                    <span className="thumbnail-text">{items.label}</span>
                  </div>

                  <div className="right-children">
                    <img
                      className="right-children-icon"
                      src={icons.ARROW_RIGHT_GRADIENT}
                      alt="ARROW_RIGHT_ICON_GRADIENT"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Drawer>
      </div>

      <div className="header-pc">
        <div className="layout-header-pc">
          <div className="wrapper-banner">
            <div className="top-zone-logo">
              <img src={icons.TOP_ZONE} alt="TOP_ZONE" />
            </div>
            <div className="apple-reseller">
              <img
                src={icons.APPLE_PREMIUM_RESELLER}
                alt="APPLE_PREMIUM_RESELLER"
              />
            </div>
          </div>

          <div className="route-elements">
            {THUMBNAIL_ARRAY.map((items, i) => (
              <Link to={items.route} key={i}>
                <div className="header-elements">
                  <span>{items.label}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="tools">
            <div className="search">
              <img src={icons.SEARCH_WHITE} alt="SEARCH_WHITE" />
            </div>

            <div className="cart" onClick={goToCart}>
              <img src={icons.CART_WHITE} alt="CART_WHITE" />
              <div className="cart-items">1</div>
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
