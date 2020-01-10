import React from 'react';

import Comment from '../Comment/Comment';

export default function Post({ data }) {

  return (
    <>
      <h1>POST</h1>
      <div>
        <h3>{data.author.name}</h3>
        <p>{data.content}</p>
      </div>
      {data.comments.map(c => <Comment key={c.id} data={c} />)}
    </>
  );
}
