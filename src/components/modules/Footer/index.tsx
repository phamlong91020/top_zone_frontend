import { FC } from 'react';
import StyledFooter from './styled';
import icons from '@/constants/icons';

export const Footer: FC = () => {
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
