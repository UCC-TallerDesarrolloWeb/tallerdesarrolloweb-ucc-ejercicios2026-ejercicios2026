import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout';
import Home from './home';
import Login from './login';
import Actividades from './actividades';

function App() {
  // Estado de sesión compartido por toda la app
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      >
        <Route index element={<Home />} />
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="actividades" element={<Actividades isLoggedIn={isLoggedIn} />} />
        {/* Ruta no encontrada: vuelve al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;