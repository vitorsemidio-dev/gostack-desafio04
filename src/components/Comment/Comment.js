import React from 'react';
import PropTypes from 'prop-types';


export default function Comment({ data }) {

  return (
    <>
      <h1>Comments</h1>
      <div>
        <h4>
          {data.author.name}
        </h4>
        <p>
          {data.content}
        </p>
      </div>
    </>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
}