import { FC } from 'react';
import useHeaderHook, { Props, ReceivedProps } from './hook';
import StyledHeader from './styled';

const HeaderLayout: FC<Props> = () => {
  return <StyledHeader>Header</StyledHeader>;
};

const Header: FC<ReceivedProps> = (props) => (
  <HeaderLayout {...useHeaderHook(props)} />
);

export default Header;
