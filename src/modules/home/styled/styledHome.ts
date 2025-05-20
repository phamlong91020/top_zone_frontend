import { styled } from 'styled-components';
import { Colors, icons } from '@/constants';
import { EBreakPoint } from '@/enums';

export const StyledHome = styled.div`
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

  > .list-products {
    display: flex;
    gap: 40px;
    align-items: center;
    > .product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 280px;
      height: 428px;
      background-color: ${Colors.black_80};
      border-radius: 20px;
      cursor: pointer;
      > .image {
        margin-bottom: 15px;
      }
    }
  }

  .swiper-button-prev {
    display: none;
    @media screen and (min-width: ${EBreakPoint.LAPTOP}) {
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
    @media screen and (min-width: ${EBreakPoint.LAPTOP}) {
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
