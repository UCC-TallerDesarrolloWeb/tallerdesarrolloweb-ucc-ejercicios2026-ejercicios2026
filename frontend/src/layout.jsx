import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './styles/Layout.scss';

const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="layout">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        {/* Acá se renderiza la página de la ruta hija activa */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;