import React, { Component } from 'react';

import Post from '../Post/Post';

// import { Container } from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  componentDidMount() {
    // console.log(this.state.posts);
    // console.log('Conteudo do post:');
    // this.state.posts.forEach(p => console.log(p.content));
  }
  render() {
    return (
      <>
        <ul>
          {this.state.posts.map(p => <Post key={p.id} data={p} />)}
        </ul>
      </>
    );
  }
}
