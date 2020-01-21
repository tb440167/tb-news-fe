import React from 'react';

const CommentTile = ({ comment }) => {
  return (
    <div>
      <p>{comment.body}</p>
      <p>{comment.author}</p>Votes: {comment.votes}
    </div>
  );
};

export default CommentTile;
