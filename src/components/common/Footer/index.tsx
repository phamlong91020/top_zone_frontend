import { FC } from 'react';
import useFooterHook, { Props, ReceivedProps } from './hook';
import StyledFooter from './styled';

const FooterLayout: FC<Props> = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

const Footer: FC<ReceivedProps> = (props) => (
  <FooterLayout {...useFooterHook(props)} />
);

export default Footer;
