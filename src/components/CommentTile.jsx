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
        {this.props.username === comment.author ? (
          <button onClick={() => this.props.handleDeleteClick(comment.comment_id)}>Delete My Comment</button>
        ) : null}
      </div>
    );
  }
}

export default CommentTile;
