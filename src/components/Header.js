import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../mythri-images/logo.jpg'

function Header() {
  return (
    <header>
       <h1>Mythri Global School @ Suryapet</h1>
      <div >
        <table>
          <tr>
            <td> </td>
            <td> <img width={250} height={250} src={logo} alt="Logo" />;</td>
            <td><h2>Contact us : +91-6304969359</h2></td>
          </tr>
        </table>
     
        
         
      </div>
    
     
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
