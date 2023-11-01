import { FC } from 'react';
import useMainLayoutHook, { Props, ReceivedProps } from './hook';
import { Outlet } from 'react-router-dom';
import Header from '../../Header';
import { styled } from 'styled-components';

const MainLayoutDesign: FC<Props> = () => {
  return (
    <StyledMainLayout>
      <Header />

      <Outlet />
    </StyledMainLayout>
  );
};

const MainLayout: FC<ReceivedProps> = (props) => (
  <MainLayoutDesign {...useMainLayoutHook(props)} />
);

export default MainLayout;

const StyledMainLayout = styled.div`
  min-height: 100vh;
  background: #3e3e3f;
`;
