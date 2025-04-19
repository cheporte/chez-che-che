import React from "react";
import { Link } from "react-router-dom";

import './Navbar.sass';

const Navbar: React.FC = () => {
  return (
    <div id='navbar'>
      <Link to='/chez-che-che/menu'>Menu</Link>
      <Link to='/chez-che-che/chefs'>Chefs</Link>
      <Link to='/chez-che-che/about'>About</Link>
      <Link to='/chez-che-che/profile'>Profile</Link>
    </div>
  );
}

export default Navbar;
