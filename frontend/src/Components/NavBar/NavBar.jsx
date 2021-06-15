import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
    <header className="row">
        <div>
          <Link to="/">eBistrot</Link>
        </div>
        <div>
          <Link to="/Menu">Menu</Link>
        </div>
        <div>
          <Link to="/Specials">Specials</Link>
        </div>
        <div>
          <Link to="/Login">Log In</Link>
        </div>
    </header>
    );
  }

export default NavBar;