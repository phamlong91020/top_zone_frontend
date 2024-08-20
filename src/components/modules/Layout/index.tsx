import { FC } from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { Footer } from '../Footer';

export const Layout: FC = () => {
  return (
    <StyledMainLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainLayout>
  );
};

const StyledMainLayout = styled.div`
  min-height: 100vh;
  background: #3e3e3f;
`;
