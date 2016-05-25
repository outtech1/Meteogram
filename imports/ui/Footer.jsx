import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="footer-text pull-right">
            Built with Meteor 1.3 and React
            <br/>
            Copyright &copy; Bon Ariola
          </div>
        </div>
    );
  }
}
