import { Colors } from '@/constants';
import styled from 'styled-components';

export const StyledCart = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white_70};
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  > .wrapper-cart {
    width: 600px;
    padding: 10px 0;
    > .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > .product-and-price {
      width: 100%;
      padding: 12px 30px;
      background-color: ${Colors.white_10};
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.07),
        0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
        0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
        0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
        0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
        0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 12px;
      margin-bottom: 4px;
      > .first-layout {
        padding: 30px 0 16px;
        display: flex;
        gap: 20px;
        > .image-and-clear-button {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        > .info {
          flex: 1;
          > .name-and-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          > .list-promotions {
            border-bottom: 1px dashed ${Colors.white_10};
            padding: 16px;
            > li {
              &::marker {
                color: ${Colors.black_80};
              }
            }
          }
          > .color-and-temporary-price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            > .color {
              display: flex;
              gap: 3px;
              align-items: center;
            }
            > .temporary-price {
              display: flex;
              align-items: center;
              gap: 3px;
              > .quantity {
                width: 22px;
                height: 22px;
                background-color: ${Colors.gray_290};
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
              }
            }
          }
        }
      }

      > .second-layout {
        display: flex;
        justify-content: space-between;
        align-self: center;
        > .temperory-and-total-quantity {
          display: flex;
          align-items: center;
          gap: 3px;
        }
      }
    }

    > .customer-info {
      width: 100%;
      padding: 12px 30px;
      background-color: ${Colors.white_10};
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.07),
        0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
        0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
        0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
        0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
        0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 12px;
      margin-bottom: 4px;
      > .wrapper-form {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    > .address-info {
      width: 100%;
      padding: 12px 30px;
      background-color: ${Colors.white_10};
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.07),
        0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
        0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
        0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
        0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
        0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 12px;
      margin-bottom: 4px;
      > .wrapper-address {
        padding: 10px;
        border-radius: 12px;
        background-color: ${Colors.gray_290};
        > .item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }
      }
    }

    > .total-amount {
      width: 100%;
      padding: 12px 30px;
      background-color: ${Colors.white_10};
      box-shadow:
        0 24px 80px rgba(0, 0, 0, 0.07),
        0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
        0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
        0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
        0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
        0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 12px;
      > .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
    }
  }
`;
