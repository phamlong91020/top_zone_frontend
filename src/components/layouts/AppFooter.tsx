import { FC } from 'react';
import { icons } from '@/constants';
import styled from 'styled-components';

export const AppFooter: FC = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="hotline">
          <span>Tổng đài</span>
          <span>Mua hàng: 1900.9696.42(7:30 - 22:00)</span>
          <span>CSKH: 1900.9868.43(8:00 - 21:30)</span>
          <div>
            <span></span>
            <div>
              <img src={icons.FACEBOOK_ICON} alt="FACEBOOK_ICON" />
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #000;
  > .footer {
    display: flex;
    justify-content: space-between;
    > .hotline {
      display: flex;
      flex-direction: column;
      > span {
        color: #fff;
        font-size: 15px;
        line-height: 20px;
        padding: 0 0 8px;
        font-weight: 500;
      }
    }
  }
`;
