import { Colors } from '@/constants';
import { ETextCursor } from '@/enums';
import styled from 'styled-components';

export const StyledProductDetails = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  > .images {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }

  > .product-info {
    flex-basis: 50%;
    width: 100%;
    height: 100%;
    > .memories {
      padding: 20px 0;
      > .wrapper-memory-capacity {
        display: flex;
        align-items: center;
        gap: 12px;
        > .memory-capacity {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 70px;
          height: 42px;
          padding: 10px 12px;
          background-color: ${Colors.gray_230};
          border: 1px solid ${Colors.gray_220};
          border-radius: 10px;
          cursor: ${ETextCursor.POINTER};
        }
      }
    }

    > .colors {
      margin-bottom: 16px;
      > .color {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
      }
    }

    > .info-and-price {
      width: 600px;
      background-color: ${Colors.orange_30};
      padding-bottom: 10px;
      border-radius: 12px;
      margin-bottom: 16px;
      > .price {
        padding: 15px 10px;
      }
      > .infomation {
        background: ${Colors.black_70};
        margin: 0 6px;
        border-radius: 4px;
        padding: 10px;
        > .first-info {
          padding: 16px 0 10px;
          border-bottom: 1px solid ${Colors.gray_250};
        }
        > .list-promotions {
          border-bottom: 1px dashed ${Colors.white_10};
          padding: 16px;
          > li {
            &::marker {
              color: ${Colors.white_10};
            }
          }
        }
        > .checkout-info {
          padding: 16px 16px 0;
          margin-bottom: 16px;
          > li {
            &::marker {
              color: ${Colors.white_10};
            }
          }
        }
      }
    }

    > .different-info {
      > .item {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 8px;
      }
    }
  }
`;
