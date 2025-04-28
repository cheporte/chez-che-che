import React from "react";
import { Link } from "react-router-dom";

import './Navbar.sass';

const Navbar: React.FC = () => {
  return (
    <div id='navbar'>
      <Link to='/menu'>Menu</Link>
      <Link to='/chefs'>Chefs</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Navbar;
