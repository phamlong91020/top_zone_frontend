import { FC } from 'react';
import useMainLayoutHook, { Props, ReceivedProps } from './hook';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';

const MainLayoutDesign: FC<Props> = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

const MainLayout: FC<ReceivedProps> = (props) => (
  <MainLayoutDesign {...useMainLayoutHook(props)} />
);

export default MainLayout;
