import React, { Component } from 'react';

// import { Container } from './styles';

export default class Comment extends Component {

  componentDidMount() {
    // console.log(this.props.data, 'Comment');
  }
  render() {
    return (
      <>
        <h1>Comments</h1>
        {/* {this.props.data.map(c => <li key={c.id}>{c.content}</li>)} */}
      </>
    );
  }
}
