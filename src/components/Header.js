import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Chakradojo Dash</h1>
        <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/nmqg">NMQG</NavLink></li>
            <li><NavLink to="/sd">ServiceDirect</NavLink></li>
            <li><NavLink to="/uf">UtopiaFest</NavLink></li>
            <li><NavLink to="/cd">Chakradojo</NavLink></li>
            <li><NavLink to="/calendar">Calendar</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
