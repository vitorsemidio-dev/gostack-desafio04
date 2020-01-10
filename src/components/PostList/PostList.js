import React, { Component } from 'react';

import Post from '../Post/Post';
import { Posts } from '../../db/PostsMock';

import './PostList.css';

export default class PostList extends Component {
  state = {
    posts: Posts,
  };

  render() {
    return (
      <>
        <div className="post-list">
          {this.state.posts.map(p => <Post key={p.id} data={p} />)}
        </div>
      </>
    );
  }
}
