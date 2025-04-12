import { FC } from 'react';
import { Colors, icons } from '@/constants';
import styled from 'styled-components';
import { AppImage } from '../common/image';

export const AppFooter: FC = () => {
  return (
    <StyledFooter className="footer">
      <div className="logo">
        <div className="first-logo">
          <AppImage imageUrl={icons.TOP_ZONE} width={103} height={35} />
        </div>
        <div className="second-logo">
          <AppImage
            imageUrl={icons.WHITE_PREMIUM_RESELLER}
            width={32}
            height={40}
          />
        </div>
      </div>

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
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > .logo {
    display: flex;
    > .first-logo {
      padding-right: 10px;
      border-right: 1px solid ${Colors.gray_10};
    }
    > .second-logo {
      padding-left: 10px;
      border-left: 1px solid ${Colors.gray_10};
    }
  }

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
`;
