import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

// import Profile from "@pages/Profile";

import Home from '@pages/Home';
import Chefs from '@pages/Chefs';

import Menu from '@pages/Menu';
import MenuCategory from '@pages/Menu/MenuCategory';

import About from '@pages/About';
import Reservations from '@pages/Reservations';

import Login from '@pages/Login';
import Register from '@pages/Register';
import LoadingPage from '@pages/LoadingPage';
import ProtectedRoute from '@components/ProtectedRoute';

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
        <Route path='/login' element={!user ? <Login /> : <Home />} />
        <Route path='/register' element={!user ? <Register /> : <Home />} />

        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/chefs' element={<Chefs />} />

        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:category' element={<MenuCategory />} />

        <Route path='/about' element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/reservations' element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
        {/* <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}
      </Routes>
    </Router>
  )
}

export default App
