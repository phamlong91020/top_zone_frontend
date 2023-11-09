import { styled } from 'styled-components';

const StyledHeader = styled.div`
  > .header-mobile {
    width: 100%;
    background: #000;
    height: 60px;
    @media screen and (min-width: 1024px) {
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
    @media screen and (min-width: 1024px) {
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

export default StyledHeader;
