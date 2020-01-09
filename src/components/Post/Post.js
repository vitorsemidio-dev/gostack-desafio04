import React, { Component } from 'react';

import Comment from '../Comment/Comment';

// import { Container } from './styles';

export default class Post extends Component {

  componentDidMount() {
    // console.log(this.props.data);
    // console.log(this.props.data.content);
  }
  render() {
    return (
      <>
        <h1>POST</h1>
        {this.props.data.comments.map(c => <Comment key={c.id} data={c} />)}
      </>
    );
  }
}
