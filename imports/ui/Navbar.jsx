import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header pull-left">
            <a className="navbar-brand" href="/">
              <span className="logo"><img className="logo-img" src="http://www.hearken.io/wp-content/uploads/2014/01/meteor-icon.png" />
                <span> Meteogram</span>
              </span>
            </a>
          </div>
          <div className="navbar-header pull-right sign-in">
            <AccountsUIWrapper />
          </div>
        </div>
      </nav>
    );
  }
}
