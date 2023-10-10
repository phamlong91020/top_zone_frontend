import { styled } from 'styled-components';

const StyledHeader = styled.div`
  > .header-mobile {
    @media screen and (min-width: 1024px) {
      display: none;
    }

    background-color: #f4f4f4;
    padding: 15px 15px 8px 15px;
    > .navigation {
      display: flex;
      justify-content: space-between;

      > .navbar {
        color: #00483d;
        font-size: 26px;

        &:hover {
          color: #009a82;
          cursor: pointer;
        }
      }

      > img {
        max-width: 55%;
      }

      > .cart {
        position: relative;

        > .quantity {
          content: '';
          position: absolute;
          bottom: 10px;
          right: 0;
          z-index: 1;

          display: flex;
          justify-content: center;
          align-items: center;

          width: 12px;
          height: 12px;
          background-color: #ff6801;

          font-size: 8px;
          color: #fff;
        }
      }
    }

    > .search-box {
      padding-top: 12px;

      .ant-input {
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        padding: 8px 12px;
        box-shadow: 0 4px 6px #ccc;
        border: none;
        font-weight: 700;
        color: #000;
      }

      .ant-input::placeholder {
        font-weight: 700 !important;
        color: #757575;
      }

      .ant-input:hover {
        border: none !important;
        outline: none !important;
        z-index: 0;
        border-inline-end-width: 0;
      }

      .ant-input-group-addon {
        /* border: 1px solid #ccc; */
        box-shadow: 0 4px 6px #ccc;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
      }

      .ant-btn-default {
        height: 40px;
        width: 40px;
        background-image: linear-gradient(#00917a, #00483d);
      }

      .anticon {
        font-size: 20spx;
        color: #fff;
      }
    }
  }

  > .header-large-screen {
    @media screen and (max-width: 1024px) {
      display: none;
    }

    > .top-banner {
      display: flex;
      justify-content: center;
      align-items: center;

      > .pulse {
        position: relative;
        background: #fd475a;
        border-radius: 50%;
        margin: 11px;
        height: 15px;
        width: 15px;
        box-shadow: 0 0 0 0 rgba(233, 156, 176, 1);
        transform: scale(1);
      }

      > .pulse::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #fd475a;
        border-radius: 50%;
        z-index: -1;
        animation: pulse 2s infinite;
      }

      > p {
        font-size: 15px;
        font-weight: 700;
        padding-right: 10px;
      }

      .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
        border-color: #fd475a;
      }
    }

    > .menu {
      background-color: #00483d;

      > .fix-width {
        display: flex;
        gap: 14px;
        padding: 0 12px;
        justify-content: flex-end;
        margin: 0 auto;

        @media screen and (min-width: 1200px) {
          min-width: 1200px;
          width: 1200px;
        }

        a {
          font-size: 13px;
          color: #fff;
          padding: 6px 0;
          text-decoration: none;
        }

        a:hover {
          color: #7fd6cb;
        }
      }
    }

    > .search-bar {
      padding: 20px 0;
      display: flex;

      > .container {
        display: flex;
        justify-content: space-around;
        min-width: 1200px;
        width: 1200px;
        margin: 0 auto;

        > .logo {
          > img {
            width: 256px;
          }
        }

        > .search-box {
        }

        > .check-order {
          width: 110px;
          background: #00483e;
          border-radius: 10px;
          padding: 6px 8px;
          box-shadow: 0 4px 6px #ccc;
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
    }
  }
`;

export default StyledHeader;
