import { styled } from 'styled-components';
import icons from '@/constants/icons';

const StyledHome = styled.div`
  .my-swiper {
    .banner-img {
      width: 100%;
      height: auto;
    }
    .swiper-slide {
      cursor: pointer;
    }
    .swiper-button-prev {
      display: none;
      @media screen and (min-width: 1024px) {
        display: block;
        left: 3%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #696969;
        background-image: url(${icons.ARROW_LEFT_WHITE});
        background-position: center;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        border-radius: 50%;
      }
    }
    .swiper-button-next {
      display: none;
      @media screen and (min-width: 1024px) {
        right: 3%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #696969;
        background-image: url(${icons.ARROW_RIGHT_WHITE});
        background-position: center;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        border-radius: 50%;
      }
    }
    .swiper-pagination {
      bottom: 12px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .swiper-pagination-bullet {
        background: #c7c7c7;
        width: 8px;
        height: 8px;
        border: solid 2px #fff;
      }
      .swiper-pagination-bullet-active {
        background: #fff;
        border: solid 2px #2997ff;
      }
    }
  }

  > .flash-sale {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      background: #161616;
      max-width: 1200px;
      border-radius: 12px;
      margin: 20px auto;
      padding: 0 14px;
      > .time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > .banner {
          > img {
            width: 480px;
            height: 100px;
          }
        }
        > .end-time {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          > .title {
            font-size: 16px;
            font-weight: 600;
            font-family: 'Inter';
            color: #fff;
            text-transform: uppercase;
            padding-bottom: 10px;
          }
          > .countdown-timer {
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
              background: #000;
              font-size: 25px;
              border-radius: 8px;
              padding: 9px;
              color: #fff;
              position: relative;
              font-family: 'Open Sans';
            }
            > .hour::after {
              content: ':';
              position: absolute;
              right: -10px;
              top: 11px;
              color: #fff;
              font-size: 20px;
              font-weight: 600;
            }
            > .minute {
              margin: 0 15px;
            }
            > .minute::after {
              content: ':';
              position: absolute;
              right: -10px;
              top: 11px;
              color: #fff;
              font-size: 20px;
              font-weight: 600;
            }
          }
        }
        > .sale-time {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          > .title {
            font-size: 15px;
            color: #fff;
            font-family: 'Open Sans';
            font-weight: 400;
          }
          > .time {
            font-size: 21px;
            color: #fff;
            font-family: 'Open Sans';
            font-weight: 500;
          }
        }
        > .sale-time-active {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
          > .title {
            font-size: 18px;
            color: #fff;
            font-family: 'Open Sans';
            font-weight: 500;
          }
          > .time {
            font-size: 22px;
            color: #fff;
            font-family: 'Open Sans';
            font-weight: 600;
          }
        }
        > .sale-time-active::after {
          content: '';
          position: absolute;
          bottom: -11px;
          width: 40px;
          height: 4px;
          background: #fff;
          margin: 0 auto;
          border-radius: 10px;
        }
      }
    }
  }

  > .thumbnail {
    @media screen and (min-width: 0) and (max-width: 1200px) {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: 30px;
      padding: 30px 0;
    }
    @media screen and (min-width: 0) and (max-width: 425px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(1, minmax(0, 1fr));
    }
    @media screen and (min-width: 426px) and (max-width: 525px) {
      grid-template-columns: repeat(2, minmax(0, 2fr));
      grid-template-rows: repeat(2, minmax(0, 2fr));
    }
    @media screen and (min-width: 526px) and (max-width: 1200px) {
      grid-template-columns: repeat(3, minmax(0, 3fr));
      grid-template-rows: repeat(3, minmax(0, 3fr));
    }
    @media screen and (min-width: 1201px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 1024px;
      max-width: 1200px;
      margin: 0 auto;
    }
    > a {
      > .item {
        width: 180px;
        height: 220px;
        border-radius: 12px;
        background: #323232;
        > img {
          max-width: 180px;
          height: auto;
        }
        > p {
          font-size: 15px;
          color: #fff;
          font-family: 'Inter';
          font-weight: 500;
          text-align: center;
          margin: 0;
        }
      }
    }
    > a:hover {
      box-shadow:
        -4px -4px 8px rgba(134, 134, 134, 0.2),
        4px 4px 8px rgba(28, 28, 28, 0.4);
    }
  }
`;

export default StyledHome;
