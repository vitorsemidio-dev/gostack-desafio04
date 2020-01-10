import React, { Component } from 'react';

import Post from '../Post/Post';
import { Posts } from '../../db/PostsMock';

// import { Container } from './styles';

export default class PostList extends Component {
  state = {
    posts: Posts,
  };

  componentDidMount() {
    // console.log(this.state.posts);
    // console.log('Conteudo do post:');
    // this.state.posts.forEach(p => console.log(p.content));
  }
  render() {
    return (
      <>
        <h1>PostList</h1>
        <ul>
          {this.state.posts.map(p => <Post key={p.id} data={p} />)}
        </ul>
      </>
    );
  }
}
