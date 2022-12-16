import { Header } from '../../shared/components/header/Header';
import { Footer } from '../../shared/components/footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
  <>
    <div className="container">
      <Header />

      <Outlet />

      <Footer />
    </div>
  </>
);
