import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import GoogleDrive from './GoogleDrive';
import SomeLink from './SomeLink';

class Chakradojo extends Component {
  render() {
    return (
      <div className="folder">
        <h1>Chakradojo</h1>
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

export default Chakradojo;
