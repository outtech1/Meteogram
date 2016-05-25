import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div className="footer-text pull-right">
            Built on <a href="https://www.meteor.com/">Meteor 1.3</a> and
            <a href="https://facebook.github.io/react/"> React</a>
            <br/>
            Copyright&copy; <a href="https://github.com/tomasvolta">Bon Ariola</a>
          </div>
        </div>
    );
  }
}
