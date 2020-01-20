import React from 'react';

const CommentTile = ({comment}) => {
  

    return (
        <div >
          {comment.author}--
          Votes: {comment.votes}
        </div>
    );
};

export default CommentTile;