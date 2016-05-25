import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../api/posts.js';

import Post from './Post.jsx';

export default class Content extends Component {

  handleSubmit(event) {
    event.preventDefault();

    const caption = ReactDOM.findDOMNode(this.refs.captionInput).value.trim();
    const url = ReactDOM.findDOMNode(this.refs.urlInput).value.trim();

    Posts.insert({
      captionText: caption,
      imgUrl: url,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });

    sweetAlert("Post successful!");

    ReactDOM.findDOMNode(this.refs.captionInput).value = '';
    ReactDOM.findDOMNode(this.refs.urlInput).value = '';
  }

  renderPosts(){
    return this.props.posts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div className="content">
        { this.props.currentUser ?
          <div>
          <ol className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li className="active">{this.props.currentUser.username}'s Posts</li>
          </ol>
          { this.props.currentUser ?
            <div className="update-link">
              <a href={'/update/'+this.props.currentUser.username}> Update Account </a>
            </div> : ''
          }
          <form className="new-post" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label>Post a Meteogram:</label>
              <input
                className="caption"
                type="text"
                ref="captionInput"
                placeholder="Caption"
                required
              />
              <div className="img-url">
              <input
                type="text"
                ref="urlInput"
                placeholder="Image Url"
                />
              <span> or </span>
              <button name="upload" type="button" className="btn btn-primary">Upload</button>
              </div>
              <div className="submit-btn">
                <button type="submit" className="btn btn-default">Post</button>
              </div>
            </div>
          </form>
          </div> :
          <div className="home-hero">
            <h1>Welcome to <span className="meteogram">Meteogram!</span></h1>
            <h4>Instagram for Meteors</h4>
          </div>
        }
        {this.renderPosts()}
      </div>
    );
  }
}

Content.propTypes = {
  posts: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    postCount: Posts.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Content);
