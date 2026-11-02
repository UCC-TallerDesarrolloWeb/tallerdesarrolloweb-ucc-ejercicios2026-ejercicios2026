import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "True";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <header>
      <h1>GYM</h1>
      <nav>
        <a href="/">Home</a>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Cerrar sesion</button>
        ) : (
          <a href="/login">Login</a>
        )}
        <a href="/actividades">Actividades</a>
        <a href="/poke">pokemones</a>
      </nav>
    </header>
  );
};

export default Header;
