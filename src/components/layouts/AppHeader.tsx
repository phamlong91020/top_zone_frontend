import { FC, useState } from 'react';
import { icons } from '@/constants';
import { Link, useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';
import { images } from '@/constants';
import { THUMBNAIL_ARRAY } from '@/constants/common';
import styled from 'styled-components';
import { EBreakPoint, ERoute } from '@/enums';

export const AppHeader: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <StyledHeader className="app-header">
      <div className="header-mobile">
        <div className="header-above">
          <div className="menu-icon" onClick={showDrawer}>
            <Link to={ERoute.HOME}>
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
                <Link to={ERoute.LOGIN}>
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

const StyledHeader = styled.div`
  > .header-mobile {
    width: 100%;
    background: #000;
    height: 60px;
    @media screen and (min-width: ${EBreakPoint.LAPTOP}) {
      display: none;
    }

    > .header-above {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      height: 100%;

      > .menu-icon {
        > a {
          > img {
            width: 36px;
            height: 36px;
          }
        }
      }

      > .topzone-logo {
        > img {
          width: 100px;
          height: 30px;
        }
      }

      > .cart {
        position: relative;
        > img {
          width: 26px;
          height: 26px;
        }
        > .cart-items {
          position: absolute;
          top: -2px;
          right: -5px;
          width: 14px;
          height: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            to right,
            rgb(162, 196, 247) 0%,
            rgb(189, 125, 230) 100%
          );
        }
      }
    }
  }

  > .header-pc {
    display: none;
    width: 100%;
    background: #000;
    height: 60px;
    @media screen and (min-width: ${EBreakPoint.LAPTOP}) {
      display: block;
    }

    > .layout-header-pc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 1024px;
      max-width: 1200px;
      margin: auto;
      width: 100%;
      height: 60px;
      > .wrapper-banner {
        display: flex;
        justify-content: space-between;
        > .top-zone-logo {
          padding-right: 12px;
          border-right: solid 1px #2d2d2d;
          > img {
            width: 103px;
            height: 35px;
          }
        }
        > .apple-reseller {
          padding-left: 10px;
          > img {
            width: 32px;
            height: 40px;
          }
        }
      }
      > .route-elements {
        display: flex;
        > a {
          display: flex;
          width: 94px;
          height: 60px;
          align-items: center;
          justify-content: center;
          > .header-elements {
            > span {
              font-size: 14px;
              color: #fff;
              font-weight: 600;
            }
          }
          @keyframes specialFadeIn {
            0% {
              background: transparent;
            }
            100% {
              background: #2d2d2d;
            }
          }
        }
        > a:hover {
          animation-delay: 30ms;
          animation-duration: 400ms;
          animation-fill-mode: both;
          animation-name: specialFadeIn;
        }
      }
      > .tools {
        display: flex;
        gap: 10px;
        align-items: center;
        > div {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #2f3033;
          border-radius: 50%;
          cursor: pointer;
          > img {
            width: 22px;
            height: 22px;
          }
        }
        > div:hover {
          background: #5e5e60;
        }
        > .cart {
          position: relative;
          > .cart-items {
            position: absolute;
            top: 5px;
            right: 4px;
            width: 14px;
            height: 14px;
            display: flex;
            justify-content: center;
            background: #ff361d;
            color: #fff;
            border-radius: 50%;
            font-size: 10px;
          }
        }
      }
    }
  }
`;
