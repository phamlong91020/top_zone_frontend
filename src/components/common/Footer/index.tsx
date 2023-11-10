import { FC } from 'react';
import useFooterHook, { Props, ReceivedProps } from './hook';
import StyledFooter from './styled';
import icons from '@/constants/icons';

const FooterLayout: FC<Props> = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="wrapper-banner">
          <div className="topzone-logo">
            <img src={icons.TOP_ZONE} alt="TOP_ZONE" />
          </div>
          <div className="apple-reseller">
            <img
              src={icons.APPLE_PREMIUM_RESELLER}
              alt="APPLE_PREMIUM_RESELLER"
            />
          </div>
        </div>

        <div className="footer-content">
          <div className="hotline"></div>

          <div className="stores"></div>

          <div className="support"></div>

          <div className="topzone-brand"></div>

          <div className="warranty"></div>
        </div>
      </div>
    </StyledFooter>
  );
};

const Footer: FC<ReceivedProps> = (props) => (
  <FooterLayout {...useFooterHook(props)} />
);

export default Footer;
