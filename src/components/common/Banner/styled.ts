import { styled } from 'styled-components';

const StyledBanner = styled.div`
  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 8px;

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

    .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      border-color: #fd475a;
    }

    > p {
      text-align: center;
      font-size: 15px;
      font-weight: 700;

      @media screen and (min-width: 675px) {
        padding-right: 10px;
      }
    }
  }
`;

export default StyledBanner;
