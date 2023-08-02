import { FC } from 'react';
import useHomeHook, { Props, ReceivedProps } from './hook';
import StyledLogin from './styled';

const HomeLayout: FC<Props> = () => {
  return <StyledLogin>Home page</StyledLogin>;
};

const Home: FC<ReceivedProps> = (props) => (
  <HomeLayout {...useHomeHook(props)} />
);

export default Home;
