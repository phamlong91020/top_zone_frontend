import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { styled } from 'styled-components';
import Footer from '../Footer';

const Layout: FC = () => {
  return (
    <StyledMainLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainLayout>
  );
};

export default Layout;

const StyledMainLayout = styled.div`
  min-height: 100vh;
  background: #3e3e3f;
  /* position: relative; */
`;
