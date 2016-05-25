import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { userProfile } from '../api/userProfile.js';

export default class UserProfiles extends Component {
  userSubmit(event) {
    event.preventDefault();

    const fullName = ReactDOM.findDOMNode(this.refs.fullName).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    const age = ReactDOM.findDOMNode(this.refs.age).value.trim();

    userProfile.upsert(this.props.userProfile._id,
      {$set: {
        fullName: fullName,
        email: email,
        age: age,
        UpdatedAt: new Date(),
        username: Meteor.user().username,
        }
      });

    sweetAlert("Profile successfully updated!");

    ReactDOM.findDOMNode(this.refs.fullName).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.age).value = '';
  }

  render() {
    let currentParam = FlowRouter.getParam('user');
    return (
        <div className="user-update">
          <ol className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="active">Update {currentParam}'s Profile</li>
          </ol>
          <form className="update-form" onSubmit={this.userSubmit.bind(this)}>
            <label>Update Account</label>
            <div className="form-group update-input">
              <div className="input-div">
              <input
                type="text"
                ref="fullName"
                placeholder="Full Name"
              />
              </div>
              <div className="input-div">
              <input
                type="text"
                ref="email"
                placeholder="Email"
              />
              </div>
              <div className="input-div">
              <input
                type="text"
                ref="age"
                placeholder="Age"
              />
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

userProfile.propTypes = {
  userProfile: PropTypes.object.isRequired,
};
