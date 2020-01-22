import React, { Component } from 'react';
import Voter from './Voter';

class CommentTile extends Component {
  state = { optiVote: 0 };

  render() {
    const { comment } = this.props;
    return (
      <div>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
        <Voter id={comment.comment_id} votes={comment.votes} type="comments" />
      </div>
    );
  }
}

export default CommentTile;
