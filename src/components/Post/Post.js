import React from 'react';
import PropTypes from 'prop-types'

import Comment from '../Comment/Comment';
import './Post.css';

export default function Post({ data }) {

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-user">

        </div>
        <div>
          <span className="post-author-name">{data.author.name}</span>
          <small>{data.date}</small>
        </div>
      </div>
      <p className="post-content">{data.content}</p>
      {data.comments.map(c => <Comment key={c.id} data={c} />)}
    </div>
  );
}

Post.prototype = {
  data: PropTypes.object.isRequired,
}
