import { FC } from 'react';
import useBannerHook, { Props, ReceivedProps } from './hook';
import StyledBanner from './styled';
import { BUTTON_THEME } from 'src/common/Button/hook';
import Button from 'src/common/Button';

const BannerLayout: FC<Props> = () => {
  return (
    <StyledBanner>
      <div className="banner">
        <span className="pulse"></span>

        <p>Cơ hôi sở hữu Samsung S20 FE 256GB chỉ với 6.990.000đ - SL có hạn</p>

        <Button
          theme={BUTTON_THEME.STYLED}
          text="Xem chi tiết"
          backgroundColor="#dd283b"
          paddingVertical={6}
          paddingHorizontal={10}
          fontSize={13}
        />
      </div>
    </StyledBanner>
  );
};

const Banner: FC<ReceivedProps> = (props) => (
  <BannerLayout {...useBannerHook(props)} />
);

export default Banner;
