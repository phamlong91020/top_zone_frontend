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
    @media screen and (min-width: 426px) and (max-width: 525px) {
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
        @media screen and (min-width: 0) and (max-width: 600px) {
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-template-rows: repeat(1, minmax(0, 1fr));
        }
        @media screen and (min-width: 601px) and (max-width: 930px) {
          grid-template-columns: repeat(2, minmax(0, 2fr));
          grid-template-rows: repeat(2, minmax(0, 2fr));
        }
        @media screen and (min-width: 931px) and (max-width: 1200px) {
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
        margin-bottom: 80px;
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

  > .tekzone-category {
    display: none;
    @media screen and (min-width: 1200px) {
      display: block;
      > .all-category {
        margin-bottom: 80px;
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
          .swiper-slide {
            width: 380px !important;
            height: 340px !important;
            background: #323232;
            border-radius: 24px;
          }
          .swiper-slide:hover {
            box-shadow:
              -4px -4px 8px rgba(134, 134, 134, 0.2),
              4px 4px 8px rgba(28, 28, 28, 0.4);
          }
          a {
            .product {
              display: flex;
              flex-direction: column;
              > img {
                width: 380px;
                height: 210px;
                border-top-left-radius: 24px;
                border-top-right-radius: 24px;
              }
              > h3 {
                min-height: 100px;
                font-size: 16px;
                color: #fff;
                font-weight: 600;
                line-height: 20px;
                margin: 0;
                padding: 18px 12px;
              }
              > span {
                font-size: 12px;
                line-height: 20px;
                color: #757575;
                font-weight: 600;
                padding: 0 12px;
              }
            }
          }
        }
      }
    }
  }

  > .intro-topzone {
    display: block;
    overflow: hidden;
    background: #000;
    > .video-topzone {
      display: block;
      overflow: hidden;
      width: 100%;
      position: relative;
      > .wrapper-video {
        > video {
          display: block;
          width: 100%;
          height: auto;
          margin: auto;
        }
        > .gradient-bg {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 2.68%,
            rgba(0, 0, 0, 0.72) 53.2%,
            rgba(0, 0, 0, 0.86) 69.35%,
            #000 86.01%
          );
          height: 50%;
          position: absolute;
          bottom: 0;
          width: 100%;
        }
        > img {
          position: absolute;
          margin: auto;
          width: 30%;
          bottom: 3%;
          right: 0;
          left: 0;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    > p {
      display: block;
      overflow: hidden;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      color: #fff;
      text-align: center;
      padding: 12px 0;
      max-width: 675px;
      margin: auto;
    }
    > a {
      display: block;
      overflow: hidden;
      width: 110px;
      background: #0071e3;
      color: #fff;
      border-radius: 100px;
      padding: 10px;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      text-align: center;
      margin: 10px auto 20px;
    }
  }

  > .list-store {
    display: block;
    background: #000;
    padding: 40px 0 30px;
    > .center-page {
      padding: 40px 60px;
      border: 1px solid #757575;
      border-radius: 24px;
      text-align: center;
      max-width: 1180px;
      min-width: 1024px;
      margin: auto;
      > .store-province {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        padding-bottom: 40px;
        border-bottom: 1px solid #757575;
        > span {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        .ant-select-selector {
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 30px 0 20px;
        }
        .ant-select-selection-search {
          > input {
            height: 50px;
          }
        }
        .ant-select-selection-placeholder {
          font-size: 18px;
          font-weight: 500;
          color: #323232;
        }
        .anticon > svg {
          font-size: 14px;
          color: #323232;
        }
      }
      > .store-list {
        display: grid;
        grid-auto-rows: minmax(min-content, max-content);
        grid-template-columns: repeat(2, minmax(0, 1fr));
        text-align: left;
        padding-top: 20px;
        align-items: center;
        > .store-children {
          padding-right: 20px;
          > .store-name {
            > span {
              font-size: 14px;
              color: #fff;
              font-weight: 600;
            }
            > a {
              > span {
                font-size: 14px;
                font-weight: 600;
                color: #2997ff;
              }
              > span:first-child {
                padding-left: 10px;
              }
              > span:last-child {
                padding-left: 6px;
              }
            }
          }
          > .address-store {
            padding-top: 13px;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
          }
          > .payment {
            padding-top: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            > img {
              width: 24px;
            }
            > span {
              font-size: 14px;
              color: #fff;
              font-weight: 600;
              padding-top: 5px;
            }
          }
        }
      }
    }
  }

  > .policy-tablet {
    width: 100%;
    background: #3e3e3f;
    padding: 25px 40px;
    margin-bottom: 50px;
    @media screen and (min-width: 0) and (max-width: 1023px) {
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
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 4fr));
      grid-template-rows: repeat(1, minmax(0, 1fr));
    }
    @media screen and (min-width: 1024px) {
      display: none;
    }
    > .policy-children {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > img {
        width: 50px;
        height: 50px;
      }
      > span {
        font-size: 18px;
        line-height: 22px;
        font-weight: 500;
        color: #fff;
        text-align: center;
        padding-top: 10px;
      }
    }
  }

  > .wrapper-policy {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      width: 100%;
      background: #3e3e3f;
      /* margin-bottom: 50px; */
      > .policy-pc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 40px;
        min-width: 1024px;
        max-width: 1200px;
        margin: auto;
        > .policy-children {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          > img {
            width: 50px;
            height: 50px;
          }
          > span {
            font-size: 18px;
            line-height: 22px;
            font-weight: 500;
            color: #fff;
            text-align: center;
            padding-top: 10px;
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
