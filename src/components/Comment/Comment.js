import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

export default function Comment({ data }) {

  return (
    <>
      <div className="comment">
        <div className="comment-user-avatar">
        </div>
        <p className="comment-content">
          {data.content}
        </p>
      </div>
    </>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
}