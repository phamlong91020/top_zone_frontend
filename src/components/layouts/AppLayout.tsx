import { FC } from 'react';
import { styled } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

export const AppLayout: FC = () => {
  return (
    <StyledAppLayout>
      <AppHeader />
      <Outlet />
      {/* <AppFooter /> */}
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  height: 100%;
  width: 100%;
`;
