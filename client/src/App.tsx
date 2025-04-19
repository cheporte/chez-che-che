import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

import Home from '@pages/Home';
import Chefs from '@pages/Chefs';

import Menu from '@pages/Menu';
import MenuCategory from '@pages/Menu/MenuCategory';

import About from '@pages/About';
import Reservations from '@pages/Reservations';

import Login from '@pages/Login';
import Register from '@pages/Register';
import LoadingPage from '@pages/LoadingPage';
import ProtectedRoute from '@components/ProtectedRoure';

const App: React.FC = () => {
  const { user, loading } = useAuth();
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsAppReady(true)
    }
  }, [loading]);

  if (!isAppReady) {
    return <LoadingPage />
  }

  return (
    <Router>
      <Routes>
        <Route path='/chez-che-che/login' element={!user ? <Login /> : <Home />} />
        <Route path='/chez-che-che/register' element={!user ? <Register /> : <Home />} />

        <Route path='/chez-che-che' element={user ? <Home /> : <Login />} />
        <Route path='/chez-che-che/chefs' element={<Chefs />} />

        <Route path='/chez-che-che/menu' element={<Menu />} />
        <Route path='/chez-che-che/menu/:category' element={<MenuCategory />} />
        
        <Route path='/chez-che-che/about' element={<About />} />
        <Route path='/chez-che-che/reservations' element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
