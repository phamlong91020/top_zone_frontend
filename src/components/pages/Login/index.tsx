import { FC } from 'react';
import useLoginHook, { Props, ReceivedProps } from './hook';
import StyledLogin from './styled';

const LoginLayout: FC<Props> = () => {
  return <StyledLogin>login Page</StyledLogin>;
};

const Login: FC<ReceivedProps> = (props) => (
  <LoginLayout {...useLoginHook(props)} />
);

export default Login;
