import { styled } from 'styled-components';
import icons from '@/constants/icons';

const StyledHome = styled.div`
  .my-swiper {
    .banner-img {
      width: 100%;
      height: auto;
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
      padding: 0 14px 18px 18px;
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
            font-weight: 800;
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
              font-weight: 600;
              border-radius: 8px;
              padding: 9px;
              color: #fff;
              position: relative;
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
            padding-bottom: 8px;
            font-size: 15px;
            color: #fff;
            font-weight: 500;
          }
          > .time {
            font-size: 21px;
            color: #fff;
            font-weight: 600;
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
            font-weight: 600;
          }
          > .time {
            font-size: 22px;
            color: #fff;
            font-weight: 700;
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
      > .items {
        a {
          .product {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 170px;
            height: 332px;
            background: #323232;
            padding: 10px 8px;
            > img {
              width: 170px;
              height: 170px;
            }
            > h3 {
              width: 140px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
              color: #fff;
              font-weight: 600;
              padding-top: 20px;
              text-align: center;
              margin: 0;
            }
            > .sale-price {
              font-size: 18px;
              color: #ff9921;
              font-weight: 700;
              padding-top: 18px;
              letter-spacing: 0.5px;
            }
            > .old-price {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 6px;
              padding-top: 12px;
              > .real-price {
                font-size: 13px;
                font-weight: 500;
                color: #999;
                text-decoration: line-through;
              }
              > .sale-percent {
                width: 40px;
                height: 28px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #f70000;
                color: #fff;
                font-size: 15px;
                font-weight: 700;
                border-radius: 4px;
              }
            }
            > .items-remaning {
              width: 160px;
              height: 17px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: linear-gradient(
                64.85deg,
                #fcb500 23.67%,
                #ffd41d 106.12%
              );
              border-radius: 10px;
              margin-top: 12px;
              position: relative;
              > .flame-icon {
                position: absolute;
                left: -1px;
                top: -9px;
                > img {
                  width: 21px;
                  height: 26px;
                }
              }
              > .check {
                font-size: 11px;
                font-weight: 600;
                color: #000;
                line-height: 17px;
              }
            }
          }
        }
      }
    }
  }

  > .thumbnail {
    margin: 50px auto 40px;
    @media screen and (min-width: 0) and (max-width: 1200px) {
      display: grid;
      justify-items: center;
      align-items: center;
      gap: 30px;
    }
    @media screen and (min-width: 0) and (max-width: 425px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-template-rows: repeat(1, minmax(0, 1fr));
    }
    @media screen and (min-width: 426px) and (max-width: 1200px) {
      grid-template-columns: repeat(2, minmax(0, 2fr));
      grid-template-rows: repeat(2, minmax(0, 2fr));
    }
    @media screen and (min-width: 526px) and (max-width: 1200px) {
      grid-template-columns: repeat(3, minmax(0, 3fr));
      grid-template-rows: repeat(2, minmax(0, 2fr));
    }
    @media screen and (min-width: 1201px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-width: 1024px;
      max-width: 1200px;
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
          font-weight: 600;
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

  > .category {
    @media screen and (min-width: 1201px) {
      display: none;
    }
    > .all-category {
      > a {
        > .label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          line-height: 28px;
          padding: 50px 0;
          > .apple-icon {
            > img {
              width: 26px;
              height: 32px;
            }
          }
          > .text {
            font-size: 36px;
            color: #fff;
            font-weight: 600;
          }
        }
      }
      > .items {
        padding: 20px 30px;
        @media screen and (min-width: 0) and (max-width: 1200px) {
          display: grid;
          justify-items: center;
          align-items: center;
          gap: 30px;
        }
        @media screen and (min-width: 0) and (max-width: 525px) {
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-template-rows: repeat(1, minmax(0, 1fr));
        }
        @media screen and (min-width: 525px) and (max-width: 768px) {
          grid-template-columns: repeat(2, minmax(0, 2fr));
          grid-template-rows: repeat(2, minmax(0, 2fr));
        }
        @media screen and (min-width: 768px) and (max-width: 1200px) {
          grid-template-columns: repeat(3, minmax(0, 3fr));
          grid-template-rows: repeat(3, minmax(0, 3fr));
        }
        > a {
          > .product {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 280px;
            height: 420px;
            background: #323232;
            border-radius: 24px;
            > img {
              width: 250px;
              height: 250px;
            }
            > h3 {
              width: 160px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 15px;
              color: #fff;
              font-weight: 600;
              padding-top: 20px;
              text-align: center;
            }
            > .box-price {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
              color: #fff;
              > .sale-price {
                font-size: 18px;
                font-weight: 700;
              }
              > .real-price {
                font-weight: 500;
                text-decoration-line: line-through;
              }
              > .discount-percentage {
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }

  > .swiper-category {
    display: none;
    @media screen and (min-width: 1200px) {
      display: block;
      > .all-category {
        > a {
          > .label {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
            line-height: 28px;
            padding: 100px 0 30px 0;
            > .apple-icon {
              > img {
                width: 26px;
                height: 32px;
              }
            }
            > .text {
              font-size: 36px;
              color: #fff;
              font-weight: 600;
            }
          }
        }
        > .items {
          display: flex;
          justify-content: center;
          .swiper {
            max-width: 1200px;
          }
          a {
            .product {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: 280px;
              height: 420px;
              background: #323232;
              border-radius: 24px;
              > img {
                width: 250px;
                height: 250px;
              }
              > h3 {
                width: 140px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 15px;
                color: #fff;
                font-weight: 600;
                padding-top: 20px;
                text-align: center;
              }
              .box-price {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
                color: #fff;
                .sale-price {
                  font-size: 18px;
                  font-weight: 700;
                }
                .real-price {
                  font-weight: 500;
                  text-decoration-line: line-through;
                }
                .discount-percentage {
                  font-weight: 500;
                }
              }
            }
            .product:hover {
              box-shadow:
                -4px -4px 8px rgba(134, 134, 134, 0.2),
                4px 4px 8px rgba(28, 28, 28, 0.4);
            }
          }
        }
      }
    }
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
      background-color: #29292a;
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
      background-color: #29292a;
      background-image: url(${icons.ARROW_RIGHT_WHITE});
      background-position: center;
      background-size: 20px 20px;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
  }
`;

export default StyledHome;
