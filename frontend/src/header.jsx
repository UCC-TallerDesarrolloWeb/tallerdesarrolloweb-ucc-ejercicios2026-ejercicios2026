import { NavLink, useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header>
        <h1>GYM</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/actividades">Actividades</a> 
          </nav>
    </header>
  );
};

export default Header;