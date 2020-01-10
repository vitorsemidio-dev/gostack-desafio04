import React, { Component } from 'react';

// import { Container } from './styles';

export default class Comment extends Component {

  componentDidMount() {
    console.log(this.props.data, 'Comment');
  }
  render() {
    return (
      <>
        <h1>Comments</h1>
        <div>
          <h4>
            {this.props.data.author.name}
          </h4>
          <p>
            {this.props.data.content}
          </p>
        </div>
      </>
    );
  }
}
