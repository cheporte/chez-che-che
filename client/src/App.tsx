import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '@pages/Home';
import Chefs from '@pages/Chefs';

import Menu from '@pages/Menu';
import MenuCategory from '@pages/Menu/MenuCategory';

import About from '@pages/About';
import Reservations from '@pages/Reservations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/chez-che-che' element={<Home />} />
        <Route path='/chez-che-che/chefs' element={<Chefs />} />

        <Route path='/chez-che-che/menu' element={<Menu />} />
        <Route path='/chez-che-che/menu/:category' element={<MenuCategory />} />
        
        <Route path='/chez-che-che/about' element={<About />} />
        <Route path='/chez-che-che/reservations' element={<Reservations />} />
      </Routes>
    </Router>
  )
}

export default App
