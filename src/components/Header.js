import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Mythri Globsl School</h1>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/academics">Academics</Link>
        <br/>
        <Link to="/admissions">Admissions</Link>
      </nav>
    </header>
  );
}

export default Header;
