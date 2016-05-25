import React, { Component, PropTypes } from 'react';
import InlineEdit from 'react-edit-inline';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../api/posts.js';

export default class Post extends Component {

  constructor(props){
      super(props);
      this.updatePost = this.updatePost.bind(this);
      this.state = {
        caption: this.props.post.captionText,
        url: this.props.post.imgUrl,
        username: this.props.post.username,
      }
  }

  deletePost() {
    Posts.remove(this.props.post._id);
  }

  updatePost(data) {
    Posts.update(this.props.post._id,
      {$set: {
        captionText: data.captionText,
        createdAt: new Date(),
        }
      });
      this.setState({caption: data.captionText})
  }



  render() {
      let divStyle={
        backgroundImage: 'url(' + this.state.url + ')',
    }
    return (
      <div className="posts-box" style={divStyle}>
        { Meteor.user() ?
          <button className="btn btn-primary btn-xs pull-right" onClick={this.deletePost.bind(this)}>
            <i className="fa fa-trash-o"></i>
          </button> : ''
        }
        <div className="caption-box">
          { Meteor.user() ?
            <div>
            <InlineEdit
              activeClassName="editing"
              text={this.state.caption}
              paramName="captionText"
              change={this.updatePost}
            />
            <br/>
            <span className="caption-user">{this.state.username}</span>
            </div> :
            <div className="caption-text">
            <span className="caption-ed">{this.state.caption}</span><br/>
            <span className="caption-user">{this.state.username}</span>
            </div>
            }
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
