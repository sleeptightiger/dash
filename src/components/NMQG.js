import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import GoogleDrive from './GoogleDrive';
import SomeLink from './SomeLink';

class NMQG extends Component {
  render() {
    return (
      <div className="folder">
        <h1>NMQG</h1>
        <nav>
          <li><NavLink to="/nmqg/gd">GoogleDrive</NavLink></li>
          <li><NavLink to="/nmqg/somelink">SomeLink</NavLink></li>
        </nav>

        <Route path="/nmqg/gd" component={GoogleDrive} />
        <Route path="/nmqg/somelink" component={SomeLink} />

      </div>
    );
  }
}

export default NMQG;
