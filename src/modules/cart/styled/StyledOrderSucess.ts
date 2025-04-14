import { Colors } from '@/constants';
import styled from 'styled-components';

export const StyledOrderSucess = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.white_70};
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  > .payment-bill {
    width: 600px;
    border-radius: 12px;
    margin: 12px 0;
    box-shadow:
      0 24px 80px rgba(0, 0, 0, 0.07),
      0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
      0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
      0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
      0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
      0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);

    > .header {
      width: 100%;
      background-color: ${Colors.gray_290};
      padding: 12px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    > .order-content {
      background-color: ${Colors.white_10};
      height: calc(100vh - 136px);
      padding: 12px 24px;
      border-radius: 12px;
      > .customer-info {
        > .thank-customer {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
        }

        > .info {
          background-color: ${Colors.gray_290};
          border-radius: 12px;
          padding: 12px 20px;
          margin-bottom: 12px;
          > .id-and-cancel {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            > .id-payment {
              display: flex;
              align-items: center;
              gap: 4px;
            }
          }
          > .total-and-info {
            > li {
              display: flex;
              gap: 4px;
              margin-bottom: 10px;
            }
            > li:nth-last-child(2) {
              > .label {
                flex-basis: 17%;
                display: flex;
              }
            }
          }
        }

        > .receive-item {
          margin-bottom: 12px;
          > .data-items {
            padding: 10px 12px;
            border: 1px solid ${Colors.gray_280};
            border-radius: 12px;
            > .item {
              > .image-and-data {
                display: flex;
                gap: 10px;
                align-items: center;
                > .data {
                  > .item {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin-bottom: 8px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
