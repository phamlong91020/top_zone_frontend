import { FC } from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';

export const AppLayout: FC = () => {
  return (
    <StyledAppLayout>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  min-height: 100vh;
  background: #3e3e3f;
`;
